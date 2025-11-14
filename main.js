import * as THREE from 'three';
import {FirstPersonControls} from 'three/examples/jsm/Addons.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const textureLoader = new THREE.TextureLoader()

let angulo = {
  terra: 0,
  marte: 0,
  venus: 0,
  mercurio: 0,
  jupiter: 0,
  saturno: 0,
  urano: 0,
  netuno: 0,
}

const velocidades = {
  terra: 0.01,
  marte: 0.008,
  venus: 0.0015,
  mercurio: 0.02,
  jupiter: 0.005,
  saturno: 0.003,
  urano: 0.002,
  netuno: 0.0015,
}

const raios = {
  terra: 70,
  marte: 100,
  venus: 50,
  mercurio: 35,
  jupiter: 150,
  saturno: 200,
  urano: 250,
  netuno: 300,
}







//const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01)
camera.position.set(-50, 0 , 300)
// controls = new FirstPersonControls(camera, renderer.domElement)
//const clock = new THREE.Clock()


//Terra
const texturaTerra = textureLoader.load('./texturas/earth.png')
const texturaAnel = textureLoader.load('./texturas/image.png')

const geometriaEsfera = new THREE.SphereGeometry( 7 );
const materialEsfera = new THREE.MeshBasicMaterial( { map: texturaTerra })
const terra = new THREE.Mesh(geometriaEsfera, materialEsfera)
scene.add (terra)
terra.position.x = 50

function fabricaDePlanetas(tamanho, distanciaX, textura){
  const geometry = new THREE.SphereGeometry(tamanho)
  const texture = textureLoader.load(textura)
  const material = new THREE.MeshBasicMaterial({map: texture})

  const planeta = new THREE.Mesh(geometry, material)
  planeta.position.x = distanciaX
  return planeta
}
const venus = fabricaDePlanetas(5, 10, './texturas/Venus.png')
scene.add(venus)

const mercurio = fabricaDePlanetas(3, -20, './texturas/Mercury.png')
scene.add(mercurio)

const marte = fabricaDePlanetas(4, 90, './texturas/Mars.png')
scene.add(marte)

const sol = fabricaDePlanetas(25, -60, './texturas/Sun.png')
scene.add(sol)

const lua = fabricaDePlanetas(2, 32, './texturas/Moon.png')
scene.add(lua)
terra.attach(lua)

const jupiter = fabricaDePlanetas (22, 150, './texturas/Jupiter.png')
scene.add(jupiter)

const saturno = fabricaDePlanetas (14, 210, './texturas/Saturn.png')
scene.add(saturno)


const geometriaAnel = new THREE.RingGeometry (26, 30, 64 )
const material = new
THREE.MeshBasicMaterial( { map: texturaAnel } );
const anel = new THREE.Mesh( geometriaAnel, material );
anel.position.x = 210
anel.rotation.x = 250
scene.add(anel)
saturno.attach(anel)

const urano = fabricaDePlanetas (14, 250, './texturas/Uranus.png')
scene.add(urano)  

const netuno = fabricaDePlanetas (18, 310, './texturas/Neptune.png')
scene.add(netuno)







function animate() {

  lua.rotation.y += 0.01;
  terra.rotation.y += 0.01;
  venus.rotation.y -= 0.03;
  mercurio.rotation.y += 0.05;
  marte.rotation.y += 0.009;
  sol.rotation.y += 0.004;
  saturno.rotation.y += 0.01;
  urano.rotation.x += 0.04;
  netuno.rotation.y += 0.3;
  
  angulo.terra += velocidades.terra
  terra.position.x = sol.position.x + Math.cos(angulo.terra) * raios.terra
  terra.position.z = sol.position.z + Math.sin(angulo.terra) * raios.terra

    angulo.mercurio += velocidades.mercurio
  mercurio.position.x = sol.position.x + Math.cos(angulo.mercurio) * raios.mercurio
  mercurio.position.z = sol.position.z + Math.sin(angulo.mercurio) * raios.mercurio

    angulo.venus += velocidades.venus
  venus.position.x = sol.position.x + Math.cos(angulo.venus) * raios.venus
  venus.position.z = sol.position.z + Math.sin(angulo.venus) * raios.venus
  
    angulo.marte += velocidades.marte
  marte.position.x = sol.position.x + Math.cos(angulo.marte) * raios.marte
  marte.position.z = sol.position.z + Math.sin(angulo.marte) * raios.marte

    angulo.jupiter += velocidades.jupiter
  jupiter.position.x = sol.position.x + Math.cos(angulo.jupiter) * raios.jupiter
  jupiter.position.z = sol.position.z + Math.sin(angulo.jupiter) * raios.jupiter

    angulo.saturno += velocidades.saturno
  saturno.position.x = sol.position.x + Math.cos(angulo.saturno) * raios.saturno
  saturno.position.z = sol.position.z + Math.sin(angulo.saturno) * raios.saturno

    angulo.netuno += velocidades.netuno
  netuno.position.x = sol.position.x + Math.cos(angulo.netuno) * raios.netuno
  netuno.position.z = sol.position.z + Math.sin(angulo.netuno) * raios.netuno

    angulo.urano += velocidades.urano
  urano.position.x = sol.position.x + Math.cos(angulo.urano) * raios.urano
  urano.position.z = sol.position.z + Math.sin(angulo.urano) * raios.urano

  //const delta = clock.getDelta

  //controls.update(delta)
  
  renderer.render( scene, camera );


}
