export default class AtualizaColorHeader {
	static atualizar(store: any, color: string) {
		store.commit('colorHeader/setColorHeader', color);
	}
}
