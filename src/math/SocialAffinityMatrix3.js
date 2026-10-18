import { SocialMathUtils } from './SocialMathUtils.js';

class SocialAffinityMatrix3 {

	constructor() {

		SocialAffinityMatrix3.prototype.isSocialAffinityMatrix3 = true;

		this.name = 'SocialAffinityMatrix3';
		this.uuid = SocialMathUtils.generateUUID();
		this.elements = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];

	}

	identity() {
		this.elements = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		return this;
	}

	get( i, j ) { return this.elements[ i * 3 + j ]; }
	set( i, j, val ) { this.elements[ i * 3 + j ] = val; return this; }

	multiply( m ) {
		const a = this.elements, b = m.elements, r = new Array( 9 ).fill( 0 );
		for ( let i = 0; i < 3; i ++ ) {
			for ( let j = 0; j < 3; j ++ ) {
				for ( let k = 0; k < 3; k ++ ) {
					r[ i * 3 + j ] += a[ i * 3 + k ] * b[ k * 3 + j ];
				}
			}
		}
		this.elements = r;
		return this;
	}

}

export { SocialAffinityMatrix3 };
