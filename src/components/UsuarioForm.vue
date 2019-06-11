<template>
  <form>
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" v-model="nome">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email">
    <label for="senha">Senha</label>
    <input type="passaword" name="senha" id="senha" v-model="senha">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { getCep } from "@/services.js";

export default {
  name: "UsuarioForm",
  computed: {
    ...mapFields({
      fields: ["nome", "email", "senha"],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    }),
    mostrarDadosLogin() {
      return !this.$store.state.login || this.$route.name === "usuario-editar";
    }
  }
};
</script>

<style scoped>
form,
.usuario {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.usuario {
  grid-column: 1 / 3;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
