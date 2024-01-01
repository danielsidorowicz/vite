import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Scene } from 'three';
import Renderer from './Renderer';
import Camera from './Camera';


this.controls = new OrbitControls(this.camera.threeCamera, this.renderer.threeRenderer.domElement);
this.controls.update();


const container = document.getElementById('root')
const scene = new Scene()
const renderer = new Renderer(scene, container)
const camera = new Camera(renderer.threeRenderer)

const GameObject = {

    render() {

        console.log("render")
        renderer.render(scene, camera.threeCamera);

        requestAnimationFrame(GameObject.render);

    }


}
export { GameObject }