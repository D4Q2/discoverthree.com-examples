import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadGLTFModels( materials ) {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/morphCube.glb' );

  const morphCube = gltf.scene.children[ 0 ];
  morphCube.material = materials.morph;

  return {

    morphCube,

  };

}
