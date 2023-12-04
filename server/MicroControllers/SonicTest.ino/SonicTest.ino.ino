const int Trigger = 3;
const int Echo = 2;

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600);
  pinMode(Trigger, OUTPUT);
  pinMode(Echo, INPUT);
  digitalWrite(Trigger, LOW);

}

void loop() {
  long t;
  long d;

  // put your main code here, to run repeatedly:
  digitalWrite(Trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(Trigger, LOW);

  t = pulseIn(Echo, HIGH); //Obtenemos el ancho del pulso
  d = t/59;

  Serial.print(d);
  Serial.println();
  delay(100);
}
