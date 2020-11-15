<template>
	<q-btn v-if="match"
		   round
		   :label="dezena"
		   color="positive"/>
	<q-btn v-else
		   round
		   outline
		   :label="dezena"
	/>
</template>

<script>
	import { tiposLoteria } from 'components/index.js';

	export default {
		name: 'DezenaConcurso',
		props: {
			dezena: {
				type: Number,
				required: true
			},
			match: {
				type: Boolean,
				required: true
			},
			tpLoteria: {
				type: String,
				required: true
			}
		},

		mounted() {
			tpLoteria = this.props.tpLoteria;
		},

		data() {
			return {
				tiposLoterias: tiposLoteria
			};
		}
	};
</script>

<style>

	.accent {
		background: $purple-4;
	}

	@media (max-width: 600px) {
		.q-btn {
			font-size: 10px;
		}

		.q-pa-sm {
			padding: 2px 2px;
		}
	}

</style>
