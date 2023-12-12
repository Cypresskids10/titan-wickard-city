import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer =new THREE.WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera,renderer.domElement)

const geometry1 = new THREE.BoxGeometry(1,3,1)
const material1 = new THREE.MeshLambertMaterial({color: 0xff0000})
const cube1 = new THREE.Mesh(geometry1,material1)
scene.add(cube1)

const geometry2 = new THREE.BoxGeometry(1,3,1)
const material2 = new THREE.MeshLambertMaterial({color: 0xff0000})
const cube2 = new THREE.Mesh(geometry2,material2)
scene.add(cube2)

const sphereGeometry = new THREE.SphereGeometry(2,10,10)
const sphereMaterial = new THREE.MeshLambertMaterial({color:0x0000ff})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

const torusGeometry = new THREE.TorusGeometry(3.2,0.3,64,64)
const torusMaterial = new THREE.MeshLambertMaterial({color:0xffffff})
const torus = new THREE.Mesh(torusGeometry, torusMaterial)
scene.add(torus)

const light = new THREE.PointLight(0xfffff, 10000)
light.position.set(0,0,0); //X,Y,Z
scene.add(light);

const ambiantLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambiantLight)

camera.position.z = 5
cube1.position.x = -5
cube2.position.x = 5

function animate(){
    requestAnimationFrame(animate);
    cube1.rotation.x += 1
    cube1.rotation.y += 1
    renderer.render(scene,camera)
    cube2.rotation.x += 1
    cube2.rotation.y += 1
    sphere.rotation.x += 0.5
    sphere.rotation.y += 0.5
    torus.rotation.y += 0.01
}
animate()