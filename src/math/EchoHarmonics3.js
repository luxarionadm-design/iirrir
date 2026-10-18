import { SocialMathUtils } from './SocialMathUtils.js';

class EchoHarmonics3 {

	constructor() {

		EchoHarmonics3.prototype.isEchoHarmonics3 = true;

		this.name = 'EchoHarmonics3';
		this.uuid = SocialMathUtils.generateUUID();
		this.coefficients = new Array( 9 ).fill( 0 );

	}

}

export { EchoHarmonics3 };
