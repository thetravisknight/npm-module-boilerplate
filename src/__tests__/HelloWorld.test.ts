import { hw } from '../index';
test('HelloWorld', () => {
	expect(hw("Hello World").toString()).toBe("Hello World");
});
