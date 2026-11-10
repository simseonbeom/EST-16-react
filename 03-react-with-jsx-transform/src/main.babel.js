




import React from "/src/lib/react.js";
import ReactDOM from "/src/lib/react-dom.js";


function Avatar({name, status, size = 64}){
  
  let iconPath = '';
  let statusMessage = '';
  
  switch (status) {
    case 'offline':
      iconPath = '/icons/status-offline.svg';
      statusMessage = '오프라인';
      break;
    case 'online':
      iconPath = '/icons/status-online.svg';
      statusMessage = '온라인'
      break;
    case 'disturb':
      iconPath = '/icons/status-disturb.svg';
      statusMessage = '방해금지'
      break;
    case 'away':
      iconPath = '/icons/status-away.svg';
      statusMessage = '자리비움'
      break;
  }
  
  const label = `${name} (${statusMessage})`


  return (
    <li className="avatar">
      <figure aria-label={label} title={label}>
        <div className="cover">
          <img src={`/avatar/${name}.png`} alt={name}/>
        </div>
        <figcaption>
          <img src={iconPath} alt=""/>
        </figcaption>
      </figure>
    </li>
  )

}


function AvatarPage(){
  
  return (
    <ul className="avatarList">
      <Avatar name="sinzzang" status="offline"/>
      <Avatar name="sinpapa" status="online"/>
      <Avatar name="bongmiseon" status="away"/>
    </ul>
  )
}


const container = document.getElementById('app');

if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(<AvatarPage />)
}























