import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: ""
    },
    usuario_tarefas: null
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_TAREFAS(state, payload) {
      state.usuario_tarefas = payload;
    },
    ADD_USUARIO_TAREFAS(state, payload) {
      state.usuario_tarefas.unshit(payload);
    }
  },
  actions: {
    getUsuarioTarefas(context) {
      api.get(`/tarefa?usuario_id=${context.state.usuario.id}`).then(res => {
        context.commit("UPDATE_USUARIO_TAREFAS", res.data);
      });
    },
    getUsuario(context) {
      return api.get(`/usuario`).then(res => {
        context.commit("UPDATE_USUARIO", res.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return api.post("/usuario", payload);
    },
    logarUsuario(context, payload) {
      return api
        .login({
          username: payload.email,
          password: payload.senha
        })
        .then(response => {
          window.localStorage.token = `Bearer ${response.data.token}`;
        });
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        nome: "",
        email: "",
        senha: ""
      });
      window.localStorage.removeItem("token");
      context.commit("UPDATE_LOGIN", false);
    }
  }
});
