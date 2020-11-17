import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshStandardMaterial,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    DirectionalLight,
    AmbientLight,
} from './libs/three.js/build/three.module.js'

import {
    OrbitControls,
} from './libs/three.js/examples/jsm/controls/OrbitControls.js'

//get a reference to the container element that will hold our scene
const container = document.querySelector('#sence-container');

// create a Scene
const scene = new Scene();


// set the background color of the scene
scene.background = new Color('skyblue');

// create camera
const fov = 35; // field of view (각도) 바꿔도됨
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

const light = new AmbientLight('white', 10); //색과 밝기
    light.position.set(10, 10, 10);

camera.position.set(0, 0, 10);

const geometry = new BoxBufferGeometry(2, 2, 2);

//const material = new MeshBasicMaterial({color: "rbg(255, 0, 255)"});
const material = new MeshStandardcMaterial({color: "rbg(255, 0, 255)"});

const cube = new Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.1, 0.8);
    cube.position.set();
    cube.scale.set();

scene.add(cube, light);

const renderer = new WebGLRenderer({antialias: true});

// initialize controls
const controls = new OrbitControls(camera, renderer.domElement);

    controls.update();

    renderer.physicallyCorrectLight = true;

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera);

window.addEventListener("resize", function(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);
});