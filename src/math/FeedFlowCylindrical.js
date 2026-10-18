import { SocialMathUtils } from './SocialMathUtils.js';

class FeedFlowCylindrical {

	constructor( radius = 1.0, theta = 0, y = 0 ) {

		FeedFlowCylindrical.prototype.isFeedFlowCylindrical = true;

		this.name = 'FeedFlowCylindrical';
		this.uuid = SocialMathUtils.generateUUID();
		this.radius = radius;
		this.theta = theta;
		this.y = y;

	}

}

export { FeedFlowCylindrical };
