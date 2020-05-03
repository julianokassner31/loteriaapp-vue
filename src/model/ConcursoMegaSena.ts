export interface ConcursoMegaSena {
	acumulado: boolean;
	cidades: Array<string>;
	dtSorteio: Date;
	id: number;
	idConcurso: number;
	nrGanhadoresQuadra: number;
	nrGanhadoresQuina: number;
	nrGanhadoresSena: number;
	prDezena: number;
	qaDezena: number;
	qiDezena: number;
	seDezena: number;
	sxDezena: number;
	teDezena: number;
	vlAcumulado: number;
	vlAcumuladoMegaVirada: number;
	vlArrecadacaoTotal: number;
	vlEstimativaPremio: number;
	vlRateioQuadra: number;
	vlRateioQuina: number;
	vlRateioSena: number;
}
