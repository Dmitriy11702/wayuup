// var name =35;
// var surname ='Привет';
// var age = true;
// var height = 45;

// // a=456;

// // a=prompt('Напишите значение переменной а');

// // if( a==36){
// // 	alert('a = 36');
// // }
// // else{
// // 	alert('Что-то другое');
// // }

// // for (var i=0; i<5; i++) {
// // 	alert(i);

// // }

// var obj={
// 	'key': 'value',
// 	'key': 'value',
// 	'key': 'value',
// 	'key': 'value'
// }

// // var user ={
// // 	'name': 'Petya',
// // 	'surname': 'Vasechkin',
// // 	'age': 25
// // }

// // alert( user.age );

// // var mas=['Петья', 'Васечкин', 25];
// // alert( mas[2])


// function doMagic (a,b){
// 	alert( a+b);
// }

// doMagic(7,5);

// var btn = document.getElementById('btn');
// btn.onclick = function	() {

// 	var text = document.querySelector('p.intro');
// 	text.classList.add('red');
// 	var img = document.querySelector('.desktop');
// 	img.style.display = 'none';
// 	document.querySelector('.title-icons').style.marginLeft = '50px';
// }


$(function () {
	$(window).scroll(function() {
	    $('#vpered .ic-title, .flex-title-icons').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});

			$(window).scroll(function() {
	    $('#vpered .beach, .time, .launch').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInLeft");
	        }
	    });
	});
						$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInLeft");
	        }
	    });
	});
	})

