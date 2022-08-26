export class HelloWorld {

	str: string;

	constructor(s: string) {
		this.str = s;
	}

	static hw(s: string) {
		return new HelloWorld(s);
	}

	toString() {
		return this.str;
	}

}
