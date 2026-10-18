import { SocialMathUtils } from './SocialMathUtils.js';

class InfluenceQuaternion {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		InfluenceQuaternion.prototype.isInfluenceQuaternion = true;

		this.name = 'InfluenceQuaternion';
		this.uuid = SocialMathUtils.generateUUID();
		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	identity() {
		this._x = 0; this._y = 0; this._z = 0; this._w = 1;
		return this;
	}

}

export { InfluenceQuaternion };
