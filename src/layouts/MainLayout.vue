<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-positive">
        <q-btn
          flat
          dense
          round
          class="menu"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="bg-positive text-center">
          {{titleHeader}}
        </q-toolbar-title>

        <Login />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label header> Menu </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator/>

        <EssentialLink
          v-bind="{
            title: 'Home',
            icon: 'home',
            link: '/',
            titleHeader: 'Últimos concursos'
          }"
        />
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label header> Meu jogo já saiu? </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <EssentialLink
          v-for="(link, index) in essentialLinks"
          :key="'link'+index"
          v-bind="link"
        />
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label header>Quantas X já saiu</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <EssentialLink
          v-for="(link, index) in linksSaidaDezenas"
          :key="'saida'+index"
          v-bind="link"
        />
        <q-separator />
        <div v-if="nomeUsuario">
          <q-item>
            <q-item-section>
              <q-item-label header> Atualizar Resultados </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <EssentialLink
            v-for="(link, index) in linksSeguros"
            :key="'linkseguro'+index"
            v-bind="link"
          />
        </div>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import AtualizaTitleHeader from 'src/util/AtulizaTitleHeader';
import { Login } from 'components/index.js';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    Login
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
							{
								title: 'Buscar Concursos',
								link: '/buscarjogos',
								icon: 'done',
								titleHeader: 'Meu jogo já saiu?'
							}
      ],
      linksSaidaDezenas:[
        {
          title: 'Megasena',
          link: '/saidadezenas/megasena',
          icon: 'format_list_numbered',
          titleHeader: 'Quantas X já saiu'
        }
      ],
      linksSeguros: [
        {
          title: 'Megasena',
          action: '/saidadezenas/megasena',
          icon: 'loop',
          titleHeader: 'Atualizar resultados Megasena'
        }
      ]
    }
  },

  mounted(){
    AtualizaTitleHeader.atualizar(this.$store, 'Últimos concursos');
  },
  computed: {
      nomeUsuario: {
          get () {
              return this.$store.state.usuario.nomeUsuario
          }
      },
      titleHeader: {
          get () {
              return this.$store.state.titleHeader.titleHeader
          }
      }
  }
}
</script>
<style lang="scss" scoped>
  .menu {
    font-size: 1.2em;
  }
</style>
