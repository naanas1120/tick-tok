var hr,min,sec,hourAngle,minAngle,secangle

function setup() {
  createCanvas(400,400);
angleMode(DEGREES)
}

function draw() {
background(0)
translate(200,200)
rotate(-90)


fill("white") 
textSize(25)
text("3",10,100)

fill("white") 
textSize(25)
text("12",85,15)

fill("white") 
textSize(25)
text("9",5,-100)

fill("white") 
textSize(25)
text("6",-105,8)

hr=hour()
min=minute()
sec=second()

minAngle=map(min,0,60,0,360)
push()
rotate(minAngle)
stroke("green")
strokeWeight(7)
line(0,0,70,0)
pop()

secAngle=map(sec,0,60,0,360)
push()
rotate(secAngle)
stroke("red")
strokeWeight(7)
line(0,0,90,0)
pop()

hourAngle=map(hr%12,0,12,0,360)
push()
rotate(hourAngle)
stroke("blue")
strokeWeight(7)
line(0,0,50,0)
pop()

strokeWeight(10)
stroke("blue")
noFill()
arc(0,0,260,260,0,hourAngle)

strokeWeight(10)
stroke("green")
noFill()
arc(0,0,280,280,0,minAngle)

strokeWeight(10)
stroke("red")
noFill()
arc(0,0,300,300,0,secAngle)
}