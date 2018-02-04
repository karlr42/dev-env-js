const app = require("./devenv.js");


describe("hello world", function() {
	it("returns correct string complicatedly", (done) => {
		app.helloWorld((res) => {
			console.log(res);
			assert.equal("Hello World!", res);
			done();
		}, (err) => {
			console.error(err);
			done(err);
		})
	});

	it("returns correct string simply", () => {
		let res = app.helloWorldSimple();
		assert.equal("Hello World!", res);
	});
});