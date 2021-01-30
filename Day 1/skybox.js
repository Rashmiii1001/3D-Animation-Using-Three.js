import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls.js';

let renderer = new THREE.WebGLRenderer();
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
// PerspectiveCamera( field of view(FOV) : Number, aspect ratio: Number, near : Number, far : Number )

function init(){
    
    camera.position.set(-900,-200,-900); // passed the x,y,z co-ordinates for setting camera

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    var controls = new OrbitControls(camera, renderer.domElement); // Adding controls
    controls.addEventListener('change',renderer);
    controls.minDistance = 50;
    controls.maxDistance = 18000;

    // Loading all the images for skybox
    let materialArray = [];
    let texture_posx = new THREE.TextureLoader().load('posx.jpg'); //left 
    let texture_negx = new THREE.TextureLoader().load('negx.jpg'); // right
    let texture_posy = new THREE.TextureLoader().load('posy.jpg'); //top
    let texture_negy = new THREE.TextureLoader().load('negy.jpg'); //bottom
    let texture_posz = new THREE.TextureLoader().load('posz.jpg'); // back
    let texture_negz = new THREE.TextureLoader().load('negz.jpg'); //front

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_posx, side: THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_negx, side: THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_posy, side: THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_negy, side: THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_posz, side: THREE.DoubleSide}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_negz, side: THREE.DoubleSide}));

    let skyBoxGeo = new THREE.BoxGeometry(10000,10000,10000); //THREE.BoxGeometry(Length ,Breadth, Height);
    let skyBox = new THREE.Mesh(skyBoxGeo, materialArray);    //Mesh requires 

    scene.add(skyBox);
    window.addEventListener('resize', ()=>{window.location.reload()});
}
function animate() {
        
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
    }
init();
animate();
