<template>
	<div>
		<q-select
			filled
			v-model="model"
			:options="options"
			label="Selecione"
			emit-value
			bg-color="white"
			v-bind:outlined="true"
		>
		</q-select>

		<div v-if="model === 'MEGASENA'">
			<MegaSena v-bind:is-cadastro="false"/>
		</div>
		<div v-if="model === 'LOTOFACIL'">
			<Lotomania v-bind:is-cadastro="false"/>
		</div>

	</div>
</template>

<script>
	import MegaSena from 'src/components/buscar-concurso/megasena/MegaSena';
	import Lotomania from 'src/components/buscar-concurso/lotomania/Lotomania';
	import {tiposLoteria} from '../index';

	export default {
		name: 'BuscarConcurso',
		components: {
			MegaSena,
			Lotomania
		},
		data() {
			return {
				model: tiposLoteria.MEGASENA,
				options: [
					tiposLoteria.MEGASENA,
					tiposLoteria.LOTOFACIL
				]
			};
		}
	};
</script>

<style scoped>

</style>
