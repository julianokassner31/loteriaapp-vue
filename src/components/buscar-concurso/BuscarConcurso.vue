<template>
	<div>
		<SelectTpLoteria @emitChangeTpLoteria="changeTpLoteria"></SelectTpLoteria>

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
	import SelectTpLoteria from 'src/components/select-tploteria/SelectTpLoteria';
	import {LOTERIAS} from '../index';

	export default {
		name: 'BuscarConcurso',
		components: {
			MegaSena,
			Lotomania,
			SelectTpLoteria
		},
		data() {
			return {
				model: LOTERIAS.MEGASENA.tpLoteria,
				tiposLoteria: LOTERIAS,
				options: LOTERIAS.tipos
			};
		},
		methods: {
			changeTpLoteria: function(val) {
				alert(val)
			}
		}
	};
</script>

<style scoped>

</style>
