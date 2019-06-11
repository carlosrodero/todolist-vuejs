<template>
  <section class="add-task">
    <form>
      <label for="task">nome da tarefa</label>
      <input type="text" name="task" id="task" v-model="task" placeholder="Nova tarefa">
      <label for="deadline">data de entrega</label>
      <input type="date" id="deadline" v-model="deadline">
      <button class="btn" @click.prevent="addTask">Adiconar</button>
      <ErroNotificacao :erros="erros"/>
    </form>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "TaskFormAdd",
  data() {
    return {
      task: "",
      deadline: "",
      erros: []
    };
  },
  methods: {
    formatarTarefa() {
      const form = new FormData();

      form.append("task", this.task);
      form.append("deadline", this.deadline);
      form.append("usuario_id", this.$store.state.usuario.id);

      return form;
    },
    addTask() {
      const tarefa = this.formatarTarefa();
      api.post("/tarefa", tarefa).then(() => {
        this.$store.dispatch("getUsuarioTarefas");
      });
    }
  }
};
</script>

<style scoped>
.add-task {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr auto;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
