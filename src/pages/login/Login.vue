<template>
  <q-page padding style="display:flex; justify-content:center">
    <div>
      <q-form v-if="!nomeUsuario"
        @submit="login"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="form.userName"
          label="Seu Login *"
          hint="login"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'por favor informe o login']"
        />

        <q-input
          filled
          type="password"
          v-model="form.password"
          label="Sua senha *"
          lazy-rules
          :rules="[ val => val => val && val.length > 0 || 'Por favor informe a senha']"
        />
        
        <q-btn size="lg" style="width:96%" label="Login" type="submit" color="positive"/>

      </q-form>

      <q-btn v-else
        size="lg" 
        style="width:96%; height: 3rem" 
        label="Logout" 
        type="submit" 
        color="warning"
        @click="logout"
      />
    </div>
  </q-page>
</template>

<script>
import LocalStorageManager from '../../util/LocalStorageManager';
import Request from '../../util/Request';
import AtualizaTitleHeader from 'src/util/AtulizaTitleHeader';

export default {
  name: 'Login',

  data(){
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },

  created(){
    AtualizaTitleHeader.atualizar(this.$store, 'Faça seu Login');
  },

  computed: {
      nomeUsuario: {
          get () {
              return this.$store.state.usuario.nomeUsuario
          }
      }
  },

  methods: {
    login() {
      this.$axios.post('/auth', this.form)
      .then(resp => {
        const usuario = resp.data.username;
        LocalStorageManager.setToken(resp.data.token);
        LocalStorageManager.setNomeUsuario(usuario);
        this.$store.commit('usuario/setNomeUsuario', usuario);
        this.showMsg(`Bem vindo de volta ${usuario}`, 'success');
        this.$router.push('/');
      }).catch(err => {
        this.showMsg('Login ou senha inválidos!', 'negative');
      });
    },

    logout: function (){
      const usuario = LocalStorageManager.getNomeUsuario();
      LocalStorageManager.removeItem(LocalStorageManager.USER_NAME);
      LocalStorageManager.removeItem(LocalStorageManager.KEY_TOKEN);
      this.$store.commit('usuario/setNomeUsuario', null);
      this.showMsg(`Até logo ${usuario}.`, 'success');
    },

    showMsg(message, type) {
      this.$q.notify({
        type: type,
        position:'top',
        message: message
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  div {
    width: 400px;
    min-width: 300px;
  }
</style>
