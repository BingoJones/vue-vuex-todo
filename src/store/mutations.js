let id = 0;

export const toggleComplete = (state, todoId) => {
    state.todos[todoId].isComplete = !state.todos[todoId].isComplete;
    state.history.push(`toggleComplete todoId(${todoId})`);
};

export const clearNewTodo = (state) => {
    state.newTodo = '';
    state.history.push('clearNewTodo');
};

export const updateNewTodo = (state, text) => {
    state.newTodo = text;
    state.history.push('updateNewTodo');
};

export const addNewTodo = (state) => {
    const { todos, newTodo } = state;

    if (!newTodo) {
	return;
    }

    todos.push({ text: newTodo, isComplete: false, isSelected: false });
};

export const addTodo = (state, payload) => {
    const { newTodo } = payload;

    if (!newTodo) {
	return;
    }
    
    // state.todos.push({ text: newTodo, subtasks: [] });
    state.todos.push({ text: newTodo });
    state.history.push('addTodo');
};

export const selectTodo = (state, payload) => {
    const { todoIndex } = payload;

    state.todos.forEach((todo, index) => {
	todo.isSelected = todoIndex === index;
    });
    
    // state.selectedTodo = todoIndex;
    state.history.push(`selectTodo todoIndex(${todoIndex})`);
};

export const selectTodoAndShowSidebar = (state, payload) => {
    const { todoIndex } = payload;

    state.selectedTodo = todoIndex;
    state.showSidebar = true;
    state.history.push('selectTodoAndShowSidebar');
};

export const completeTodo = (state, payload) => {
    const { todoIndex } = payload;
    
    state.todos[todoIndex].completed = true;
    state.history.push('completeTodo');
};

export const resetTodo = (state, payload) => {
    const { todoIndex } = payload;
    
    state.todos[todoIndex].completed = false;
    state.history.push('resetTodo');
};

export const toggleSidebar = (state) => {
    state.showSidebar = !state.showSidebar;
    state.history.push('toggleSidebar');
};

export const showSidebar = (state) => {
    state.showSidebar = true;
    state.history.push('showSidebar');
};

export const hideSidebar = (state) => {
    state.showSidebar = false;
    state.history.push('hideSidebar');
};

export const addSubtask = (state, payload) => {
    const { selectedTodo: todoIndex } = state;
    const { newSubtask } = payload;

    if (!newSubtask) {
	return;
    }

    alert(`addSubtask todoIndex ${todoIndex}, newSubtask ${newSubtask}`);

    // state.todos[todoIndex].subtasks.push({ text: newSubtask, id: id++ });
    state.subtasks.push({ text: newSubtask, id: id++, taskId: todoIndex });
    state.history.push('addSubtask');
};
