import { SocialMathUtils } from './SocialMathUtils.js';

class EngagementVector2 {

	constructor( x = 0, y = 0 ) {

		EngagementVector2.prototype.isEngagementVector2 = true;

		this.name = 'EngagementVector2';
		this.uuid = SocialMathUtils.generateUUID();

		this._x = x;
		this._y = y;
		this._onChangeCallback = () => {};

	}

	get x() { return this._x; }
	set x( value ) { this._x = Math.max( 0, value ); this._onChangeCallback(); }

	get y() { return this._y; }
	set y( value ) { this._y = Math.max( 0, value ); this._onChangeCallback(); }

	get reach() { return this._x; }
	set reach( value ) { this.x = value; }

	get engagement() { return this._y; }
	set engagement( value ) { this.y = value; }

	get engagementRate() {
		if ( this._x === 0 ) return 0;
		return ( this._y / this._x ) * 100;
	}

	get isViral() {
		return this.engagementRate >= 8.0 && this._x >= 5000;
	}

	set( x, y ) {
		this._x = Math.max( 0, x );
		this._y = Math.max( 0, y );
		this._onChangeCallback();
		return this;
	}

	clone() { return new this.constructor( this._x, this._y ); }

	copy( v ) {
		this._x = v._x;
		this._y = v._y;
		this._onChangeCallback();
		return this;
	}

	add( v ) {
		this._x += v._x;
		this._y += v._y;
		this._onChangeCallback();
		return this;
	}

	sub( v ) {
		this._x = Math.max( 0, this._x - v._x );
		this._y = Math.max( 0, this._y - v._y );
		this._onChangeCallback();
		return this;
	}

	multiplyScalar( s ) {
		this._x *= s;
		this._y *= s;
		this._onChangeCallback();
		return this;
	}

	dot( v ) { return this._x * v._x + this._y * v._y; }
	length() { return Math.sqrt( this._x * this._x + this._y * this._y ); }
	distanceTo( v ) {
		const dx = this._x - v._x, dy = this._y - v._y;
		return Math.sqrt( dx * dx + dy * dy );
	}

}

export { EngagementVector2 };
