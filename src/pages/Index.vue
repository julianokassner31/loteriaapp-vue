<template>
 
  <div class="q-pa-md row items-start justify-between">
    <q-carousel
      animated
      arrows
      navigation
    >
      <q-carousel-slide :name="1">
        <card-concurso
          key="12113"
          title="Teste"
          classBg="bg-megasena"
          uri="/megasena"
          color="positive"
        />
      </q-carousel-slide>
      
    </q-carousel>
    <!-- <CardConcurso v-for="loteria of tipoLoteria"
      :key="loteria.id"
      :title="loteria.title" 
      :classBg="loteria.classBg"
      :uri="loteria.uri"
      :color="loteria.color"
    /> -->
  </div>
</template>

<script>
import {CardConcurso} from '../components/index.js'

export default {
  name: 'PageIndex',
  components: {
    CardConcurso
  },

  data() {
    return {
      tipoLoteria: [
        {id:1,title:'MegaSena',classBg:'bg-megasena',uri:'/megasena',color:'secondary'},
        {id:2,title:'Dia de Sorte',classBg:'bg-diadesorte',uri:'/megasena',color:'light-green'},
        {id:3,title:'Lotofácil',classBg:'bg-lotofacil',uri:'/megasena',color:'purple'},
        {id:4,title:'Loteria Federal',classBg:'bg-loteriafederal',uri:'/megasena',color:'indigo'},
        {id:5,title:'Lotomania',classBg:'bg-lotomania',uri:'/megasena',color:'amber-6'},
        {id:6,title:'Timemania',classBg:'bg-timemania',uri:'/megasena',color:'orange-10'},
        {id:7,title:'Dupla Sena',classBg:'bg-duplasena',uri:'/megasena',color:'deep-orange-4'},
        {id:8,title:'Loteca',classBg:'bg-loteca',uri:'/megasena',color:'pink-10'},
        {id:9,title:'Quina',classBg:'bg-quina',uri:'/megasena',color:'light-blue-6'},
        {id:10,title:'Lotogol',classBg:'bg-lotogol',uri:'/megasena',color:'blue-grey-5'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>

