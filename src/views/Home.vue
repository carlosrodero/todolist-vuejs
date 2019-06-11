<template>
  <section class="login">
    <h1>login</h1>
    <form>
      <label for="email">email</label>
      <input type="email" name="email" id="email" v-model="login.email">
      <label for="senha">senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha">
      <button class="btn" @click.prevent="logar">logar</button>
      <ErroNotificacao :erros="erros"/>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">perdeu a senha? clique aqui.</a>
    </p>
    <LoginCriar/>
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";

export default {
  name: "Home",
  components: {
    LoginCriar
  },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      },
      erros: []
    };
  },
  methods: {
    logar() {
      this.erros = [];
      this.$store
        .dispatch("logarUsuario", this.login)
        .then(response => {
          this.$store.dispatch("getUsuario");
          this.$router.push("/usuario");
        })
        .catch(error => {
          this.erros.push(error.response.data.message);
        });
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
form {
  display: grid;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}
.perdeu:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
