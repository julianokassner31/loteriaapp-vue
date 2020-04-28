<template>
  <div class="q-pa-md row items-start justify-between">
    <CardConcurso title="MegaSena" classBg="bg-megasena"/>
    <CardConcurso title="Dia de Sorte" classBg="bg-diadesorte"/>
    <CardConcurso title="Lotofácil" classBg="bg-lotofacil"/>
    <CardConcurso title="Loteria Federal" classBg="bg-loteriafederal"/>
    <CardConcurso title="Lotomania" classBg="bg-lotomania"/>
    <CardConcurso title="Timemania" classBg="bg-timemania"/>
    <CardConcurso title="Dupla Sena" classBg="bg-duplasena"/>
    <CardConcurso title="Loteca" classBg="bg-loteca"/>
    <CardConcurso title="Quina" classBg="bg-quina"/>
    <CardConcurso title="Lotogol" classBg="bg-lotogol"/>
  </div>
</template>

<script>
import CardConcurso from '../components/cards/card-concurso/CardConcurso.vue'

export default {
  name: 'PageIndex',
 components: {
    CardConcurso
  },
  
}
</script>
<style lang="scss" scoped>

</style>

