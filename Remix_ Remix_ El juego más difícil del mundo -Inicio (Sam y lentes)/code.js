var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["203ba85d-5905-4034-a703-c28afc28ff29","a72d8b9d-e790-431c-b9eb-2ccd35490069"],"propsByKey":{"203ba85d-5905-4034-a703-c28afc28ff29":{"name":"gameplayfaces_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Emki3cuQFXCrsIwVW0u.PU8WUzgaPiH1/category_faces/gameplayfaces_03.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Emki3cuQFXCrsIwVW0u.PU8WUzgaPiH1","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Emki3cuQFXCrsIwVW0u.PU8WUzgaPiH1/category_faces/gameplayfaces_03.png"},"a72d8b9d-e790-431c-b9eb-2ccd35490069":{"name":"sam","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"T7Q6rvLnbMAqJH4lrRkwtWbMGD5mDXbI","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/a72d8b9d-e790-431c-b9eb-2ccd35490069.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

tienda = createSprite(372,180,10,20);


  tienda.shapeColor= "black";
  boundary1 = createSprite(190,120,420,3);
  boundary1.shapeColor= "black";
  
  boundary2 = createSprite(190,260,420,3);
  boundary2.shapeColor= "black";
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
 sam.setAnimation("sam");
   
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//Agrega velocidad  para hacer que el auto se mueva.

car1.velocityY=1;
car2.velocityY=3;
car3.velocityY=1;
car4.velocityY=3;


function draw() {
   background("GRAY");
   fill("green");
  textSize(20);
  
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
createEdgeSprites();
car1.bounceOff( boundary1);
car1.bounceOff( boundary2);
car2.bounceOff( boundary1);
car2.bounceOff( boundary2);
car4.bounceOff( boundary1);
car4.bounceOff( boundary2);
car3.bounceOff( boundary1);
car3.bounceOff( boundary2);


//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if (keyDown("D")) {
  sam.x=sam.x+2;
}




//Agregar la condición de reducir la vida de Sam si toca el carro.
if (sam.isTouching(car1)||sam.isTouching(car2) ) {
  life=life-1;
  sam.x=20;
  sam.y=180;
}

if (sam.isTouching(tienda)) {
  fill("green");
  textSize(40);
  
  text("sam llego a la tienda",200,200);
}


  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
