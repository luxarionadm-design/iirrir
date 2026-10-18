import { AttentionInterpolant } from '../AttentionInterpolant.js';
import { SocialMathUtils } from '../SocialMathUtils.js';

class AudienceRetentionInterpolant extends AttentionInterpolant {

	constructor( parameterPositions = [ 0, 5, 15, 30, 60 ], sampleValues = [ 100, 85, 70, 50, 30 ] ) {

		super( parameterPositions, sampleValues );
		AudienceRetentionInterpolant.prototype.isAudienceRetentionInterpolant = true;

	}

	evaluate( t ) {
		const pp = this.parameterPositions, val = this.sampleValues;
		if ( t <= pp[ 0 ] ) return val[ 0 ];
		if ( t >= pp[ pp.length - 1 ] ) return val[ val.length - 1 ];
		let i = 1;
		while ( i < pp.length && pp[ i ] < t ) i ++;
		const alpha = ( t - pp[ i - 1 ] ) / ( pp[ i ] - pp[ i - 1 ] );
		const smoothAlpha = alpha * alpha * ( 3 - 2 * alpha );
		return SocialMathUtils.lerp( val[ i - 1 ], val[ i ], smoothAlpha );
	}

}

export { AudienceRetentionInterpolant };
