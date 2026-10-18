import { SocialMathUtils } from './SocialMathUtils.js';

const SentimentColorManagement = {

	normalizeScale: function ( rawScore, minRaw = 0, maxRaw = 5 ) {
		// Normalizes arbitrary scale to [-1, 1] standard sentiment range
		const normalized = ( rawScore - minRaw ) / ( maxRaw - minRaw );
		return SocialMathUtils.clamp( normalized * 2 - 1, - 1, 1 );
	}

};

export { SentimentColorManagement };
