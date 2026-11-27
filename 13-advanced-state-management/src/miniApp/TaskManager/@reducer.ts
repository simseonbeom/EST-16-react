import type { Task } from "./@types";

export type State = Task[];

const ACTION_TYPE = {
  TOGGLE_PIN:'핀 토글'
}as const;

export type TogglePinAction = {
  type: typeof ACTION_TYPE.TOGGLE_PIN;
  payload: string; 
}

export const togglePin = (taskId:string):TogglePinAction => ({
  type:ACTION_TYPE.TOGGLE_PIN,
  payload: taskId
})

export type Action = 
  | TogglePinAction;

export default function reducer(state:State, action:Action):State{
  switch (action.type){
    case ACTION_TYPE.TOGGLE_PIN : {
      const taskId = action.payload;
      
      const nextState = state.map((item)=>{
        if(item.id === taskId){
          const nextTask = { ...item, isPin: !item.isPin};
          return nextTask;
        }else{
          return item;
        }
      })
      return nextState;
    }
    default: {
      return state;
    }
  }
}



























