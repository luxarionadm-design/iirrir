import { FeedAttentionFrustum } from './FeedAttentionFrustum.js';
import { SocialMathUtils } from './SocialMathUtils.js';

class MultiFeedFrustumArray {

	constructor( frustums = [ new FeedAttentionFrustum(), new FeedAttentionFrustum( 1.0, - 0.2 ) ] ) {

		MultiFeedFrustumArray.prototype.isMultiFeedFrustumArray = true;

		this.name = 'MultiFeedFrustumArray';
		this.uuid = SocialMathUtils.generateUUID();
		this.frustums = frustums;

	}

	filterPosts( posts ) {
		return posts.filter( p => this.frustums.some( f => f.containsPoint( p ) ) );
	}

}

export { MultiFeedFrustumArray };
