import type { JSX } from "react/jsx-runtime";
import JSX_Markup from "./JSX_Markup";


function Learn():JSX.Element{

  return (
    <div className="learn">
      <Headline />
      <hr />
      <JSX_Markup />
    </div>
  )
}

export default Learn;


function Headline():JSX.Element{
  const abbr = {
    html:'Hyper Text Markup Language',
    jsx:{
      abbr:'Javascript eXtension for ECMAScript',
      title:'JSX'
    }
  }  

  return (
    <h1>
      <abbr title={abbr.html}>HTML</abbr> vs {' '}
      <abbr title={abbr.jsx.abbr}>{abbr.jsx.title}</abbr> 마크업
    </h1>
  )
}










