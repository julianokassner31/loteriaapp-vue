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
          Resultados dos Concursos
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
        <q-item-label
          header
          class="text-grey-8"
        >
          Navegação
        </q-item-label>

        <EssentialLink
          v-bind="{
            title: 'Home',
            icon: 'home',
            link: '/'
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
            <q-item-label header> Saída de dezenas </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <EssentialLink
          v-for="(link, index) in linksSaidaDezenas"
          :key="'saida'+index"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
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
          title: 'Megasena',
          caption: 'Já saiu aqui?',
          icon: 'code',
          link: '/megasena'
        },
        {
          title: 'Lotofácil',
          caption: 'ou aqui?',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Lotomania',
          caption: 'talvez aqui?',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Sena',
          caption: 'quem sabe aqui?',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
      ],
      linksSaidaDezenas:[
        {
          title: 'Megasena',
          caption: 'veja as dezenas que mais saem',
          icon: 'rss_feed',
          link: '/saidadezenas/megasena'
        },
        {
          title: 'Sena',
          caption: 'veja as dezenas que mais saem',
          icon: 'rss_feed',
          link: '/saidadezenas/megasena'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu {
    font-size: 1.2em;
  }
</style>