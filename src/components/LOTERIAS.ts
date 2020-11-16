import { throws } from 'assert';

export const LOTERIAS = {
	tipos: ['MEGASENA', 'LOTOFACIL'],
	MEGASENA: {
		tpLoteria: 'MEGASENA',
		color: 'green-5',
		bgColor: 'bg-megasena',
		uri: '/megasena',
		posicoes: [
			{ posicao: '01ª' },
			{ posicao: '02ª' },
			{ posicao: '03ª' },
			{ posicao: '04ª' },
			{ posicao: '05ª' },
			{ posicao: '06ª' }
		],
		dezenas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
			31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60
		]
	},
	LOTOFACIL: {
		tpLoteria: 'LOTOFACIL',
		color: 'accent',
		bgColor: 'bg-lotofacil',
		uri: '/lotofacil',
		posicoes: [
			{ posicao: '01ª' },
			{ posicao: '02ª' },
			{ posicao: '03ª' },
			{ posicao: '04ª' },
			{ posicao: '05ª' },
			{ posicao: '06ª' },
			{ posicao: '07ª' },
			{ posicao: '08ª' },
			{ posicao: '09ª' },
			{ posicao: '10ª' },
			{ posicao: '11ª' },
			{ posicao: '12ª' },
			{ posicao: '13ª' },
			{ posicao: '14ª' },
			{ posicao: '15ª' }
		],
		dezenas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
	},

	getDezenasOrdemConcurso(tpLoteria: string, concurso: any): any [] {

		const dezenas = [];

		dezenas.push(concurso.prDezena);
		dezenas.push(concurso.seDezena);
		dezenas.push(concurso.teDezena);
		dezenas.push(concurso.qaDezena);
		dezenas.push(concurso.qiDezena);
		dezenas.push(concurso.sxDezena);

		if (tpLoteria.toUpperCase().includes('LOTOFACIL')) {
			dezenas.push(concurso.stDezena);
			dezenas.push(concurso.otDezena);
			dezenas.push(concurso.noDezena);
			dezenas.push(concurso.dcDezena);
			dezenas.push(concurso.dprDezena);
			dezenas.push(concurso.dseDezena);
			dezenas.push(concurso.dteDezena);
			dezenas.push(concurso.dqaDezena);
			dezenas.push(concurso.dqiDezena);
		}

		return dezenas;
	},

	getDezenasOrdenadas(tpLoteria: string, concurso: any): any [] {
		const dezenas = this.getDezenasOrdemConcurso(tpLoteria, concurso);
		dezenas.sort((a, b) => a < b ? -1 : 1);

		return dezenas;
	},

	getType(tpLoteria: string) {
		switch (tpLoteria.toUpperCase()) {
			case 'MEGASENA':
				return this.MEGASENA;

			case 'LOTOFACIL':
				return this.LOTOFACIL;

			default:
				throw new Error('Tipo loteria inexistente ' + tpLoteria);
		}
	}
};

