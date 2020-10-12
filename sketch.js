var wall,thickness;
var bullet,speed,weight;

thickness = random(22,83);

speed=random(223,321);
weight=random(30,52);

damage=0.5*bulletweight*bulletspeed*bulletspeed/(thicknessofwall) * (thicknessofwall) * (thicknessofwall)

function setup() {
createcanvas(2000,400);

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor(white);

bullet=createsprite(200,200,10,20)
bullet.velocityX=speed;

}

function draw () {
background(0,0,0);
if(hasCollided(bullet,wall))
{ 
  bullet.velocityX=0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10) {
wall.shapeColor=color(255,0,0);
}
if (damage<10) {
wall.shapeColor=color(0,255,0)
}
}

drawSprites();
}

function hasCollided(bullet,wall) {

  bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x

if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return true;
}