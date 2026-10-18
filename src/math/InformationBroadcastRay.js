import { EngagementVector3 } from './EngagementVector3.js';
import { SocialMathUtils } from './SocialMathUtils.js';

class InformationBroadcastRay {

	constructor( origin = new EngagementVector3(), direction = new EngagementVector3( 1, 0, 0 ) ) {

		InformationBroadcastRay.prototype.isInformationBroadcastRay = true;

		this.name = 'InformationBroadcastRay';
		this.uuid = SocialMathUtils.generateUUID();
		this.origin = origin;
		this.direction = direction;

	}

	at( t, target = new EngagementVector3() ) {
		return target.copy( this.direction ).multiplyScalar( t ).add( this.origin );
	}

}

export { InformationBroadcastRay };
