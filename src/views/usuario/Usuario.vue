<template>
  <section class="container">
    <h2>welcome.</h2>
  </section>
</template>

<script>
export default {
  name: "Usuario",
  computed: {
    nome() {
      return this.$store.state.usuario.nome.replace(/ .*/, "");
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto 0;
  padding: 0 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  padding: 20px;
}
</style>
