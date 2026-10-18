import { SocialMathUtils } from './SocialMathUtils.js';

class CommunitySpherical {

	constructor( radius = 1.0, phi = 0, theta = 0 ) {

		CommunitySpherical.prototype.isCommunitySpherical = true;

		this.name = 'CommunitySpherical';
		this.uuid = SocialMathUtils.generateUUID();
		this.radius = radius;
		this.phi = phi;
		this.theta = theta;

	}

}

export { CommunitySpherical };
