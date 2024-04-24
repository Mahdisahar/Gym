 const observe = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
	// console.log(entry);
	if(entry.isIntersecting) {
		entry.target.classList.add('show');
	} else {
		entry.target.classList.remove('show');
	}
});
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observe.observe(el));


const observebtn = new IntersectionObserver((entriesbtn) => {
    entriesbtn.forEach((entrybtn) => {
        // console.log(entrybtn);
        if (entrybtn.isIntersecting) {
            entrybtn.target.classList.add('showbtn');
        } else {
            entrybtn.target.classList.remove('showbtn');
        }
    });
});

const hiddenBtnElements = document.querySelectorAll('.hiddenbtn');
hiddenBtnElements.forEach((el) => observebtn.observe(el));