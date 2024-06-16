
<template>
  <div class="seccion">
    <img :alt="especie" class="imagen-seccion" :src="imagen" width="100%" height="100%" >
    <h2>{{especie}}</h2>
    <h2>{{tamaño}}</h2>
    <h2>{{lugar}}</h2>
    <h2>{{fecha}}</h2>
    <h2>{{pescador}}</h2>

  </div>
</template>

<script>
export default {
  name: 'SeccionEspecie',
  props: {
    // Define cualquier prop que necesites para personalizar cada sección
    especie: String,
    tamaño: String,
    lugar: String,
    fecha: String,
    pescador: String,
    imagen: String
  }
}
</script>

<style scoped>
.seccion {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 10px 10px 10px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.imagen-seccion {
  width: 100%;
  height: 100px;
  object-fit: cover
}

h2 {
  margin: 1px 1px;
  font: 1em sans-serif;

}
</style>