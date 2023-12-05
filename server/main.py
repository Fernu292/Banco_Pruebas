import serial
from flask import Flask, jsonify, request
from flask_cors import CORS
import threading
import pandas as pd
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Permitir solicitudes desde cualquier origen


class SerialReader:
    def __init__(self, port_name):
        self.ser = serial.Serial(port_name, baudrate=9600, timeout=1)
        self.data_list = [0]
        self.isInit = False
        self.port_name_GNU = "/dev/ttyACM0"
        self.stop_thread = False
        self.serial_thread = None  # Almacenar el hilo como una propiedad

    def create_serial_thread(self):
        return threading.Thread(target=self.read_serial)

    def read_serial(self):
        try:
            while (not self.stop_thread and self.isInit):
                line = self.ser.readline().decode('utf-8').strip()

                if line:
                    distance = float(line)
                    if (distance - self.data_list[-1]) > 10:
                        self.data_list.append(self.data_list[-1])
                    else:
                        self.data_list.append(distance)
        except Exception as e:
            print(f'Error en el hilo de la lectura serial: {e}')
        finally:
            self.data_dict = {"distance": self.data_list}
            df = pd.DataFrame(self.data_dict)
            df.to_csv(f"/home/fernu/Projects/Estacion_Terrena_Electron/server/Data/{datetime.now()}_PruebaBanco.cvs")
            self.ser.close()

    # Funcion que se ejecuta despues de cada request
    @app.after_request
    def after_request(response):
        if request.method == 'POST':
            global serial_thread
            if serial_reader.isInit:
                # Detener el hilo existente si está en ejecución
                if serial_reader.serial_thread and serial_reader.serial_thread.is_alive():
                    serial_reader.stop_thread = True
                    serial_reader.serial_thread.join()

                # Crear y comenzar un nuevo hilo
                serial_reader.serial_thread = serial_reader.create_serial_thread()
                serial_reader.serial_thread.start()

        return response

    # Rutas de aplicacion
    @app.route('/api/data', methods=['GET', 'POST'])
    def get_data():
        if request.method == 'GET':
            return jsonify(serial_reader.data_list)
        elif request.method == 'POST':
            serial_reader.isInit = not serial_reader.isInit
            return jsonify(serial_reader.isInit)


if __name__ == '__main__':
    serial_reader = SerialReader("/dev/ttyACM0")
    try:
        app.run(port=5000)
    finally:
        serial_reader.stop_thread = True
        if serial_reader.serial_thread and serial_reader.serial_thread.is_alive():
            serial_reader.serial_thread.join()
