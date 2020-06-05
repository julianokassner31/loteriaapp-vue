<template>
  <q-page padding style="display:flex; justify-content:center">
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
        <q-btn class="q-px-xl q-py-xs" style="width: 100%" label="Login" type="submit" color="positive"/>
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
<style lang="scss" scoped>
  form {
    width: 400px;
    min-width: 300px;
  }
</style>
