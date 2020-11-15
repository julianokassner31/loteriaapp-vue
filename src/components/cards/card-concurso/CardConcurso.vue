<template>
	<div v-if="concurso" class="col-12 col-md-6 col-lg-4 q-pa-sm">
		<q-card v-bind:class="classBg">
			<q-card-section>
				<div class="row justify-between">
					<div class="text-h6 title">{{title}}</div>
					<div
						v-if="concurso.acumulado"
						class="text-h6 title">
						Acumulou!!!
					</div>
				</div>

				<div class="q-pb-sm text-subtitle2 title">Concurso nº {{concurso.idConcurso}} {{concurso.dtSorteio |
					dateFormat('DD/MM/YYYY')}}
				</div>

				<div v-if="!ordemSorteio" class="caption">Orderm sorteio</div>
				<div v-if="ordemSorteio" class="caption">Orderm natural</div>
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

	export default {
		name: 'CardConcurso',

		props: {
			title: {
				type: String,
				required: true
			},
			classBg: {
				type: String,
				required: true
			},
			color: {
				type: String,
				default: 'green-7',
				required: true
			},
			uri: {
				type: String,
				required: false
			}
		},

		data() {
			return {
				concurso: undefined,
				dezenas: [],
				ordemSorteio: true
			};
		},

		created() {
			if (this.$props.uri) {
				this.$axios.get(this.$props.uri).then(resp => {
					this.concurso = resp.data;
					this.ordernar();
				});
			}
		},

		methods: {
			ordemConcurso() {
				this.dezenas = [
					this.concurso.prDezena,
					this.concurso.seDezena,
					this.concurso.teDezena,
					this.concurso.qaDezena,
					this.concurso.qiDezena,
					this.concurso.sxDezena
				];

				if (this.$props.uri === '/lotofacil') {
					this.dezenas = this.dezenas.concat([
						this.concurso.stDezena,
						this.concurso.otDezena,
						this.concurso.noDezena,
						this.concurso.dcDezena,
						this.concurso.dprDezena,
						this.concurso.dseDezena,
						this.concurso.dteDezena,
						this.concurso.dqaDezena,
						this.concurso.dqiDezena
					]);
				}
			},

			ordernar() {

				if (this.ordemSorteio) {
					this.ordemConcurso();
				} else {
					this.dezenas.sort((a, b) => a < b ? -1 : 1);
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
