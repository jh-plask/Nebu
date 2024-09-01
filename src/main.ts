import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from "@babylonjs/core";

const canvas = document.getElementById(
  "renderCanvas"
) as HTMLCanvasElement;
const engine = new Engine(canvas, true);

const createScene = function () {
  const scene = new Scene(engine);
  const camera = new FreeCamera(
    "camera1",
    new Vector3(0, 5, -10),
    scene
  );
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, false);
  const light = new HemisphericLight(
    "light1",
    new Vector3(0, 1, 0),
    scene
  );
  const sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 2 },
    scene
  );
  return scene;
};

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
