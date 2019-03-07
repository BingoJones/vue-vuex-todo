<template>
  <input class="pill"
         type="text"
         placeholder="+ Add a todo..."
         v-on:keyup.enter="addTodo"
         v-model="newTodo"/>
</template>

<script>
import store from '../store';

export default {
  data: function() {
    return {
    };
  },
  computed: {
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(text) {
        this.$store.commit('updateNewTodo', text);
      }
    }
  },
  methods: {
    addTodo: function() {
      store.commit('addNewTodo');
      store.commit('clearNewTodo');
    }
  }
};
</script>

<style lang="scss" scoped>
$greenish: rgb(60, 189, 189);
$white: rgb(249, 249, 249);
$black: rgb(105, 105, 105);

.pill {
  border: solid $greenish;
  border-radius: 5px;
  background-color: $greenish;
  color: $black;
  padding: 5px;
  margin: 15px 0;
  text-align: left;

  &::placeholder {
    color: $white;
  }

  &:focus {
    outline: none;
  }
}
</style>