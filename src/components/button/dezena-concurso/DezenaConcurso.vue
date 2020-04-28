<template>
  <q-btn v-if="match" 
    round  
    :label="dezena"
    color="positive"/>
    <q-btn v-else 
    round 
    outline
    color="secondary" 
    :label="dezena"/>
</template>

<script>
export default {
    name: 'DezenaConcurso',
    props: {
        dezena: {
            type: Number,
            required: true
        },
        match: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>

</style>