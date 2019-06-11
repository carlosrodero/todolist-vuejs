<template>
  <div v-if="tarefa">
    <article class="task">
      <slot></slot>
      <div>
        <p class="title">{{ tarefa.nome }}</p>
        <p class="deadline">🗓 {{ tarefa.deadline }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["tarefa"]
};
</script>

<style scoped>
.task {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(30, 60, 90, 0.2);
}
.title {
  font-size: 1.25rem;
  line-height: 1.5;
}
.deadline {
  font-size: 0.75rem;
  color: #e80;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"]:checked + label {
  background: #87f;
  border-color: #65d;
}
input[type="checkbox"]:checked + label:after {
  transform: scale(1.3);
}

.label {
  display: block;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  background: #fff;
  margin: 20px 20px 20px 0px;
  border: 2px solid #87f;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  padding: 2px;
}
.label:after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  background: url("../assets/check.svg") center center no-repeat;
  background-size: contain;
  transform: scale(0);
  transition: 0.2s;
}

.list-tasks li label {
  display: grid;
  grid-template-columns: 70px 1fr;
  width: 100%;
}
.input-checkbox {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}
</style>
