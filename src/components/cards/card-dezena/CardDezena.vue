<template>
  <div class="col-2">
    <div class="q-ma-sm dezena text-center">{{dezena}}</div>
  </div>
</template>

<script>
export default {
    name: 'CardDezena',
    props: {
        dezena: {
            type: Number,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
  .dezena {
    font-weight: bold;
    color: #454545;
    background: $white;
    padding: 8px 5px;
    border-radius: 4px;
    box-shadow: 3px 3px 3px rgba( 30, 60, 90, 0.3);
  }
</style>
