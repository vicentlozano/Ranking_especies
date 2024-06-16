<template>
    <div class="grid-container">
      <div class="card" v-for="(item, index) in items" :key="index">
        <SeccionEspecie
          :especie="item.especie"
          :tamaño="item.tamaño"
          :lugar="item.lugar"
          :fecha="item.fecha"
          :pescador="item.pescador"
          :imagen="item.imagen"
        />
      </div>
    </div>
  </template>
  
  <script>
  import SeccionEspecie from '@/components/SeccionEspecie.vue';
  
  export default {
    name: 'GridEspecies',
    components: { SeccionEspecie },
    props: ['items']
  }
  </script>
  <style scoped>
  /* Aquí puedes agregar cualquier estilo CSS que quieras para tu página */
  .grid-container {
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
  }
  @media screen and (min-width:1080px){
    .grid-container{
      grid-template-columns: repeat(4, 1fr);
    }
    
  }
  </style>