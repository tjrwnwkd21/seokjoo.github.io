var promise = function (text) {
		// 비동기를 표현하기 위해 setTimeout 함수를 사용 
	window.setTimeout(function () {
		if (text == 'hello'){
			readTextFile("./txt_hello.txt");
		}
		else if (text == 'name'){
			readTextFile("./txt_name.txt");
		}
		else readTextFile("./txt_bye.txt");
	}, 3000);
};

function readTextFile(file) {
    var rawFile = new XMLHttpRequest(); 
    rawFile.open("GET", file, false); 
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    };
    rawFile.send(null);
}


function fnc(work){
	switch(work){

		case 'callback' :
			readTextFile("./txt_hello.txt");
			fnc('callback2');	
			break;

		case 'callback2' :
			readTextFile("./txt_name.txt");			
			fnc('callback3');
			break;

		case 'callback3' :
			readTextFile("./txt_bye.txt");			
			break;


		case 'promise' :
			promise('hello')
			.then(promise('name'))
			.then(promise('bye'));
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