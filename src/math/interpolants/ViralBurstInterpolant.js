import { AttentionInterpolant } from '../AttentionInterpolant.js';
import { SocialMathUtils } from '../SocialMathUtils.js';

class ViralBurstInterpolant extends AttentionInterpolant {

	constructor( peakHour = 12, maxReach = 100000, steepness = 0.5 ) {

		super();
		ViralBurstInterpolant.prototype.isViralBurstInterpolant = true;
		this.peakHour = peakHour;
		this.maxReach = maxReach;
		this.steepness = steepness;

	}

	evaluate( t ) {
		const exp = - this.steepness * ( t - this.peakHour );
		return this.maxReach / ( 1 + Math.exp( exp ) );
	}

}

export { ViralBurstInterpolant };
