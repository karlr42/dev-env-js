const request = require("request");

let helloWorld = function(cb, errCb){
	const url = "https://gist.githubusercontent.com/karlr42/149d3af0e4cf82d3144066a91b67cd99/raw/0c379bf747622932e609c124b43fab6d63fe5435/devenv.json";
	request(url, (err, response, body) => {
		if(err){
			errCb(err);
			return;
		}
		let data;
		try{
			data = JSON.parse(body);
		}catch(e){
			errCb(e);
			return;
		}
		let str = data.data;
		str = Buffer.from(str, "base64").toString();
		cb(str);
	});
};

let helloWorldSimple = function(){
	return "Hello World!";
};

module.exports = {helloWorld, helloWorldSimple};