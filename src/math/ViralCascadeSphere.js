import { EngagementVector3 } from './EngagementVector3.js';
import { SocialMathUtils } from './SocialMathUtils.js';

class ViralCascadeSphere {

	constructor( center = new EngagementVector3(), radius = 0, reproductionRate = 1.0 ) {

		ViralCascadeSphere.prototype.isViralCascadeSphere = true;

		this.name = 'ViralCascadeSphere';
		this.uuid = SocialMathUtils.generateUUID();
		this.center = center;
		this.radius = radius;
		this.reproductionRate = reproductionRate;

	}

	get isSuperSpreader() { return this.reproductionRate >= 1.5; }

	containsPoint( point ) {
		return point.distanceTo( this.center ) <= this.radius;
	}

}

export { ViralCascadeSphere };
