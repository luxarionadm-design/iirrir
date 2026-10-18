import { SocialMathUtils } from './SocialMathUtils.js';

class SocialTriad {

	constructor( edgeAB = 1, edgeBC = 1, edgeCA = 1 ) {

		SocialTriad.prototype.isSocialTriad = true;

		this.name = 'SocialTriad';
		this.uuid = SocialMathUtils.generateUUID();
		this.edgeAB = edgeAB;
		this.edgeBC = edgeBC;
		this.edgeCA = edgeCA;

	}

	get isBalanced() {
		return ( this.edgeAB * this.edgeBC * this.edgeCA ) > 0;
	}

}

export { SocialTriad };
