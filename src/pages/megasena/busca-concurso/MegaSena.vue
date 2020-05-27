<template>
<div>
  <q-card flat bordered>
        
    <q-card-section>
      <div class="text-h6 text-center">Marque 6 dezenas</div>
    </q-card-section>

    <div class="column items-center">
      <div class="row justify-center">
        <div v-for="dezena in dezenasMegasena"
          :key="dezena"
          class="q-pa-sm">
          <dezenaButton
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
        icon="search"
      />
    </div> 

  <q-list v-if="this.concursos && this.concursos.quadras && this.concursos.quadras.length" 
      bordered 
      class="rounded-borders column items-center"
    >
    
      <div class="q-pa-md column items-center">
      <q-btn
        :disable="dezenasEscolhidas.length < 6"
        class="button q-pa-sm"
        style=""
        @click="concursos=undefined;dezenasEscolhidas=[];"
        label="Limpar"
        icon="delete"/>
    </div> 
 
      <q-item>
        <q-item-section>Quadras</q-item-section>
      </q-item>
      
      <q-expansion-item v-for="concurso in concursos.quadras"
        :key="concurso.id"
        class="justify-center"
        >
        <template  v-slot:header >
          <div class="full-width">
            
            <div class="row justify-evenly q-my-sm">
              <dezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.prDezena)"
                :dezena="concurso.prDezena"
              />
              <dezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.seDezena)"
                :dezena="concurso.seDezena"
              />
              <dezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.teDezena)"
                :dezena="concurso.teDezena"
              />
              <dezenaConcurso 
                :match="dezenasEscolhidas.some(d => d == concurso.qaDezena)"
                :dezena="concurso.qaDezena"
              />
              <dezenaConcurso
                :match="dezenasEscolhidas.some(d => d == concurso.qiDezena)"
                :dezena="concurso.qiDezena"
              />
              <dezenaConcurso 
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {DezenaButton, DezenaConcurso, dezenasMegasena} from '../../../components/index.js';

@Component({
  components: {
    dezenaButton: DezenaButton,
    dezenaConcurso: DezenaConcurso
  }
})
export default class MegaSena extends Vue {

  dezenasMegasena:number[] = dezenasMegasena;
  dezenasEscolhidas:number[] = [];
  concursos = null;

    buscarConcursos() {
      this.$axios.get(
        '/megasena/find-concursos?dezenasUsuario='+encodeURIComponent(this.dezenasEscolhidas.toString()))
        .then(resp => this.concursos = resp.data);
    }
    markDezena(dezenaEscolhida: number, el: Element) {
        
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
</script>
<style lang="scss" scoped>
  .row {
    max-width: 580px;
  }

  .button {
    max-width: 580px;
    width: 100%;
    color: white; 
    background-color: $red-6;
  }

  .q-expansion-item {
    max-width: 600px;
    width: 100%;
  }

  @media(max-width: 400px) {
    .q-pa-sm {
        padding: 2px 2px;
    }
  }
</style>