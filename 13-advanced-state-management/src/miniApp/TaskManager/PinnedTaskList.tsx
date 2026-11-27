import tw from '@/utils/tw';
import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { useShallow } from 'zustand/shallow';
import { usePinnedTasks, useTaskStore } from './@store';

function PinnedTaskList() {


  // const pinnedTaskList: Task[] = [];
  // const togglePin = (_taskId: string) => {};
  // const setTask = (_taskId: string, _isCompleted: boolean) => {};

  // const tasks = useTaskStore( s => s.tasks )
  // const pinnedTaskList = tasks.filter( t => t.isPin);

  // const togglePin = useTaskStore( s => s.togglePin)
  // const setTask = useTaskStore( s => s.setTask)
  
  const pinnedTaskList = usePinnedTasks();

  const { togglePin, setTask } = useTaskStore(useShallow((s)=> ({
    togglePin:s.togglePin,
    setTask:s.setTask
  })))
  
  console.log('[zustand] pinned 렌더');
  

  const handleSetTask = (taskId:string, isCompleted:boolean) => {
    setTask(taskId, isCompleted);
  };

  const handleTogglePin = (taskId:string) => {
    togglePin(taskId);
  };

  return (
    <ul className='flex flex-col gap-2' >
      {pinnedTaskList.map((task) => {
        return (
          <li key={task.id} className="flex justify-between gap-1.5">
            <label
              className={tw('text-2xl',task.isCompleted ? 'line-through' : '')}
            >
              <input
                type="checkbox"
                defaultChecked={task.isCompleted}
                onChange={(e) => handleSetTask(task.id, e.target.checked)}
              />{' '}
              {task.content}
            </label>
            <div className="flex gap-2">
              <button type="button" onClick={() => handleTogglePin(task.id)}>
                {task.isPin ? <PiPushPinFill /> : <PiPushPinLight />}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default PinnedTaskList;
