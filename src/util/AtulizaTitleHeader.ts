export default class AtualizaTitleHeader {
	static atualizar(store: any, title: string) {
		store.commit('titleHeader/setTitleHeader', title);
	}
}
