import serial
from flask import Flask, jsonify, request
from flask_cors import CORS
import threading
import pandas as pd
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Permitir solicitudes desde cualquier origen


class SerialReader:
    def __init__(self, port_name="/dev/ttyACM0"):
        self.ser = serial.Serial(port_name, baudrate=9600, timeout=0.02)
        self.data_list = [0]
        self.isInit = False
        self.stop_thread = False
        self.serial_thread = None  # Almacenar el hilo como una propiedad

    def create_serial_thread(self):
        return threading.Thread(target=self.read_serial)

    def read_serial(self):
        try:
            while (not self.stop_thread and self.isInit):
                
                if(not self.isInit):
                    self.set_data_list_to_0()
                
                line = self.ser.readline().decode('utf-8').strip()

                if line:
                    empuje = float(line)
                    fuerza = empuje*9.81
                    if (fuerza - self.data_list[-1])>50:
                        if(fuerza>self.data_list[-1]):
                            self.data_list.append(self.data_list[-1])
                        else:
                            self.data_list.append(fuerza)
                    self.data_list.append(fuerza)
                if not self.isInit:
                    break
        except Exception as e:
            print(f'Error en el hilo de la lectura serial: {e}')
        finally:
            self.save_data()
            print("\nFinalizando prueba")
    
    def save_data(self):
        self.data_dict = {"Empuje": self.data_list}
        df = pd.DataFrame(self.data_dict)
        df.to_csv(f"/home/fernu/Projects/Estacion_Terrena_Electron/server/Data/{datetime.now()}_PruebaBanco.cvs")
        self.ser.close()
    
    def set_data_list_to_0(self):
        self.data_list = [0]
        return len(self.data_list)
    

serial_reader = SerialReader("/dev/ttyACM0")


# Rutas de aplicacion
@app.route('/api/data', methods=['GET', 'POST'])
def get_data():
    if request.method == 'GET':
        print(f"\nConsulta datos, empuje size: {len(serial_reader.data_list)}")
        return jsonify(serial_reader.data_list)
    
    elif request.method == 'POST':
        serial_reader.isInit = not serial_reader.isInit
        
        if(serial_reader.isInit):
            serial_reader.serial_thread = serial_reader.create_serial_thread()
            serial_reader.serial_thread.start()    
        if( not serial_reader and serial_reader.serial_thread.is_alive()):
            serial_reader.serial_thread.join()       
        
        print(f"\nCambiamos el dato de init: {serial_reader.isInit}")
        return jsonify(serial_reader.isInit)

@app.route('/api/data/restart', methods=['POST'])
def set_data():
    serial_reader.data_list = [0]
    print(f"Longitud nueva: {len(serial_reader.data_list)}")
    return jsonify(serial_reader.data_list)

@app.route('/api/data/save_data', methods=['POST'])
def safe_data():
    serial_reader.save_data();
    return True

if __name__ == '__main__':
    try:
        app.run(port=5000)
    finally:
        serial_reader.stop_thread = True
        if serial_reader.serial_thread and serial_reader.serial_thread.is_alive():
            serial_reader.serial_thread.join()
