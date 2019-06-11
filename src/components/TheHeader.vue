<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/logo.svg" alt="ToDoList">
      </router-link>
      <h2 v-if="$store.state.login">olá, {{ nome }}</h2>
      <button v-if="$store.state.login" class="btn" @click.prevent="deslogar">sair</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/");
    }
  },
  computed: {
    nome() {
      return this.$store.state.usuario.nome.replace(/ .*/, "");
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}
.logo {
  padding: 10px 0;
}
.logo img {
  width: 120px;
  fill: #111;
}
</style>
