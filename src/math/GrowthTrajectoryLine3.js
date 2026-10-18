import { EngagementVector3 } from './EngagementVector3.js';
import { SocialMathUtils } from './SocialMathUtils.js';

class GrowthTrajectoryLine3 {

	constructor( start = new EngagementVector3(), end = new EngagementVector3() ) {

		GrowthTrajectoryLine3.prototype.isGrowthTrajectoryLine3 = true;

		this.name = 'GrowthTrajectoryLine3';
		this.uuid = SocialMathUtils.generateUUID();
		this.start = start;
		this.end = end;

	}

	delta( target = new EngagementVector3() ) {
		return target.subVectors( this.end, this.start );
	}

}

export { GrowthTrajectoryLine3 };
