<template>
<div class="col-12 col-md-6 col-lg-4 q-pa-sm">
  <q-card v-bind:class="classBg">
      <q-card-section>
        <div class="text-h6 title">{{title}}</div>
        <div class="text-subtitle2 title">Concurso nº 1231 em 21/04/2020</div>
		<div class="wrap row items-center"> 
			<q-btn
				disable
				round
				color="ambler" 
				label="10"
        	/>
			<q-btn
				disable
				round
				color="primary" 
				label="20"
        	/>
			<q-btn
				disable
				round
				color="primary" 
				label="30"
        	/>
			<q-btn
				disable
				round
				color="primary" 
				label="40"
        	/>
			<q-btn
				disable
				round
				color="primary" 
				label="50"
        	/>
			<q-btn
				disable
				round
				color="primary" 
				label="60"
        	/>
		</div>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
import CardDezena from '../card-dezena/CardDezena.vue'
export default {
	name: 'CardConcurso',
	components: {
		CardDezena
	},
	props: {
		title: {
			type: String,
			required: true
		},
		classBg: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
	.title {
		color: $white
	}
</style>
