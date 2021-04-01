var material, material1, material2, material3, material4, material5, material_o;
var materiall, materiall1, materiall2, materiall3, materiall4, materiall5, material_o;
var hydrogen, helium, boron, lithium, beryllium;
var sphere, sphere1, sphere2, sphere3, sphere4, sphere5;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,10000);
var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//when window resizes
window.addEventListener('resize', function()
{
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width/height;
  camera.updateProjectionMatrix();
});

var controls = new THREE.OrbitControls(camera,renderer.domElement);

// // to fix control...allows moving along y-axis only
// controls.maxPolarAngle = Math.PI/2;
// controls.minPolarAngle = Math.PI/2;

//init
function init() {
   // controls.addEventListener('change',renderer);      //Causes - Uncaught TypeError: array[i].call is not a function

   // Hydrogen
   const geometry1 = new THREE.BoxGeometry( 5, 5, 5 );
   let texture1 = new THREE.TextureLoader().load('hydrogen.jpg');
   material1 = new THREE.MeshBasicMaterial( {map:texture1} );
   material1.side = THREE.DoubleSide;
   hydrogen = new THREE.Mesh( geometry1, material1 );
   hydrogen.position.set(-20,20,10);

   //Helium
   const geometry2 = new THREE.BoxGeometry( 5, 5, 5 );
   let texture2 = new THREE.TextureLoader().load('helium.jpg');
   material2 = new THREE.MeshBasicMaterial( {map:texture2} );
   material2.side = THREE.DoubleSide;
   helium = new THREE.Mesh( geometry2, material2 );
   helium.position.set(0,20,10);

   //lithium
   const geometry3 = new THREE.BoxGeometry( 5, 5, 5 );
   let texture3 = new THREE.TextureLoader().load('lithium.jpg');
   material3 = new THREE.MeshBasicMaterial( {map:texture3} );
   material3.side = THREE.DoubleSide;
   lithium = new THREE.Mesh( geometry3, material3 );
   lithium.position.set(-20,15,10);

   //beryllium
   const geometry4 = new THREE.BoxGeometry( 5, 5, 5 );
   let texture4 = new THREE.TextureLoader().load('beryllium.jpg');
   material4 = new THREE.MeshBasicMaterial( {map:texture4} );
   material4.side = THREE.DoubleSide;
   beryllium = new THREE.Mesh( geometry4, material4 );
   beryllium.position.set(-15,15,10);

   //boron
   const geometry5 = new THREE.BoxGeometry( 5, 5, 5 );
   let texture5 = new THREE.TextureLoader().load('boron.jpg');
   material5 = new THREE.MeshBasicMaterial( {map:texture5} );
   material2.side = THREE.DoubleSide;
   boron = new THREE.Mesh( geometry5, material5 );
   boron.position.set(-5,15,10);

   camera.position.z = 45;
   camera.position.x = -5;
   camera.position.y = 10;
   // camera.position.z = 300;
   // camera.lookAt(-10,18,30);
}


//create shape
var geometryy = new THREE.SphereGeometry(4,30,10);
materiall = new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: true});
sphere = new THREE.Mesh(geometryy, materiall);

//create shape1
var geometryy1 = new THREE.SphereGeometry(2,30,10);
materiall1 = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
sphere1 = new THREE.Mesh(geometryy1, materiall1);

sphere1.position.z += 15;
sphere1.position.y += 0;


//create shape2
var geometryy2 = new THREE.SphereGeometry(2,30,10);
materiall2 = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
sphere2 = new THREE.Mesh(geometryy2, materiall2);

sphere2.position.z += 15;
sphere2.position.y -= 0;


//create shape3
var geometryy3 = new THREE.SphereGeometry(2,30,10);
materiall3 = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
sphere3 = new THREE.Mesh(geometryy3, materiall3);

sphere3.position.z += 30;
sphere3.position.y += 0;


//create shape4
var geometryy4 = new THREE.SphereGeometry(2,30,10);
materiall4 = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
sphere4 = new THREE.Mesh(geometryy4, materiall4);

sphere4.position.z -= 30;
sphere4.position.y += 0;


//create shape5
var geometryy5 = new THREE.SphereGeometry(2,30,10);
materiall5 = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
sphere5 = new THREE.Mesh(geometryy5, materiall5);

sphere5.position.z -= 30;
sphere5.position.y -= 0;


// Orbits
var orbits = function(name, radius, delta){
  var theta =0;
  var diff = 2*Math.PI/1000;
  material_o = new THREE.LineBasicMaterial ();
  var geometry_o = new THREE.Geometry();
  for (theta; theta<= 2 * Math.PI; theta+=diff){
      geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta) , 0, radius * Math.sin(theta)));
  }
  var orbit = new THREE.Line(geometry_o, material_o);
  scene.add(orbit);
}

// Hydrogen
var renderH = function()
{
  renderEmpty();
  orbits(sphere, 15, 100);
  scene.add(sphere);
  scene.add(sphere1);

  theta += dtheta;

  sphere1.position.z = r*Math.sin(theta);
  sphere1.position.x = r*Math.cos(theta);
};



//Lithium
var renderL = function()
{
  renderEmpty();
  orbits(sphere, 15, 100);
  orbits(sphere, 25, 100);
  scene.add(sphere);
  scene.add(sphere1);
  scene.add(sphere2);
  scene.add(sphere3);

  theta += dtheta;

  sphere1.position.z = r*Math.sin(theta);
  sphere1.position.x = r*Math.cos(theta);

  sphere2.position.x = r*Math.cos(theta+180);
  sphere2.position.z = r*Math.sin(theta+180);

  sphere3.position.x = (r+10)*Math.cos(theta+90);
  sphere3.position.z = (r+10)*Math.sin(theta+90);
};

//Beryllium
var renderBe = function()
{
  renderEmpty();
  orbits(sphere, 15, 100);
  orbits(sphere, 25, 100);
  scene.add(sphere);

  scene.add(sphere1);
  scene.add(sphere2);
  scene.add(sphere3);
  scene.add(sphere4);

  theta += dtheta;

  sphere1.position.z = r*Math.sin(theta);
  sphere1.position.x = r*Math.cos(theta);

  sphere2.position.x = r*Math.cos(theta+180);
  sphere2.position.z = r*Math.sin(theta+180);

  sphere3.position.x = (r+10)*Math.cos(theta+90);
  sphere3.position.z = (r+10)*Math.sin(theta+90);

  sphere4.position.x= (r+10)*Math.cos(theta+150);
  sphere4.position.z = (r+10)*Math.sin(theta+150);
};


//Boron
var renderB = function()
{
  renderEmpty();
  orbits(sphere, 15, 100);
  orbits(sphere, 25, 100);
  scene.add(sphere);
  scene.add(sphere1);
  scene.add(sphere2);
  scene.add(sphere3);
  scene.add(sphere4);
  scene.add(sphere5);

  theta += dtheta;

  sphere1.position.z = r*Math.sin(theta);
  sphere1.position.x = r*Math.cos(theta);

  sphere2.position.x = r*Math.cos(theta+180);
  sphere2.position.z = r*Math.sin(theta+180);

  sphere3.position.x = (r+10)*Math.cos(theta+90);
  sphere3.position.z = (r+10)*Math.sin(theta+90);

  sphere4.position.x= (r+10)*Math.cos(theta+150);
  sphere4.position.z = (r+10)*Math.sin(theta+150);

  sphere5.position.x = (r+10)*Math.cos(theta+210);
  sphere5.position.z = (r+10)*Math.sin(theta+210);

};

//Helium
var renderHe = function()
{
  renderEmpty();
  orbits(sphere, 15, 100);
  scene.add(sphere);
  scene.add(sphere1);
  scene.add(sphere2);

  theta += dtheta;

  sphere1.position.z = r*Math.sin(theta);
  sphere1.position.x = r*Math.cos(theta);

  sphere2.position.x = r*Math.cos(theta+180);
  sphere2.position.z = r*Math.sin(theta+180);
};

// Add only boxes
var renderEmpty = function()
{
  scene.clear();
  scene.add( hydrogen );
  scene.add( helium );
  scene.add( lithium );
  scene.add( beryllium );
  scene.add( boron );
};


//raycasting
var r = 15;
var theta = 0;
var dtheta = 2*Math.PI/1000;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove( event ) {
 mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
 mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

window.addEventListener('click', onMouseMove, false);

function animate() {
 //to render the elements boxes
 renderEmpty();

 // console.log(scene.children);
 requestAnimationFrame(animate);

 //Using raycasting to select the object
 raycaster.setFromCamera (mouse, camera);

 var child = [hydrogen,helium,boron,beryllium,lithium];
 const intersects = raycaster.intersectObjects (child);

 if (intersects[0]){                                      //true when we click on any object on scene
   if (intersects[0].object.geometry.id == '18') {
     renderL();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'none';
     document.getElementById('berrylium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'block';
     document.getElementById('helium_text').style.display = 'none';
    }
   else if (intersects[0].object.geometry.id == '14') {
     renderH();
     document.getElementById('hydrogen_text').style.display = 'block';
     document.getElementById('boron_text').style.display = 'none';
     document.getElementById('berrylium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'none';
     }
   else if (intersects[0].object.geometry.id == '20') {
     renderBe();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'none';
     document.getElementById('berrylium_text').style.display = 'block';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'none';
      }
   else if (intersects[0].object.geometry.id == '22') {
     renderB();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'block';
     document.getElementById('berrylium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'none';
      }
   else if (intersects[0].object.geometry.id == '16') {
     renderHe();
     document.getElementById('hydrogen_text').style.display = 'none';
     document.getElementById('boron_text').style.display = 'none';
     document.getElementById('berrylium_text').style.display = 'none';
     document.getElementById('lithium_text').style.display = 'none';
     document.getElementById('helium_text').style.display = 'block';
      }
    }
    else {
      renderEmpty();
      document.getElementById('hydrogen_text').style.display = 'none';
      document.getElementById('boron_text').style.display = 'none';
      document.getElementById('berrylium_text').style.display = 'none';
      document.getElementById('lithium_text').style.display = 'none';
      document.getElementById('helium_text').style.display = 'none';
      // console.log('in outer else');
       }
 renderer.render(scene, camera);
}


// ---------------- Using esc key code ----------------

// document.addEventListener("keydown", function(event) {
//     if(event.keyCode === 27){
//        //Esc key was pressed
//         console.log('esc working');
//         scene.clear();
//         document.getElementById('hydrogen_text').style.display = 'none';
//         document.getElementById('boron_text').style.display = 'none';
//         document.getElementById('berrylium_text').style.display = 'none';
//         document.getElementById('lithium_text').style.display = 'none';
//         document.getElementById('helium_text').style.display = 'none';
//         // renderEmpty();
//    }
// });


 init();
 animate();
