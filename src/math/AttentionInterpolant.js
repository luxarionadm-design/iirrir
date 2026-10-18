import { SocialMathUtils } from './SocialMathUtils.js';

class AttentionInterpolant {

	constructor( parameterPositions = [ 0, 10, 30, 60 ], sampleValues = [ 100, 80, 50, 20 ] ) {

		AttentionInterpolant.prototype.isInterpolant = true;
		AttentionInterpolant.prototype.isAttentionInterpolant = true;

		this.name = 'AttentionInterpolant';
		this.uuid = SocialMathUtils.generateUUID();
		this.parameterPositions = parameterPositions;
		this.sampleValues = sampleValues;

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

export { AttentionInterpolant };
