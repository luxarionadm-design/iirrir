import { AttentionInterpolant } from '../AttentionInterpolant.js';

class BatchPostingInterpolant extends AttentionInterpolant {

	constructor( scheduleHours = [ 9, 13, 17, 21 ], reachPerBatch = [ 5000, 8000, 12000, 15000 ] ) {

		super( scheduleHours, reachPerBatch );
		BatchPostingInterpolant.prototype.isBatchPostingInterpolant = true;

	}

	evaluate( t ) {
		const pp = this.parameterPositions, val = this.sampleValues;
		if ( t < pp[ 0 ] ) return 0;
		for ( let i = pp.length - 1; i >= 0; i -- ) {
			if ( t >= pp[ i ] ) return val[ i ];
		}
		return 0;
	}

}

export { BatchPostingInterpolant };
