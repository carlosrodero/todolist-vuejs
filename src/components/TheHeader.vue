<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/logo.svg" alt="ToDoList">
      </router-link>
      <router-link to="/usuario">
        <h2 v-if="$store.state.login">olá, {{ nome }}</h2>
      </router-link>
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
header {
  background: rgba(255, 255, 255, 0.8);
}
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
