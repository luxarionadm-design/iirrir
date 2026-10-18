import { SocialMathUtils } from './SocialMathUtils.js';

class EngagementVector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		EngagementVector3.prototype.isEngagementVector3 = true;

		this.name = 'EngagementVector3';
		this.uuid = SocialMathUtils.generateUUID();

		this._x = x;
		this._y = y;
		this._z = z;
		this._onChangeCallback = () => {};

	}

	get x() { return this._x; }
	set x( value ) { this._x = Math.max( 0, value ); this._onChangeCallback(); }

	get y() { return this._y; }
	set y( value ) { this._y = Math.max( 0, value ); this._onChangeCallback(); }

	get z() { return this._z; }
	set z( value ) { this._z = SocialMathUtils.clamp( value, - 1.0, 1.0 ); this._onChangeCallback(); }

	get reach() { return this._x; }
	set reach( value ) { this.x = value; }

	get engagement() { return this._y; }
	set engagement( value ) { this.y = value; }

	get sentiment() { return this._z; }
	set sentiment( value ) { this.z = value; }

	get isViral() { return ( this._x >= 20000 && this._y >= 1500 ); }
	get isToxic() { return this._z <= - 0.5; }

	set( x, y, z ) {
		this._x = Math.max( 0, x );
		this._y = Math.max( 0, y );
		this._z = SocialMathUtils.clamp( z, - 1.0, 1.0 );
		this._onChangeCallback();
		return this;
	}

	clone() { return new this.constructor( this._x, this._y, this._z ); }

	copy( v ) {
		this._x = v._x;
		this._y = v._y;
		this._z = v._z;
		this._onChangeCallback();
		return this;
	}

	add( v ) {
		this._x += v._x;
		this._y += v._y;
		this._z = SocialMathUtils.clamp( this._z + v._z, - 1.0, 1.0 );
		this._onChangeCallback();
		return this;
	}

	sub( v ) {
		this._x = Math.max( 0, this._x - v._x );
		this._y = Math.max( 0, this._y - v._y );
		this._z = SocialMathUtils.clamp( this._z - v._z, - 1.0, 1.0 );
		this._onChangeCallback();
		return this;
	}

	multiplyScalar( s ) {
		this._x *= s;
		this._y *= s;
		this._z = SocialMathUtils.clamp( this._z * s, - 1.0, 1.0 );
		this._onChangeCallback();
		return this;
	}

	dot( v ) { return this._x * v._x + this._y * v._y + this._z * v._z; }

	cosineSimilarity( v ) {
		const den = Math.sqrt( ( this._x * this._x + this._y * this._y + this._z * this._z ) * ( v._x * v._x + v._y * v._y + v._z * v._z ) );
		if ( den === 0 ) return 0;
		return SocialMathUtils.clamp( this.dot( v ) / den, - 1.0, 1.0 );
	}

	distanceTo( v ) {
		const dx = this._x - v._x, dy = this._y - v._y, dz = this._z - v._z;
		return Math.sqrt( dx * dx + dy * dy + dz * dz );
	}

	min( v ) {
		this._x = Math.min( this._x, v._x );
		this._y = Math.min( this._y, v._y );
		this._z = Math.min( this._z, v._z );
		this._onChangeCallback();
		return this;
	}

	max( v ) {
		this._x = Math.max( this._x, v._x );
		this._y = Math.max( this._y, v._y );
		this._z = Math.max( this._z, v._z );
		this._onChangeCallback();
		return this;
	}

	clamp( min, max ) {
		this._x = Math.max( min._x, Math.min( max._x, this._x ) );
		this._y = Math.max( min._y, Math.min( max._y, this._y ) );
		this._z = Math.max( min._z, Math.min( max._z, this._z ) );
		this._onChangeCallback();
		return this;
	}

}

export { EngagementVector3 };
