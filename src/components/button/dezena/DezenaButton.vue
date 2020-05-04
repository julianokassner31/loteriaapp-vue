/**O comportamento desse button e ser clicavel
e alterar seu background para mostrar que foi selecionada a dezena 
sendo necessario passar um funcao de callback e um numero*/
<template>
    <q-btn
        :key="dezena"
        round
        color="secondary" 
        :label="dezena"
        @click="markDezena"
    />
</template>

<script>
export default {
    name: 'DezenaButton',
    
    props: {
        dezena: {
            type: Number,
            required: true
        },
        callback: {
            type: Function,
            required: true
        }
    },

    methods: {
        
        markDezena(evt) {
            const el = evt.currentTarget;
            const dezenaEscolhida = Number.parseInt(el.innerText);
            this.callback(dezenaEscolhida, el);
        }
    }
}
</script>
<style lang="scss" scoped>
    @media(max-width: 400px) {
        .q-btn {
            font-size: 10px;
        }

        .q-pa-sm {
            padding: 2px 2px;
        }
    }
    
</style>