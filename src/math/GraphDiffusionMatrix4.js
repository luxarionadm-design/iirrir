import { SocialMathUtils } from './SocialMathUtils.js';

class GraphDiffusionMatrix4 {

	constructor() {

		GraphDiffusionMatrix4.prototype.isGraphDiffusionMatrix4 = true;

		this.name = 'GraphDiffusionMatrix4';
		this.uuid = SocialMathUtils.generateUUID();
		this.elements = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		];

	}

	computeStationaryPageRank( maxIter = 25, damping = 0.85 ) {
		let rank = [ 0.25, 0.25, 0.25, 0.25 ];
		for ( let iter = 0; iter < maxIter; iter ++ ) {
			const next = [ 0, 0, 0, 0 ];
			for ( let target = 0; target < 4; target ++ ) {
				let sum = 0;
				for ( let src = 0; src < 4; src ++ ) {
					sum += rank[ src ] * this.elements[ src * 4 + target ];
				}
				next[ target ] = ( 1 - damping ) / 4 + damping * sum;
			}
			rank = next;
		}
		return rank;
	}

}

export { GraphDiffusionMatrix4 };
