<template>
  <q-page padding fixed-center style="max-width: 400px">
    <q-form
      @submit="onSubmit"
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

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageName',

  data(){
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.$axios.post('/auth', this.form)
      .then(resp => {
        this.$q.notify({
          type: 'positive',
          position:'top',
          message: 'Login efetuado com sucesso!'
        })
      }).catch(err => {
        this.$q.notify({
          type: 'negative',
          position:'top',
          message: 'Login ou senha inexistente!'
        })
      });
    }
  }
}
</script>
