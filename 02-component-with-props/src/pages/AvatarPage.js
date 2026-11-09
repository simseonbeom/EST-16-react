import { Avatar } from "../components/avatar/Avatar.js";
import { createElement as h } from "../lib/react.js";




export function AvatarPage(){
  
  return h(
    'ul',
    { className:'avatarList' },
    h(Avatar,{name:'sinzzang',status:'online'}),
    h(Avatar,{name:'zzanga',status:'offline'}),
    h(Avatar,{name:'sinpapa',status:'disturb'}),
    h(Avatar,{name:'bongmiseon',status:'away'}),
  )
}












