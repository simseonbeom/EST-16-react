





// component namespace pattern
// compound component
// design system 

import { useState } from "react";
import EventHandleProp from "./responding-to-events/EventHandleProp"



function RespondingToEvents(){

  const [text, setText] = useState('hello')
  
  let message = 'message hello';
  const updateMessage = (add:string):void => {
    message += add;
    console.log(message);
  }

  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <form 
        action="/?submitted"
        onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
            

          updateMessage('hello')
        
            
        }}
        >
        
        <input type="text" /> {' '}
        <button type="submit">보내기</button>
        <div>
          <p>{text}</p>
          <p>{message}</p>  
        </div> 
      </form>
      <EventHandleProp message={message} onPrintMessage={updateMessage}/>
    </div>
  )
}

function HTMLCode(){
  return (
    <div hidden>
      <h2>HTMLCode</h2>
    </div>
  )
}

function View() {
  return (
    <div>View</div>
  )
}
export default View



View.HTMLCode = HTMLCode
View.RespondingToEvents = RespondingToEvents