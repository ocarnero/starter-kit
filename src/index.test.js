import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
	it('should say hello', (done) => {
		const dom = new JSDOM(fs.readFileSync('./src/index.html', "utf-8"));		
		const h1 = dom.window.document.getElementsByTagName('h1')[0];
		expect(h1.innerHTML).to.equal("Hello world");
		done();
		window.close();
  });
});