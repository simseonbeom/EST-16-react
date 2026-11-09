import React, {createElement as h} from '/src/lib/react.js';

// PlanetList
export function PlanetList_ ({lang, children}){
  
    return h(
      'ul',
      {className:'planet',lang},
      children
    )
}
