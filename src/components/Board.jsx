const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTask) =>
      currentTask.filter((todo) => index === removeIndex)
    );
  };

  return (
    <>
      <div className="max-w-xl rounded-xl flex flex-col items-center justify-start border text-center text-lg pt-3 pb-4 px-4 md:px-6">
        <p>{task}</p>
        <button
          className="bg-violet-500 text-white rounded-lg py-1 px-2 mt-4 hover:opacity-70"
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Board;
