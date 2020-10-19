<template>
	<div>
		<q-select
			filled
			v-model="model"
			:options="options"
			label="Standard"
			emit-value
			bg-color="white"
			v-bind:outlined="true"
		>
		</q-select>

		<div v-if="model === 'Megasena'">
			<MegaSena v-bind:is-cadastro="true"/>
		</div>
		<div v-if="model === 'Lotofácil'">
			<Lotomania v-bind:is-cadastro="false"/>
		</div>

	</div>
</template>

<script>
	import MegaSena from 'src/components/buscar-concurso/megasena/MegaSena';
	import Lotomania from 'src/components/buscar-concurso/lotomania/Lotomania';

	export default {
		name: 'BuscarConcurso',
		components: {
			MegaSena,
			Lotomania
		},
		data() {
			return {
				model: 'Megasena',
				options: [
					'Megasena',
					'Lotofácil'
				]
			};
		}
	};
</script>

<style scoped>

</style>
