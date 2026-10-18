import { SocialMathUtils } from './SocialMathUtils.js';

class SentimentColor {

	constructor( r = 0.5, g = 0.5, b = 0.5 ) {

		SentimentColor.prototype.isSentimentColor = true;

		this.name = 'SentimentColor';
		this.uuid = SocialMathUtils.generateUUID();
		this.r = r;
		this.g = g;
		this.b = b;

	}

	setFromSentimentValence( valence ) {
		const v = SocialMathUtils.clamp( valence, - 1, 1 );
		if ( v < 0 ) {
			// Red tone for negative/hostile
			this.r = 0.8 + 0.2 * ( - v );
			this.g = 0.2 * ( 1 + v );
			this.b = 0.2;
		} else {
			// Green tone for positive
			this.r = 0.2 * ( 1 - v );
			this.g = 0.8 + 0.2 * v;
			this.b = 0.3;
		}
		return this;
	}

}

export { SentimentColor };
