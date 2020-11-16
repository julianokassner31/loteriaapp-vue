<template>
	<div>
		<SelectTpLoteria @emitChangeTpLoteria="changeTpLoteria"></SelectTpLoteria>

		<q-infinite-scroll ref="qInfiniteScroll" class="q-mb-lg" @load="loadList" :offset="250">
			<q-card v-for="concurso of concursos"
					:key="concurso.id"
			>
				<div class="q-pa-md row items-start justify-between">
					<CardConcurso
						:key="concurso.id"
						:tpLoteria="tpLoteria"
						:concurso="concurso"
					/>
				</div>
			</q-card>
			<q-page-scroller position="bottom-right" :scroll-offset="1000" :offset="[18, 18]">
				<q-btn fab icon="keyboard_arrow_up" color="yellow-14"/>
			</q-page-scroller>
		</q-infinite-scroll>
	</div>
</template>

<script>
	import API from 'src/api';
	import { SelectTpLoteria, CardConcurso } from '../../components/index.js';

	export default {
		name: 'AllConcursos',
		components: {
			CardConcurso,
			SelectTpLoteria
		},
		data() {
			return {
				tpLoteria: 'MEGASENA',
				concursos: []
			};
		},
		methods: {
			loadList: async function(index, done) {
				if (index <= 3000) {
					await this.requestConcursos(index);
					done();

				} else {
					done(true);
				}
			},

			changeTpLoteria: function(val) {
				this.tpLoteria = val;
				this.concursos = [];
				this.requestConcursos(0);
			},

			requestConcursos: async function(page) {
				await API.get(`/${this.tpLoteria.toLowerCase()}/allConcursos?page=${page}&tpLoteria=${this.tpLoteria}`)
					.then((resp) => {
						this.concursos = this.concursos.concat(resp.data);
					});
			}
		}
	};
</script>

<style scoped>

</style>
