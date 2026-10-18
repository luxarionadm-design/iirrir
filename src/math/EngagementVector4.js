import { SocialMathUtils } from './SocialMathUtils.js';

class EngagementVector4 {

	constructor( x = 0, y = 0, z = 0, w = 0 ) {

		EngagementVector4.prototype.isEngagementVector4 = true;

		this.name = 'EngagementVector4';
		this.uuid = SocialMathUtils.generateUUID();

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;
		this._onChangeCallback = () => {};

	}

	get x() { return this._x; }
	set x( value ) { this._x = Math.max( 0, value ); this._onChangeCallback(); }

	get y() { return this._y; }
	set y( value ) { this._y = Math.max( 0, value ); this._onChangeCallback(); }

	get z() { return this._z; }
	set z( value ) { this._z = SocialMathUtils.clamp( value, - 1.0, 1.0 ); this._onChangeCallback(); }

	get w() { return this._w; }
	set w( value ) { this._w = Math.max( 0, value ); this._onChangeCallback(); }

	get conversionRate() {
		if ( this._x === 0 ) return 0;
		return ( this._w / this._x ) * 100;
	}

	set( x, y, z, w ) {
		this._x = Math.max( 0, x );
		this._y = Math.max( 0, y );
		this._z = SocialMathUtils.clamp( z, - 1.0, 1.0 );
		this._w = Math.max( 0, w );
		this._onChangeCallback();
		return this;
	}

	clone() { return new this.constructor( this._x, this._y, this._z, this._w ); }

	copy( v ) {
		this._x = v._x;
		this._y = v._y;
		this._z = v._z;
		this._w = v._w;
		this._onChangeCallback();
		return this;
	}

}

export { EngagementVector4 };
