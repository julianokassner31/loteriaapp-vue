<template>
	<div>
		<q-card flat bordered>

			<q-card-section>
				<div class="text-h6 text-center">Marque 15 dezenas</div>
			</q-card-section>

			<div class="column items-center">
				<div class="row justify-between">
					<div v-for="dezena in dezenasLotoMania"
						 :key="dezena"
						 :class="$q.platform.is.cordova ? 'q-pa-sm-mobile' : 'q-pa-sm'">
						<dezenaButton
							:ref="dezena"
							:dezena="dezena"
							:dezenasEscolhidas="dezenasEscolhidas"
							:callback="markDezena.bind()"
						/>
					</div>
				</div>

			</div>

			<div class="q-pa-md column items-center">
				<q-btn  v-if="!isCadastro"
					:disable="dezenasEscolhidas.length < 6"
					class="button"
					size="lg"
					style="color: white; background-color: goldenrod;"
					label="Buscar"
					@click="buscarConcursos"
					icon="search"
				/>

				<q-btn v-if="isCadastro"
					:disable="dezenasEscolhidas.length < 6"
					class="button"
					size="lg"
					style="color: white; background-color: goldenrod;"
					label="Cadastrar"
					@click="cadastrarJogo"
					icon="search"
				/>

				<q-btn
					v-if="dezenasEscolhidas.length > 1"
					class="button"
					size="lg"
					@click="limpar"
					label="Limpar"
					icon="delete"/>
			</div>

			<q-list v-if="this.concursos && this.concursos.quadras && this.concursos.quadras.length"
					bordered
					class="rounded-borders column items-center"
			>
				<q-item>
					<q-item-section>Quadras</q-item-section>
				</q-item>

				<q-expansion-item v-for="concurso in concursos.quadras"
								  :key="concurso.id"
								  class="justify-center"
				>
					<template v-slot:header>
						<div class="full-width">

							<div class="row justify-evenly q-my-sm">
								<dezenaConcurso
									:match="dezenasEscolhidas.some(d => d == concurso.prDezena)"
									:dezena="concurso.prDezena"
								/>
								<dezenaConcurso
									:match="dezenasEscolhidas.some(d => d == concurso.seDezena)"
									:dezena="concurso.seDezena"
								/>
								<dezenaConcurso
									:match="dezenasEscolhidas.some(d => d == concurso.teDezena)"
									:dezena="concurso.teDezena"
								/>
								<dezenaConcurso
									:match="dezenasEscolhidas.some(d => d == concurso.qaDezena)"
									:dezena="concurso.qaDezena"
								/>
								<dezenaConcurso
									:match="dezenasEscolhidas.some(d => d == concurso.qiDezena)"
									:dezena="concurso.qiDezena"
								/>
								<dezenaConcurso
									:match="dezenasEscolhidas.some(d => d == concurso.sxDezena)"
									:dezena="concurso.sxDezena"
								/>
							</div>
						</div>
					</template>

					<q-card>
						<q-card-section>
							Ordenadas
						</q-card-section>
					</q-card>
				</q-expansion-item>
			</q-list>
		</q-card>
	</div>

</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator';
	import { DezenaButton, DezenaConcurso, LOTERIAS } from 'components/index.js';

	@Component({
		components: {
			dezenaButton: DezenaButton,
			dezenaConcurso: DezenaConcurso
		},
		props: {
			isCadastro: {
				required: true
			}
		}
	})
	export default class LotoMania extends Vue {

		dezenasLotoMania: number[] = LOTERIAS.LOTOFACIL.dezenas;
		dezenasEscolhidas: number[] = [];
		concursos = null;

		cadastrarJogo() {
			console.log('teste');
		}

		buscarConcursos() {
			this.$axios.get(
				'/megasena/find-concursos?dezenasUsuario=' + encodeURIComponent(this.dezenasEscolhidas.toString()))
				.then(resp => this.concursos = resp.data);
		}

		limpar() {
			this.dezenasEscolhidas.forEach(d => {
				const el: any = this.$refs[d.toString()];
				el[0].$el.classList.remove('bg-positive');
			});

			this.dezenasEscolhidas = [];
			this.concursos = null;
		}

		markDezena(dezenaEscolhida: number, el: Element) {

			if (this.dezenasEscolhidas.every(d => d !== dezenaEscolhida)) {

				if (this.dezenasEscolhidas.length < 15) {
					this.dezenasEscolhidas.push(dezenaEscolhida);
					el.classList.add('bg-positive');
				}

			} else {
				this.dezenasEscolhidas = this.dezenasEscolhidas.filter(d => d !== dezenaEscolhida);
				el.classList.remove('bg-positive');
			}
		}
	}
</script>
<style lang="scss" scoped>
	.row {
		max-width: 347px;
	}

	.button {
		max-width: 347px;
		width: 100%;
		color: white;
		background-color: $red-6;
		margin-top: 0.5rem;
	}

	.q-expansion-item {
		max-width: 600px;
		width: 100%;
	}

	@media(max-width: 400px) {
		.q-pa-sm-mobile {
			padding: 2px 15px;
		}

		.q-pa-sm {
			padding: 2px 10px;
		}
	}
</style>
