<template>
	<q-select
		v-bind:item-aligned="true"
		outlined
		:options="tpsLoterias"
		v-model="tpLoteria"
		v-on:input="emitChangeTpLoteria"
	>
	</q-select>
</template>

<script>
	import { LOTERIAS } from 'components/index';
	import AtualizaColorHeader from 'src/util/AtualizaColorHeader';

	export default {
		name: 'SelectTpLoteria',
		data() {
			return {
				tpLoteria: LOTERIAS.MEGASENA.tpLoteria,
				tpsLoterias: LOTERIAS.tipos
			};
		},
		watch: {
			tpLoteria: function(newVal) {
				AtualizaColorHeader.atualizar(this.$store, 'bg-' + LOTERIAS[newVal.toString()].color);
			}
		},

		methods: {
			emitChangeTpLoteria: function(val) {
				this.$emit('emitChangeTpLoteria', val);
			}
		}
	};
</script>

<style scoped lang="scss">

</style>
