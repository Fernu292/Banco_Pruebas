import serial
from flask import Flask, jsonify
from flask_cors import CORS
import threading
import pandas as pd
from datetime import datetime

app = Flask(__name__)
CORS(app) # Permitir solicitudes desde cualquier origien

data_list = [0]
port_name = "/dev/ttyACM0"
ser = serial.Serial(port_name, baudrate=9600, timeout=1)
stop_thread = False

def read_serial():
    global data_list
    try:
        while not stop_thread:
            line = ser.readline().decode('utf-8').strip()
            
            if line:
                distance = float(line)
                if (distance - data_list[-1]) > 10:
                    data_list.append(data_list[-1])
                else:
                    data_list.append(distance)
    except Exception as e:
        print(f'Error en el hulo de la lectura serial: {e}')
    finally:
        
        data_dict = {"distance": data_list}
        df = pd.DataFrame(data_dict)
        
        df.to_csv(f"/home/fernu/Projects/Estacion_Terrena_Electron/server/Data/{datetime.now()}_PruebaBanco.cvs")        
        ser.close()

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data_list)

if __name__ == '__main__':
    serial_thread = threading.Thread(target=read_serial)
    serial_thread.start()
    
    app.run(port=5000)
    
    stop_thread = True
    serial_thread.join()