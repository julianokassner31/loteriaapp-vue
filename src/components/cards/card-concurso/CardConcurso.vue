<template>
	<div v-if="concurso" class="col-12 q-pa-sm">
		<q-card :class="bgColor">
			<q-card-section class="text-weight-bolder">
				<div class="row justify-start">
					<div v-if="title" class="text-h5 title q-mr-md text-weight-bolder">{{title}}</div>
					<div
						v-if="concurso.acumulado"
						class="q-px-md text-h6 title bg-red-5 text-weight-bolder">
						Acumulou!!!
					</div>
				</div>

				<div class="q-pb-sm text-subtitle2 title text-weight-bolder">Concurso nº {{concurso.idConcurso}} {{concurso.dtSorteio |
					dateFormat('DD/MM/YYYY')}}
				</div>

				<div v-if="!ordemSorteio" class="caption text-weight-bolder">Orderm sorteio</div>
				<div v-if="ordemSorteio" class="caption text-weight-bolder">Orderm natural</div>
				<div
					@click="ordernar()"
					class="wrap row items-center justify-between">
					<q-btn v-for="dezena of dezenas"
						   :key="dezena"
						   :style="$q.platform.is.cordova ? 'font-size: 1rem;': 'font-size: 0.9rem;'"
						   disable
						   round
						   :color="color"
						   :label="dezena"
					/>
				</div>
			</q-card-section>
		</q-card>
	</div>
</template>

<script>
	import {LOTERIAS} from 'components/index';

	export default {
		name: 'CardConcurso',

		props: {
			title: {
				type: String,
				required: false
			},
			tpLoteria: {
				type: String,
				required: true
			},
			concurso: {
				type: Object,
				required: false
			}
		},

		data() {
			return {
				dezenas: [],
				ordemSorteio: true,
				bgColor: '',
				color: ''
			};
		},

		async created() {
			const loteria = LOTERIAS.getType(this.$props.tpLoteria);
			this.bgColor = loteria.bgColor;
			this.color = loteria.color;
			if (!this.$props.concurso) {
				await this.$axios.get(loteria.uri).then(resp => {
					this.concurso = resp.data;
				});
			}

			this.ordernar();
		},

		methods: {
			ordernar() {

				if (this.ordemSorteio) {
					this.dezenas = LOTERIAS.getDezenasOrdemConcurso(this.$props.tpLoteria, this.concurso);

				} else {
					this.dezenas = LOTERIAS.getDezenasOrdenadas(this.$props.tpLoteria, this.concurso);
				}

				this.ordemSorteio = !this.ordemSorteio;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.q-btn {
		font-weight: 900 !important;
		opacity: 2 !important;
	}

	.q-card {
		color: $white
	}
</style>
