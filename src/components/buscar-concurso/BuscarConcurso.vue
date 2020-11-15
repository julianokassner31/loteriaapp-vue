<template>
	<div>
		<q-select
			:item-aligned="true"
			outlined
			v-model="model"
			:options="options"
		>
		</q-select>

		<div v-if="model === tiposLoteria.MEGASENA.tpLoteria">
			<MegaSena v-bind:is-cadastro="false"/>
		</div>
		<div v-if="model === tiposLoteria.LOTOFACIL.tpLoteria">
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
				model: tiposLoteria.MEGASENA.tpLoteria,
				tiposLoteria: tiposLoteria,
				options: [
					tiposLoteria.MEGASENA.tpLoteria,
					tiposLoteria.LOTOFACIL.tpLoteria
				]
			};
		}
	};
</script>

<style scoped>

</style>
