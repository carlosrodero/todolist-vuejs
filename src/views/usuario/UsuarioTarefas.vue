<template>
  <section>
    <transition-group v-if="usuario_tarefas" name="list" tag="ul">
      <li v-for="(tarefa, index) in usuario_tarefas" :key="index">
        <TaskItem :tarefa="tarefa">
          <div>
            <input
              :id="tarefa.id"
              type="checkbox"
              checked
              v-if="tarefa.status === 'true'"
              @click="atualizaStatusTarefa(tarefa.id)"
            >
            <input :id="tarefa.id" type="checkbox" v-else @click="atualizaStatusTarefa(tarefa.id)">
            <label :for="tarefa.id" class="label"></label>
          </div>
        </TaskItem>
      </li>
    </transition-group>
    <PaginaCarregando key="carregando" v-else/>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapState, mapActions } from "vuex";
import TaskItem from "@/components/TaskItem.vue";

export default {
  name: "UsuarioTarefas",
  components: {
    TaskItem
  },
  data() {
    return {
      tarefas: null,
      tarefasPorPagina: 9,
      tarefasTotal: 0
    };
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_tarefas"])
  },
  methods: {
    ...mapActions(["getUsuarioTarefas"]),
    atualizaStatusTarefa(id) {
      api.put(`/tarefa/${id}`).then(() => {
        this.$store.dispatch("getUsuarioTarefas");
      });
    }
  },
  watch: {
    login() {
      this.getUsuarioTarefas();
    }
  },
  created() {
    if (this.login) {
      this.getUsuarioTarefas();
    }
  }
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
  background: url("../../assets/check.svg") center center no-repeat;
  background-size: contain;
  transform: scale(0);
  transition: 0.2s;
}
</style>
