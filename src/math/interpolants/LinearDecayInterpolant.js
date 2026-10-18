import { AttentionInterpolant } from '../AttentionInterpolant.js';
import { SocialMathUtils } from '../SocialMathUtils.js';

class LinearDecayInterpolant extends AttentionInterpolant {

	constructor( parameterPositions = [ 0, 24, 48 ], sampleValues = [ 100, 50, 0 ] ) {

		super( parameterPositions, sampleValues );
		LinearDecayInterpolant.prototype.isLinearDecayInterpolant = true;

	}

}

export { LinearDecayInterpolant };
