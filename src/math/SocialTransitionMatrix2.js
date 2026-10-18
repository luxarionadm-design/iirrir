import { SocialMathUtils } from './SocialMathUtils.js';

class SocialTransitionMatrix2 {

	constructor() {

		SocialTransitionMatrix2.prototype.isSocialTransitionMatrix2 = true;

		this.name = 'SocialTransitionMatrix2';
		this.uuid = SocialMathUtils.generateUUID();
		this.elements = [ 1, 0, 0, 1 ];

	}

	set( n11, n12, n21, n22 ) {
		this.elements[ 0 ] = n11; this.elements[ 1 ] = n12;
		this.elements[ 2 ] = n21; this.elements[ 3 ] = n22;
		return this;
	}

	identity() { return this.set( 1, 0, 0, 1 ); }

	clone() {
		const m = new this.constructor();
		m.elements = [ ...this.elements ];
		return m;
	}

	multiply( m ) {
		const a = this.elements, b = m.elements;
		const r0 = a[0]*b[0] + a[1]*b[2], r1 = a[0]*b[1] + a[1]*b[3];
		const r2 = a[2]*b[0] + a[3]*b[2], r3 = a[2]*b[1] + a[3]*b[3];
		this.elements = [ r0, r1, r2, r3 ];
		return this;
	}

}

export { SocialTransitionMatrix2 };
