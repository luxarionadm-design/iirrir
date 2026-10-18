import { EngagementVector3 } from './EngagementVector3.js';
import { SocialMathUtils } from './SocialMathUtils.js';

class FilterBubbleBox3 {

	constructor( min = new EngagementVector3( + Infinity, + Infinity, + Infinity ), max = new EngagementVector3( - Infinity, - Infinity, - Infinity ) ) {

		FilterBubbleBox3.prototype.isFilterBubbleBox3 = true;

		this.name = 'FilterBubbleBox3';
		this.uuid = SocialMathUtils.generateUUID();
		this.min = min;
		this.max = max;

	}

	get isRadicalized() {
		return ( this.max.z < - 0.5 || this.min.z > 0.5 );
	}

	containsPoint( point ) {
		return ! (
			point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ||
			point.z < this.min.z || point.z > this.max.z
		);
	}

}

export { FilterBubbleBox3 };
