
var promise = function (param) {
    return new Promise(function (resolve, reject) {
        if (param) {
            resolve("finish!");
        } else {
            reject(Error("error called"));
        }
    });
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

function call_promise(text){
	if (text == 'hello'){
		readTextFile("./txt_hello.txt");
	}
	else if (text == 'name'){
		readTextFile("./txt_name.txt");
	}
	else readTextFile("./txt_bye.txt");
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
			promise(true)
				.then(call_promise('hello'))
				.then(call_promise('name'))
				.then(call_promise('bye'));
			break;
		
		
	
		case 'async' :
			async function fnc_async(){
				await readTextFile("./txt_hello.txt");
				await readTextFile("./txt_name.txt");
				await readTextFile("./txt_bye.txt");
			}
			break;
	}

}