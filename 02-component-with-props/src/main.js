

import React, {createElement as h} from './lib/react.js';
import ReactDOM, {createRoot} from './lib/react-dom.js';
import { PlanetPage } from './pages/PlanetPage.js';
import { PlanetPage_ } from './pages/PlanetPage_.js';
import { AvatarPage } from './pages/AvatarPage.js';





/* react class component */



// h(PlanetItem,{id,title})


const container = document.getElementById('app');

if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render( h(AvatarPage) )
}





























