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
} from './libs/threejs/build/three.module.js'

//get a reference to the container element that will hold our scene
const container = document.querySelector('#sence-container');

// create a Scene
const scene = new Scene();

// set the background color of the scene
scene.background = new Color('skyblue');

// create camera
const fov = 35; // field of view (각도) 바꿔도됨
const aspect = container.clientWidth / container.clientHeight; // window size
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 10);

const geometry = new BoxBufferGeometry(2, 2, 2);

const material = new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

scene.add(cube);

const renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera);