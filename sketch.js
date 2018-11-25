
Gx = 0.763532293;
Gy = 0.763532293;	
Gz = 0.429502038;
Px = 0.819788282;
Py = 0.819788282;
Pz = 0.214751019;
Rx = 0.87604427;
Ry = 0.763532293;
Rz = 0;
S0x = 0.87604427;
S0y = 0;
S0z = 0;
Sx = 0.763532293;
Sy = 0;
Sz = 0.429502038;
Mx = 0.0000000000;
My = 0.0000000000;
Mz = 0.4295020375;
Tx = Mx;
Ty = My;
Tz = Mz/2;
Xx = Px;
Xy = Py;
Xz = 0;

angle = 0;

function preload() {
	//font = loadFont('OpenSans-Regular.ttf');
	//font = loadFont('NotoSansKR-Regular.otf');
}

function setup(){
	var canvas = createCanvas(600, 600, WEBGL);
	canvas.parent('sketch-holder');
}

function draw() {

	
	let angleX = map(mouseX, 0, width, 0, 2*PI);
	let angleY = map(mouseY, 0, height, 0, 2*PI);
	camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
	scale(200);
	background(256);

	stroke(0);

	fill(0, 0, 0);
	//translate(0.1, 0.1, 0.1);
	

	rotateX(angleY);
	rotateY(angleX);
	angle = 1
	rotateZ(angle);
	//angle += 0.003;
	

	// Draw G1:G2
	beginShape();
	vertex(Gx, Gy, Gz, 0, 0);
	vertex(-Gx, Gy, Gz, 0, 0);
	endShape(CLOSE);

	// Draw G2:G3
	beginShape();
	vertex(-Gx, Gy, Gz, 0, 0);
	vertex(-Gx, -Gy, Gz, 0, 0);
	endShape(CLOSE);

	// Draw G3:G4
	beginShape();
	vertex(-Gx, -Gy, Gz, 0, 0);
	vertex(Gx, -Gy, Gz, 0, 0);
	endShape(CLOSE);

	// Draw G4:G1
	beginShape();
	vertex(Gx, -Gy, Gz, 0, 0);
	vertex(Gx, Gy, Gz, 0, 0);
	endShape(CLOSE);

	


	// Draw 'G1:'G2
	beginShape();
	vertex(Gx, Gy, -Gz, 0, 0);
	vertex(-Gx, Gy, -Gz, 0, 0);
	endShape(CLOSE);

	// Draw 'G2:'G3
	beginShape();
	vertex(-Gx, Gy, -Gz, 0, 0);
	vertex(-Gx, -Gy, -Gz, 0, 0);
	endShape(CLOSE);

	// Draw 'G3:'G4
	beginShape();
	vertex(-Gx, -Gy, -Gz, 0, 0);
	vertex(Gx, -Gy, -Gz, 0, 0);
	endShape(CLOSE);

	// Draw 'G4:'G1
	beginShape();
	vertex(Gx, -Gy, -Gz, 0, 0);
	vertex(Gx, Gy, -Gz, 0, 0);
	endShape(CLOSE);



	// Draw G1:P1
	beginShape();
	vertex(Gx, Gy, Gz, 0, 0);
	vertex(Px, Py, Pz, 0, 0);
	endShape(CLOSE);

	// Draw G2:P2
	beginShape();
	vertex(-Gx, Gy, Gz, 0, 0);
	vertex(-Px, Py, Pz, 0, 0);
	endShape(CLOSE);

	// Draw G3:P3
	beginShape();
	vertex(-Gx, -Gy, Gz, 0, 0);
	vertex(-Px, -Py, Pz, 0, 0);
	endShape(CLOSE);

	// Draw G4:P4
	beginShape();
	vertex(Gx, -Gy, Gz, 0, 0);
	vertex(Px, -Py, Pz, 0, 0);
	endShape(CLOSE);


	// Draw 'G1:'P1
	beginShape();
	vertex(Gx, Gy, -Gz, 0, 0);
	vertex(Px, Py, -Pz, 0, 0);
	endShape(CLOSE);

	// Draw 'G2:'P2
	beginShape();
	vertex(-Gx, Gy, -Gz, 0, 0);
	vertex(-Px, Py, -Pz, 0, 0);
	endShape(CLOSE);

	// Draw 'G3:'P3
	beginShape();
	vertex(-Gx, -Gy, -Gz, 0, 0);
	vertex(-Px, -Py, -Pz, 0, 0);
	endShape(CLOSE);

	// Draw 'G4:'P4
	beginShape();
	vertex(Gx, -Gy, -Gz, 0, 0);
	vertex(Px, -Py, -Pz, 0, 0);
	endShape(CLOSE);


	// Draw R1a:R2b
	beginShape();
	vertex(Rx, Ry, Rz, 0, 0);
	vertex(Rx, -Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw R2a:R3b
	beginShape();
	vertex(-Rx, Ry, Rz, 0, 0);
	vertex(-Rx, -Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw R3a:R4b
	beginShape();
	vertex(Ry, Rx, Rz, 0, 0);
	vertex(-Ry, Rx, Rz, 0, 0);
	endShape(CLOSE);

	// Draw R4a:R1b
	beginShape();
	vertex(Ry, -Rx, Rz, 0, 0);
	vertex(-Ry, -Rx, Rz, 0, 0);
	endShape(CLOSE);



	// Draw P:R
	beginShape();
	vertex(Px, Py, Pz, 0, 0);
	vertex(Rx, Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(Px, Py, Pz, 0, 0);
	vertex(Ry, Rx, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:R
	beginShape();
	vertex(Px, Py, -Pz, 0, 0);
	vertex(Rx, Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(Px, Py, -Pz, 0, 0);
	vertex(Ry, Rx, Rz, 0, 0);
	endShape(CLOSE);



	// Draw P:R
	beginShape();
	vertex(-Px, Py, Pz, 0, 0);
	vertex(-Rx, Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(-Px, Py, Pz, 0, 0);
	vertex(-Ry, Rx, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:R
	beginShape();
	vertex(-Px, Py, -Pz, 0, 0);
	vertex(-Ry, Rx, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(-Px, Py, -Pz, 0, 0);
	vertex(-Rx, Ry, Rz, 0, 0);
	endShape(CLOSE);






	// Draw P:R
	beginShape();
	vertex(Px, -Py, Pz, 0, 0);
	vertex(Rx, -Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(Px, -Py, -Pz, 0, 0);
	vertex(Rx, -Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:R
	beginShape();
	vertex(Px, -Py, Pz, 0, 0);
	vertex(Ry, -Rx, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(Px, -Py, -Pz, 0, 0);
	vertex(Ry, -Rx, Rz, 0, 0);
	endShape(CLOSE);



	// Draw P:R
	beginShape();
	vertex(-Px, -Py, Pz, 0, 0);
	vertex(-Ry, -Rx, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(-Px, -Py, -Pz, 0, 0);
	vertex(-Ry, -Rx, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:R
	beginShape();
	vertex(-Px, -Py, Pz, 0, 0);
	vertex(-Rx, -Ry, Rz, 0, 0);
	endShape(CLOSE);

	// Draw P:'R
	beginShape();
	vertex(-Px, -Py, -Pz, 0, 0);
	vertex(-Rx, -Ry, Rz, 0, 0);
	endShape(CLOSE);





	// Draw P surface
	push(); 
	beginShape();
	fill(0,0,255, 25);

	vertex(Px, Py, Pz, 0, 0);
	vertex(-Px, Py, Pz, 0, 0);
	vertex (-Px, -Py, Pz, 0, 0);
	vertex (Px, -Py, Pz, 0, 0);
	endShape(CLOSE);
	pop();

	/*
	// Draw X surface
	push(); 
	beginShape();
	fill(255,0,0, 25);

	vertex(Xx, Xy, Xz, 0, 0);
	vertex(-Xx, Xy, Xz, 0, 0);
	vertex (-Xx, -Xy, Xz, 0, 0);
	vertex (Xx, -Xy, Xz, 0, 0);
	endShape(CLOSE);
	pop();
	*/


	// Draw P points
	push();
		translate(Px, Py, Pz);
		stroke(0, 0, 255);
		sphere(0.04);
		
	pop();

	push();
		translate(-Px, Py, Pz);
		stroke(0, 0, 255);
		sphere(0.04);
	pop();

	push();
		translate(-Px, -Py, Pz);
		stroke(0, 0, 255);
		sphere(0.04);
	pop();

	push();
		translate(Px, -Py, Pz);
		stroke(0, 0, 255);
		sphere(0.04);
	pop();

	// Draw X points
	push();
		translate(Xx, Xy, Xz);
		stroke(255, 0, 0);
		sphere(0.04);
		
	pop();

	push();
		translate(-Xx, Xy, Xz);
		stroke(255, 0, 0);
		sphere(0.04);
	pop();

	push();
		translate(-Xx, -Xy, Xz);
		stroke(255, 0, 0);
		sphere(0.04);
	pop();

	push();
		translate(Xx, -Xy, Xz);
		stroke(255, 0, 0);
		sphere(0.04);
	pop();


	// Draw M and Gamma points
	push();
		stroke(255, 0, 255);
		sphere(0.04);
		stroke(0, 0, 0);
	pop();
	push();
		translate(Mx, My, Mz);
		stroke(0, 255, 0);
		sphere(0.04);
	pop();


	// Draw T points
	push();
		translate(Tx, Ty, Tz);
		stroke(0, 255, 255);
		sphere(0.04);
	pop();

	//save('RbFeSe_BZ_Screenshot.jpg');
}