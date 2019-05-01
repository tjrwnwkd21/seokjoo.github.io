var _promise = function (param) {

	return new Promise(function (resolve, reject) {

		// 비동기를 표현하기 위해 setTimeout 함수를 사용 
		window.setTimeout(function () {

			// 파라메터가 참이면, 
			if (param) {

				// 해결됨 
				resolve("해결 완료");
			}

			// 파라메터가 거짓이면, 
			else {

				// 실패 
				reject(Error("실패!"));
			}
		}, 3000);
	});
};

//Promise 실행





function fnc(work){
	switch(work){
		case 'callback' :
			_promise(true)
			.then(function (text) {
				// 성공시
				console.log(text);
			}, function (error) {
				// 실패시 
				console.error(error);
			});
			break;
		

			
		case 'promise' :
			_promise(true)
			.then(function (text) {
				// 성공시
				console.error(error);
				
			}, function (error) {
				// 실패시 
				console.log(text);
			});
			break;
		
		
	
		case 'async' :
			_promise(true)
			.then(function (text) {
				// 성공시
				console.log(text);
			}, function (error) {
				// 실패시 
				console.error(error);
			});
			break;
	}

}