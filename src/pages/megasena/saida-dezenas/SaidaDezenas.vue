<template>
	<div>
		<q-select
			:options="tpsLoterias"
			v-model="tpLoteria"
		>
		</q-select>
		<q-card class="row q-my-md q-py-sm align-center justify-around col-sm-9 col-md-10">
			<p class="text-h6">Posições</p>
		</q-card>
		<q-infinite-scroll class="q-mb-lg" @load="loadList" :offset="250">
			<q-card class="row q-my-sm q-py-md">
				<q-card class="dezena col-sm-3 col-md-2">
					<q-card-section>
						<div class="text-h6">Dezenas</div>
					</q-card-section>
				</q-card>
				<q-card class="row justify-around col-sm-9 col-md-10">
					<q-card v-for="pos in this.posicoesTitle"
							:key="pos"
					>
						<q-card-section>
							<div class="text-h6">{{pos.posicao}}</div>
						</q-card-section>
					</q-card>
				</q-card>
			</q-card>

			<q-card
				v-for="key of Object.keys(this.counterPosicoes)"
				:key="key.dezena"
				class="non-selectable row q-my-sm items-center">
				<q-card class="dezena col-sm-3 col-md-2">
					<q-card-section>
						<dezenaConcurso
							:match="true"
							:dezena="key"
						/>
						<div class="q-mt-md q-mt-sm text-subtitle2">saiu {{sumVezesSaida(key)}}</div>
					</q-card-section>
				</q-card>
				<q-card class="row justify-around col-sm-9 col-md-10">
					<q-card
						v-for="(dezena, index) of counterPosicoes[key]"
						:key="index-dezena.dezena"
					>
						<q-card-section>
							<div class="text-h6">{{dezena.count}}</div>
						</q-card-section>
					</q-card>
				</q-card>
			</q-card>
			<q-page-scroller position="bottom-right" :scroll-offset="1000" :offset="[18, 18]">
				<q-btn fab icon="keyboard_arrow_up" color="yellow-14"/>
			</q-page-scroller>
		</q-infinite-scroll>
	</div>

</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import API from '../../../api';
	import DezenaConcurso from 'components/button/dezena-concurso/DezenaConcurso.vue';
	import {tiposLoteria} from 'components/index';

	@Component({
		components: {
			dezenaConcurso: DezenaConcurso
		}
	})
	export default class SaidaDezenas extends Vue {
		private tpLoteria = 'MEGASENA';
		private tpsLoterias = [tiposLoteria.MEGASENA, tiposLoteria.LOTOFACIL];

		private posicoesTitle = [
			{ posicao: '1ª' },
			{ posicao: '2ª' },
			{ posicao: '3ª' },
			{ posicao: '4ª' },
			{ posicao: '5ª' },
			{ posicao: '6ª' }
		];

		private counterPosicoes: any = {};

		private loadList(index: number, done: Function) {
			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop = document.documentElement.scrollTop;
			const clientHeight = document.documentElement.clientHeight;
			if (index <= 5) {
				API.get(`/${this.tpLoteria.toLowerCase()}/counterPosicoes?page=${index * 10}&tpLoteria=${this.tpLoteria}`)
					.then((resp: any) => {
						Object.keys(resp.data).forEach(key => {
							Vue.set(this.counterPosicoes, key, resp.data[key]);
						});
						done();
					});

			}
		}

		beforeMount() {

			if (this.tpLoteria === 'LOTOFACIL') {
				this.posicoesTitle = this.posicoesTitle.concat([
					{ posicao: '7ª' },
					{ posicao: '8ª' },
					{ posicao: '9ª' },
					{ posicao: '10ª' },
					{ posicao: '11ª' },
					{ posicao: '12ª' },
					{ posicao: '13ª' },
					{ posicao: '14ª' },
					{ posicao: '15ª' }
				]);
			}


			API.get(`/${this.tpLoteria.toLowerCase()}/counterPosicoes?page=0&tpLoteria=${this.tpLoteria}`)
				.then((resp: any) => {
					this.counterPosicoes = resp.data;
				});
		}

		public sumVezesSaida(key: string) {
			const counter = this.counterPosicoes[parseInt(key)];
			return counter.reduce((prev: number, c: any) => prev += c.count, 0);
		}
	}
</script>

<style lang="scss" scoped>
	.posicao {
		width: 100%;
	}

	.dezena {
		min-width: 98px;
		text-align: center;
	}

	.q-card {
		background: none;
	}

	.q-card__section {
		padding: 10px;
	}

	@media (max-width: 1000px) {
		.posicao {
			display: none;
		}
	}

	@media (max-width: 400px) {
		.q-btn {
			font-size: 1rem;
		}
	}
</style>
