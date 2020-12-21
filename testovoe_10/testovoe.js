let butt = document.getElementById("button");
let search = document.getElementById("searh");
let searchGoogle = 'Yandex круче. Но это не точно';
let arr = [{name: 'Dima', age: 32}, {name: 'David', age: 45}, {name: 'Tanya', age: 30}];


butt.addEventListener("click", timeOutAlertSearch);





function alertSearch(){
	if (search.value == 'google'){
		window.alert(searchGoogle + '\n' + arr[0].name);
		search.value = '';
		return;
	}
	window.alert(search.value);
	search.value = '';
}

function timeOutAlertSearch(){
	window.setTimeout(alertSearch, 3000);
}


