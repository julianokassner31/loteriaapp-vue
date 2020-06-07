<template>

<q-item
    clickable
    tag="a"
    to="/login"
>
    <q-chip>
        <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        {{nomeUsuario || 'Login'}}
    </q-chip>
</q-item>

</template>

<script>
import LocalStorageManager from '../../util/LocalStorageManager';

export default {
    name: 'Login',
    
    data() {
        return {
            url: '/login',
        }
    },

   created: function () {
        const usuario = LocalStorageManager.getNomeUsuario();
        if(usuario){
            this.$store.commit('usuario/setNomeUsuario', usuario);
        }
    },
    
    computed: {
        nomeUsuario: {
            get () {
                return this.$store.state.usuario.nomeUsuario;
            }
        }
    }
}
</script>

<style>

</style>