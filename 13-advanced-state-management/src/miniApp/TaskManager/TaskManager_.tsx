import tw from "@/utils/tw"
import { INITIAL_TASKS } from "./@types"
import UnpinnedTaskList from "./UnpinnedTaskList_"
import PinnedTaskList from "./PinnedTaskList_"

function TaskManager() {
  const pinnedTaskList = INITIAL_TASKS.filter((task) => task.isPin);
  const unpinnedTaskList = INITIAL_TASKS.filter((task) => !task.isPin);

  const handleSetTask = (_taskId: string, _isCompleted: boolean) => {};
  const handleTogglePin = (_taskId: string) => {};
  const handleDeleteTask = (_deleteId: string) => {};

  return (
      <div lang="en"
        className={tw(
          'w-72 flex flex-col gap-2 p-5 border border-solid border-accent rounded text-accent'
        )}
      >
        <PinnedTaskList
          pinnedTaskList={pinnedTaskList}
          setTask={handleSetTask}
          togglePin={handleTogglePin}
        />
        <UnpinnedTaskList
          unpinnedTaskList={unpinnedTaskList}
          setTask={handleSetTask}
          togglePin={handleTogglePin}
          deleteTask={handleDeleteTask}
        />
      </div>
  )
}

export default TaskManager
