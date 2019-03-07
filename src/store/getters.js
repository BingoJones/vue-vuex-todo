export const subtasks = state => {
    // const { todos, selectedTodo } = state;

    // if (!todos.length) {
    // 	return [];
    // }

    // if (typeof selectedTodo !== "number") {
    // 	return [];
    // }

    // return todos[selectedTodo].subtasks;
    const { subtasks, selectedTodo } = state;
    return subtasks.filter(subtask => subtask.taskId === selectedTodo);
};
