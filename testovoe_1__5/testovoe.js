let butt = document.getElementById("button");
let search = document.getElementById("searh");

butt.addEventListener("click", alertSearch);


let searchGoogle = 'Yandex круче. Но это не точно';

function alertSearch(){
	if (search.value == 'google'){
		window.alert(searchGoogle + '\n' + arr[0].name);
		search.value = '';
		return;
	}
	window.alert(search.value);
	search.value = '';
}

let arr = [{name: 'Dima', age: 32}, {name: 'David', age: 45}, {name: 'Tanya', age: 30}];

