<template>
<div>
  <q-card class="row">
    <q-card class="dezena col-sm-3 col-md-2">
      <q-card-section>
        <div class="text-h6">Dezenas</div>
      </q-card-section>
    </q-card>
    <q-card class="row justify-around col-sm-9 col-md-10">
      <q-card v-for="pos of this.posicoesTitle"
        :key="pos"
      >
        <q-card-section>
          <div class="text-h6">{{pos.posicao}} <span class="posicao">Posição</span></div>
        </q-card-section>
      </q-card>
    </q-card>
  </q-card>

  <q-card 
      v-for="key of Object.keys(counterPosicoes)"
      :key="key"
      class="row">
      <q-card class="dezena col-sm-3 col-md-2">
        <q-card-section>
          <div class="text-h6">{{key}}</div>
        </q-card-section>
      </q-card>
      <q-card class="row justify-around col-sm-9 col-md-10">
      <q-card
        v-for="dezena of counterPosicoes[key]"
        :key="dezena.dezena"
        >
        <q-card-section>
          <div class="text-h6">{{dezena.count}}</div>
        </q-card-section>
      </q-card>
      </q-card>
    </q-card>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import api from '../../../api';

@Component
export default class SaidaDezenas extends Vue {
    private posicoesTitle = [
      {posicao: '1ª'},
      {posicao: '2ª'},
      {posicao: '3ª'},
      {posicao: '4ª'},
      {posicao: '5ª'},
      {posicao: '6ª'}
    ];

    private counterPosicoes: any = {};

    beforeMount() {
      api.get('/megasena/counter-posicoes')
      .then((resp: any) => this.counterPosicoes = resp.data)
    }
}
</script>

<style lang="scss">
  .posicao {
    width: 100%;
  }

  .dezena {
    min-width: 98px;
    text-align: center;
  }

  .q-card__section {
    padding: 10px;
  }

  @media (max-width: 1000px){
    .posicao {
      display: none;
    }
    
  }
</style>