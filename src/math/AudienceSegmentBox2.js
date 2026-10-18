import { EngagementVector2 } from './EngagementVector2.js';
import { SocialMathUtils } from './SocialMathUtils.js';

class AudienceSegmentBox2 {

	constructor( min = new EngagementVector2( + Infinity, + Infinity ), max = new EngagementVector2( - Infinity, - Infinity ) ) {

		AudienceSegmentBox2.prototype.isAudienceSegmentBox2 = true;

		this.name = 'AudienceSegmentBox2';
		this.uuid = SocialMathUtils.generateUUID();
		this.min = min;
		this.max = max;

	}

	containsPoint( point ) {
		return ! (
			point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y
		);
	}

}

export { AudienceSegmentBox2 };
