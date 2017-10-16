function setup() { 
  createCanvas(300,500);
	colorMode(HSB);
	
} 

function draw() { 
  background(0,100,0);
	
	stroke(0,0,40);
line(150,0,150,500);
line(0,250,300,250);
	
var a = 140
var b = 240
		
	while	(a >=0){
		line(a, 0, a, b)
		a=a-10;
		b=b-10;
}
	
a= 240
b=140
	
	while (b>=0){
		line(0,a,b,a);
		a=a-10;
		b=b-10;
	}
	
a = 160
b = 240
	
	while(b>=0){
		line(a,0,a,b);
		a=a+10;
		b=b-10;
	}
	
a= 160
b = 240
	
	while(b>0){
		line(a,b,300,b);
		a=a+10;
		b=b-10;
}
	
a= 260
b=140
	
	while(b>=0){
		line(0,a,b,a);
		a=a+10;
		b=b-10;
}

a=140
b=260
	
	while(a>=0){
		line(a,b,a,500)
		a=a-10;
		b=b+10;
	}
	
a=160
b=260
	
	while(a<=300){
		line(a,b,a,500)
		a=a+10;
		b=b+10;
	}
	
a=160
b=260
	
	while(b<=500){
		line(a,b,300,b)
		a=a+10;
		b=b+10;
	}
}
