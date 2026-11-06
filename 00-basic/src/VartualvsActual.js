
import { createElement } from './lib/virtual/index.js'; // 가상 돔 생성기
import { createRoot } from './lib/virtual-dom/index.js'; // 실제 돔 -> 가상 돔 컨버터




/* actual DOM 실제 돔
웹 API를 사용해서 문서 객체(Document Object)를 생성
*/

// 부모 요소 생성
const divElement = document.createElement('div');

// 자식 요소 생성
const buttonElement = document.createElement('button');
buttonElement.textContent = 'hello';
buttonElement.classList.add('btn');
buttonElement.setAttribute('type','button');

// 요소간의 관계 형성 
divElement.append(buttonElement);

// 랜더링 위치 정하기
const actualDomElement = document.getElementById('app');

// 실제 DOM에 마운트(Mount, 착장 === 랜더링)
actualDomElement.append(divElement);




// virtual DOM


// 가상(추상화된, 단순화된) 요소(엘리먼트) 생성


// 자식 가상 요소 
const buttonV_Element = 
createElement('button',{type:'button',class:'btn'},'hola!');


const divV_Element = 
createElement('div',{class:'tiger'},buttonV_Element);


// console.dir(buttonElement)
// console.log( buttonV_Element );
// console.log( divV_Element );


// 가상 요소를 실제 DOM 요소에 랜더링 

const virtualRootElement = document.getElementById('app');

// 가상돔 랜더링 헬퍼 
const vRoot = createRoot(virtualRootElement);


vRoot.render(divV_Element);

































