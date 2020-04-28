<template>
  <q-btn v-if="match" 
    round 
    color="green-9" 
    :label="dezena"/>

    <q-btn v-else 
    round 
    outline 
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