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
	import {LOTERIAS} from '../index';

	export default {
		name: 'BuscarConcurso',
		components: {
			MegaSena,
			Lotomania
		},
		data() {
			return {
				model: LOTERIAS.MEGASENA.tpLoteria,
				tiposLoteria: LOTERIAS,
				options: LOTERIAS.tipos
			};
		}
	};
</script>

<style scoped>

</style>
