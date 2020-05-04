<template>
<div>
  <q-card flat bordered>
        
    <q-card-section>
      <div class="text-h6 text-center">Marque 6 dezenas</div>
    </q-card-section>

    <div class="column items-center">
      <div class="row justify-center">
        
        <div v-for="dezena in dezenasMegasena"
          :key="dezena">
          
          <DezenaButton class=""
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

  <q-list v-if="concursos && concursos.quadras.length" 
      bordered 
      class="rounded-borders"
    >
      <q-item>
        <q-item-section>Quadras</q-item-section>
      </q-item>
      
      <q-expansion-item v-for="concurso in concursos.quadras"
        :key="concurso.id"
        class="justify-center"
        >
        <template  v-slot:header >
          <div class="column full-width">
            <q-item-section>
                <q-item-label>Ordem do sorteio</q-item-label>
            </q-item-section>
            
            <div class="row justify-around q-my-sm">
              <DezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.prDezena)"
                :dezena="concurso.prDezena"
              />
              <DezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.seDezena)"
                :dezena="concurso.seDezena"
              />
              <DezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.teDezena)"
                :dezena="concurso.teDezena"
              />
              <DezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.qaDezena)"
                :dezena="concurso.qaDezena"
              />
              <DezenaConcurso
                :match="dezenasEscolhidas.some(d => d == concurso.qiDezena)"
                :dezena="concurso.qiDezena"
              />
              <DezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.sxDezena)"
                :dezena="concurso.sxDezena"
              />
            </div>
          </div>
        </template>
      
        <q-card>
          <q-card-section>
            Ordenadas
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
</div>

</template>

<script>
import DezenaButton from '../components/button/dezena/DezenaButton.vue';
import DezenaConcurso from '../components/button/dezena-concurso/DezenaConcurso.vue'
import {dezenasMegasena} from '../components/button/dezena/dezenas';
import Axios from 'axios';


export default {
  name: 'MegaSena',
  components: {
    DezenaButton,
    DezenaConcurso
  },

  data() {
    return {
        dezenasMegasena: dezenasMegasena,
        dezenasEscolhidas: [],
        concursos: null,
    }
  },

  methods: {

    buscarConcursos() {
      // TODO ARRUMAR ISSAQUI PASSAR URL EM ARQUIVO SEPARADO
      Axios.get(
        'https://loteria-api.herokuapp.com/megasena/find-concursos?dezenasUsuario='+encodeURIComponent(this.dezenasEscolhidas))
        .then(resp => this.concursos = resp.data);
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
    max-width: 440px;
  }

  .button {
    max-width: 410px;
    width: 100%;
  }

  .teste{
    justify-content: space-between;
  }
</style>