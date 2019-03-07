<template>
  <div class="container">
    <TodoItemAdd/>
    <TodoItemList v-bind:todos="todos"/>
  </div>
</template>

<script>
import TodoItemAdd from './TodoItemAdd';
import TodoItemList from './TodoItemList';

export default {
  data: function() {
    return {
      todos: this.$store.state.todos
    };
  },
  components: {
    TodoItemAdd,
    TodoItemList
  }
};
</script>

<style lang="scss" scoped>
$turqoise: rgb(179, 247, 253);
$blue-purple: rgb(167, 197, 233);

.container {
  background-image: linear-gradient($turqoise, $blue-purple);
  padding: 15px;
  height: 320px;
  width: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>