<template>
  <div>
    <div v-for="(todo, index) in todos" :key="`${index}-${todo.isSelected}`">
      <TodoItem v-bind:todo="{...todos[index], id: index}"/>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  data: function() {
    return {
    };
  },
  props: {
    todos: Array
  },
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped>
</style>