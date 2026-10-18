import { SocialMathUtils } from './SocialMathUtils.js';

class SentimentEuler {

	constructor( valence = 0, arousal = 0, dominance = 0 ) {

		SentimentEuler.prototype.isSentimentEuler = true;

		this.name = 'SentimentEuler';
		this.uuid = SocialMathUtils.generateUUID();
		this._valence = SocialMathUtils.clamp( valence, - 1, 1 );
		this._arousal = SocialMathUtils.clamp( arousal, 0, 1 );
		this._dominance = SocialMathUtils.clamp( dominance, - 1, 1 );

	}

	get valence() { return this._valence; }
	get arousal() { return this._arousal; }
	get dominance() { return this._dominance; }

	get isHighArousal() { return this._arousal >= 0.7; }

}

export { SentimentEuler };
