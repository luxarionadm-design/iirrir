import { SocialMathUtils } from './SocialMathUtils.js';

class FeedAttentionFrustum {

	constructor( minEngagement = 2.0, toxicityCutoff = - 0.5 ) {

		FeedAttentionFrustum.prototype.isFeedAttentionFrustum = true;

		this.name = 'FeedAttentionFrustum';
		this.uuid = SocialMathUtils.generateUUID();
		this.minEngagement = minEngagement;
		this.toxicityCutoff = toxicityCutoff;

	}

	containsPoint( point ) {
		return point.z >= this.toxicityCutoff && point.y >= this.minEngagement;
	}

}

export { FeedAttentionFrustum };
