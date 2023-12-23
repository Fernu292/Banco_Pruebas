const int Echo = 2;
const int Trigger = 4;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(Echo, INPUT);
  pinMode(Trigger, OUTPUT);
  digitalWrite(Trigger, LOW);
}

void loop() {
  // put your main code here, to run repeatedly:
  long t; //timepo que demora en llegar el eco
  long d; //distancia en centimetros

  digitalWrite(Trigger, HIGH);
  delayMicroseconds(50);          //Enviamos un pulso de 10us
  digitalWrite(Trigger, LOW);
  
  t = pulseIn(Echo, HIGH); //obtenemos el ancho del pulso
  d = t/59;             //escalamos el tiempo a una distancia en cm
  
  Serial.print(d);      //Enviamos serialmente el valor de la distancia
  Serial.println();
  delay(100);          //Hacemos una pausa de 100ms
}

