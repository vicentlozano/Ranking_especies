<template>
  <Grid2 :items="items" />
</template>

<script>
import Grid2 from '@/components/Grid2.vue'
import Lubina from '@/assets/Lubina.jpg'
import Sargo from '@/assets/Sargo.jpg'
import Maragota from '@/assets/Maragota.jpg'
import Golfas from '@/assets/Golfas.jpg'
import Palometon from '@/assets/Palometon.jpg'
import Denton from '@/assets/Denton.jpg'
import Doblada from '@/assets/Doblada.jpg'
import Mero from '@/assets/Mero.jpg'

export default {
  name: 'PaginaPrincipal',
  components: { Grid2 },
  data() {
    return {
      items: [
        {
          especie: 'Lubina',
          tamaño: '34cm',
          lugar: 'Cala Alga',
          fecha: '05/06/2024',
          pescador: 'Vicent',
          imagen: Lubina
        },
        {
          especie: 'Sargo',
          tamaño: '28cm',
          lugar: 'Javea',
          fecha: '06/06/2024',
          pescador: 'Pedro',
          imagen: Sargo
        },
        {
          especie: 'Golfas',
          tamaño: '42cm',
          lugar: 'Rio Molinell',
          fecha: '06/06/2024',
          pescador: 'Jose',
          imagen: Golfas
        },
        {
          especie: 'Maragota',
          tamaño: '33',
          lugar: 'Javea',
          fecha: '06/06/2024',
          pescador: 'Pedro',
          imagen: Maragota
        },
        {
          especie: 'Denton',
          tamaño: '25cm',
          lugar: 'Punta Estrella',
          fecha: '14/06/2024',
          pescador: 'Vicent',
          imagen: Denton
        },
        {
          especie: 'Mero',
          tamaño: '22cm',
          lugar: 'Punta Estrella',
          fecha: '14/06/2024',
          pescador: 'Vicent',
          imagen: Mero
        },
        { especie: 'Doblada', tamaño: '', lugar: '', fecha: '', pescador: '', imagen: Doblada },
        { especie: 'Palometon', tamaño: '', lugar: '', fecha: '', pescador: '', imagen: Palometon }
      ]

      // Agrega más objetos aquí para cada tarjeta
    }
  }
}
</script>
