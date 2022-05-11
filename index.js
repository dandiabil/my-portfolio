import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const display = document.querySelector(".display");
const width = display.parentElement.clientWidth;
const height = display.parentElement.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
display.appendChild(renderer.domElement);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

function loadModel(modelUrl) {
  const loader = new GLTFLoader();

  loader.load(
    modelUrl,
    function (gltf) {
      const model = gltf.scene;
      model.position.set(1, 1, 0);
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);

      animate();
    },
    undefined,
    function (e) {
      console.error(e);
    }
  );
}
