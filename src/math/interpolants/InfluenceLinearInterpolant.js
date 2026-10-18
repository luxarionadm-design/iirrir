import { AttentionInterpolant } from '../AttentionInterpolant.js';
import { SocialMathUtils } from '../SocialMathUtils.js';

class InfluenceLinearInterpolant extends AttentionInterpolant {

	constructor( parameterPositions = [ 0, 7, 30 ], sampleValues = [ 0.2, 0.6, 0.9 ] ) {

		super( parameterPositions, sampleValues );
		InfluenceLinearInterpolant.prototype.isInfluenceLinearInterpolant = true;

	}

	evaluate( t ) {
		const pp = this.parameterPositions, val = this.sampleValues;
		if ( t <= pp[ 0 ] ) return val[ 0 ];
		if ( t >= pp[ pp.length - 1 ] ) return val[ val.length - 1 ];
		let i = 1;
		while ( i < pp.length && pp[ i ] < t ) i ++;
		const alpha = ( t - pp[ i - 1 ] ) / ( pp[ i ] - pp[ i - 1 ] );
		return SocialMathUtils.lerp( val[ i - 1 ], val[ i ], alpha );
	}

}

export { InfluenceLinearInterpolant };
