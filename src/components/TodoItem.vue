<template>
  <div class="container" v-bind:class="{selected: isSelected}" v-on:click="selectTodo">
    <input v-on:click="toggleComplete" class="checkbox" type="checkbox" v-model="isComplete"/>
    <span v-bind:class="{completed: isComplete}">{{ text }}</span>
  </div>
</template>

<script>
import store from '../store';

export default {
  data: function() {
    return {
      text: this.todo.text,
      isComplete: this.todo.isComplete,
      id: this.todo.id,
      isSelected: this.todo.isSelected
    };
  },
  props: {
    todo: Object
  },
  methods: {
    toggleComplete: function() {
      const vm = this;
      const { id } = vm;

      store.commit('toggleComplete', id);
    },
    selectTodo: function() {
      const vm = this;
      const { id } = vm;

      store.commit('selectTodo', { todoIndex: id });
    }
  }
};
</script>

<style lang="scss" scoped>
$gray: rgb(241, 241, 241);
$dark-gray: rgb(205, 205, 205);
$black: rgb(105, 105, 105);

.container {
  border: solid $dark-gray;
  border-radius: 5px;
  background-color: $gray;
  color: $black;
  padding: 5px;
  margin: 15px 0;
  text-align: left;
}

.completed {
  text-decoration: line-through;
}

$blue: rgb(46, 179, 209);

.selected {
  border-color: $blue;
  background-color: $blue;
}

</style>