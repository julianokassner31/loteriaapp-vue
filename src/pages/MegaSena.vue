<template>
  <q-card flat bordered>
        
    <q-card-section>
      <div class="text-h6 text-center">Marque 6 números</div>
    </q-card-section>

    <div class="column items-center">
      <div class="row items-start ">
        
        <div v-for="dezena in dezenasMegasena"
          :key="dezena">
          
          <DezenaButton class="q-ma-sm"
            :dezena="dezena"
            :dezenasEscolhidas="dezenasEscolhidas"
            :callback="markDezena.bind()"
          />
        
        </div>
      </div>
      
    </div>
    <div class="q-pa-md column items-center">
      <q-btn
        :disable="dezenasEscolhidas.length < 6"
        class="button q-pa-sm"
        style="color: white; background-color: goldenrod;" 
        label="Buscar"
        @click="buscarConcursos"
      />
    </div> 

  </q-card>

</template>

<script>
import DezenaButton from '../components/button/dezena/DezenaButton.vue';
import {dezenasMegasena} from '../components/button/dezena/dezenas';
import Axios from 'axios';


export default {
  name: 'MegaSena',
  components: {
    DezenaButton
  },

  data() {
    return {
        dezenasMegasena: dezenasMegasena,
        dezenasEscolhidas: []
    }
  },

  methods: {

    buscarConcursos() {
      // TODO ARRUMAR ISSAQUI PASSAR URL EM ARQUIVO SEPARADO
      Axios.get(
        'https://loteria-api.herokuapp.com/megasena/find-concursos?dezenasUsuario='+encodeURIComponent(this.dezenasEscolhidas))
        .then(resp => console.log(resp.data));
    },
    markDezena(dezenaEscolhida, el) {
        
      if(this.dezenasEscolhidas.every(d => d !== dezenaEscolhida)){
          
          if(this.dezenasEscolhidas.length < 6){
              this.dezenasEscolhidas.push(dezenaEscolhida);
              el.classList.add('bg-positive');
          }

      } else {
          this.dezenasEscolhidas = this.dezenasEscolhidas.filter(d => d !== dezenaEscolhida);
          el.classList.remove('bg-positive');
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .row {
    max-width: 586px;
  }

  .button {
    max-width: 554px;
    width: 100%;
  }
</style>