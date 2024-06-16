<template>
    <Grid2 :items="items"/>
</template>
<script>
import Grid2 from '@/components/Grid2.vue'
import Herrera from '@/assets/Herrera.jpg'
import Vidriada from '@/assets/Vidriada.jpg'
import Serviola from '@/assets/Serviola.jpg'
import Bacoreta from '@/assets/Bacoreta.jpg'
import Llampuga from '@/assets/Llampuga.jpg'
import Aguja from '@/assets/Aguja.jpg'
import BlueRunner from '@/assets/BlueRunner.jpg'
import Jurela from '@/assets/Jurela.jpg'


    export default{
        name:'PaginaSegunda',
        components:{Grid2},
        data(){
            return{
                items: [
                { especie: 'Herrera', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: Herrera},
                { especie: 'Vidriada', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: Vidriada},
                { especie: 'Serviola', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: Serviola},
                { especie: 'Bacoreta', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: Bacoreta},
                { especie: 'Llampuga', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: Llampuga},
                { especie: 'Aguja', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: Aguja},
                { especie: 'Blue Runner', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: BlueRunner},
                { especie: 'Jurela', tamaño: '', lugar: '', fecha: '', pescador: '' , imagen: Jurela}
                ]
            }
        }
    }
</script>