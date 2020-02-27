const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// Js for mobile view Animation

if (window.screen.width < 440) {
	const inForm = document.getElementById('in');
	const upForm = document.getElementById('up');

	signUpButton.addEventListener('click', () => {
		if (upForm.classList.contains('no')) {
			upForm.classList.remove('no');
		setTimeout(function () {
			upForm.classList.remove('visual-hidden');
		}, 20);
		} else {
			upForm.classList.add('visual-hidden');    
			upForm.addEventListener('transitionend', function(e) {
				upForm.classList.add('no');
		}, {
			capture: false,
			once: true,
			passive: false
		});
		}

	}, false);

	signInButton.addEventListener('click', () => {


		if (inForm.classList.contains('no')) {
			inForm.classList.remove('no');
			setTimeout(function () {
			inForm.classList.remove('visual-hidden');
			}, 20);
		} else {
			inForm.classList.add('visual-hidden');    
			inForm.addEventListener('transitionend', function(e) {
				inForm.classList.add('no');
			}, {
			capture: false,
			once: true,
			passive: false
			});
		}
			
	}, false);
}