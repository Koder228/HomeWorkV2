let chooseBtn = document.getElementById('choose'),
// в переменную заносится элемент с айди choose
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
// только первый h2
	nameInput = document.getElementsByClassName("contactform_name")[0],
	phoneinput = document.querySelector('.contactform_phone'),
// первый найденый элемент с классом contactform_phone
	mailinput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];









function hover(){
	heading.textContent = "Действительно всех!"
// Меняет HTML текст данной переменной heading
};
function out() {
	heading.textContent = "Все включено"
}

/*heading.addEventListener("mouseenter", hover);
heading.addEventListener("mouseleave", out);*/
heading.addEventListener("click", hover);
heading.addEventListener("dbclick", function() {
	heading.textContent = "Все включено"
});
// при наведение на тег происходит действие - меняется текст как курсор уходит обратно меняется








// для создания модальныъ окон боле простая запись чем выше
receiveBtn.addEventListener("click", function(){

	modal.style.display = "block"

});

close.addEventListener("click", function(){

	modal.style.display = "none"

});






nameInput.addEventListener("input", function(){

	text.value = "Меня Зовут " + nameInput.value + ". и я хочу спросить:";
	if(nameInput.value == ""){
		text.value = ""
	}
});








