var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var uno = document.querySelectorAll('.book');
var portada = document.querySelector('#portada');


portada.addEventListener('mouseenter',(e)=>{
	flip.classList.remove("trnsf-reset");
	flip.classList.add("trnsf");
})
portada.addEventListener('mouseleave',(e)=>{
	
})



var todoFace_Front = document.querySelectorAll('.face-front');
for (var i = 0; i < todoFace_Front.length; i++) {

	todoFace_Front[i].addEventListener('mouseenter',(e)=>{
		e.target.querySelector('.cambiarHoja').classList.remove('ocultar')
	})
	todoFace_Front[i].addEventListener('mouseleave',(e)=>{
		e.target.querySelector('.cambiarHoja').classList.add('ocultar')
	})
}

var todoFace_back = document.querySelectorAll('.face-back');
for (var i = 0; i < todoFace_back.length; i++) {
	todoFace_back[i].addEventListener('mouseenter',(e)=>{
		e.target.querySelector('.cambiarHoja').classList.remove('ocultar')
	})
	todoFace_back[i].addEventListener('mouseleave',(e)=>{
		e.target.querySelector('.cambiarHoja').classList.add('ocultar')
	})
}


var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
	uno[i].style.zIndex = customZindex;
	customZindex--;

	uno[i].addEventListener('click', function(e){

		var tgt = e.target;
		var unoThis = this;
		unoThis.style.zIndex = contZindex;
		contZindex++;

		if (tgt.classList.contains('pag_sig')|tgt.classList.contains('btn-pag_sig')|tgt.classList.contains('txt-pag_siguiente')) {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 500);
		}
		if (tgt.classList.contains('pag_ant')|tgt.classList.contains('btn-pag_ant')|tgt.classList.contains('txt-pag_ant')) {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;

			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 500);

			

			
		}


	});
}

