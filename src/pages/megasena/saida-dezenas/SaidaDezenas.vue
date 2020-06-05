<template>
<q-infinite-scroll @load="loadList" :offset="250">
  <q-card class="row">
    <q-card class="dezena col-sm-3 col-md-2">
      <q-card-section>
        <div class="text-h6">Dezenas</div>
      </q-card-section>
    </q-card>
    <q-card class="row justify-around col-sm-9 col-md-10">
      <q-card v-for="pos in this.posicoesTitle"
        :key="pos"
      >
        <q-card-section>
          <div class="text-h6">{{pos.posicao}} <span class="posicao">Posição</span></div>
        </q-card-section>
      </q-card>
    </q-card>
  </q-card>

  <q-card 
      v-for="key of Object.keys(this.counterPosicoes)"
      :key="key.dezena"
      class="non-selectable row q-my-sm items-center">
      <q-card class="dezena col-sm-3 col-md-2">
        <q-card-section>
          <dezenaConcurso 
                :match="true"
                :dezena="key"
              />
          <div class="q-mt-md q-mt-sm text-subtitle2">saiu {{sumVezesSaida(key)}}</div>
        </q-card-section>
      </q-card>
      <q-card class="row justify-around col-sm-9 col-md-10">
      <q-card
        v-for="(dezena, index) of counterPosicoes[key]"
        :key="index-dezena.dezena"
        >
        <q-card-section>
          <div class="text-h6">{{dezena.count}}</div>
        </q-card-section>
      </q-card>
      </q-card>
    </q-card>
</q-infinite-scroll>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import API from '../../../api';
import DezenaConcurso from 'components/button/dezena-concurso/DezenaConcurso.vue'

@Component({
  components: {
    dezenaConcurso: DezenaConcurso
  }
})
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

  private loadList(index: number, done: Function) {
   const scrollHeight = document.documentElement.scrollHeight; 
   const scrollTop = document.documentElement.scrollTop;
   const clientHeight = document.documentElement.clientHeight;
    if(index <= 5 ) {
      API.get(`/megasena/counter-posicoes?page=${index}`)
        .then((resp: any) => {
          Object.keys(resp.data).forEach(key => {
            Vue.set(this.counterPosicoes, key, resp.data[key]);
          });
          done();
        });

    }
  }

  beforeMount() {
    API.get('/megasena/counter-posicoes?page=0')
    .then((resp: any) => {
      this.counterPosicoes = resp.data;
    })
  }

  public sumVezesSaida(key: string) {
    const counter = this.counterPosicoes[parseInt(key)];
    return counter.reduce((prev: number, c: any) => prev+= c.count, 0);
  }
}
</script>

<style lang="scss" scoped>
  .posicao {
    width: 100%;
  }
  .dezena {
    min-width: 98px;
    text-align: center;
  }
  .q-card {
    background: none;
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