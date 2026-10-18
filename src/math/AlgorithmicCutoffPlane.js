import { EngagementVector3 } from './EngagementVector3.js';
import { SocialMathUtils } from './SocialMathUtils.js';

class AlgorithmicCutoffPlane {

	constructor( normal = new EngagementVector3( 0, 0, 1 ), constant = - 0.5 ) {

		AlgorithmicCutoffPlane.prototype.isAlgorithmicCutoffPlane = true;

		this.name = 'AlgorithmicCutoffPlane';
		this.uuid = SocialMathUtils.generateUUID();
		this.normal = normal;
		this.constant = constant;

	}

	distanceToPoint( point ) {
		return point.dot( this.normal ) + this.constant;
	}

	isAboveCutoff( point ) {
		return this.distanceToPoint( point ) >= 0;
	}

}

export { AlgorithmicCutoffPlane };
