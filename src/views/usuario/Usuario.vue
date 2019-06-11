<template>
  <section class="container">
    <h2>todas as suas tarefas</h2>
    <button
      class="btn btn-add"
      :class="{'active' : showFormAdd}"
      @click.prevent="showFormAdd = !showFormAdd"
    >
      <img src="@/assets/plus.svg" alt="ToDoList" width="20px">
    </button>
    <transition mode="out-in">
      <TaskFormAdd v-if="showFormAdd"/>
    </transition>
    <router-view></router-view>
  </section>
</template>

<script>
import TaskFormAdd from "@/components/TaskFormAdd.vue";

export default {
  name: "Usuario",
  components: {
    TaskFormAdd
  },
  data() {
    return {
      showFormAdd: false
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto 0;
  padding: 0 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  padding: 20px;
  position: relative;
}
.btn-add {
  position: absolute;
  top: 20px;
  right: 20px;
}
.btn-add.active {
  background: #bbc;
}
.btn-add img {
  transition: all 0.3s;
}
.btn-add.active img {
  transform: rotate(45deg);
}
</style>
