// ANIMATION FOR THE HERO TITLE
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

// ANIMATION FOR THE BUTTONS IN THE HERO SECTION
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

// ANIMATION FOR THE TITLE IN THE CLUB SECTION

const clubObservation = new IntersectionObserver((club) => {
	club.forEach((entrClub) => {
		if(entrClub.isIntersecting) {
			entrClub.target.classList.add('showclub');
		} else {
			entrClub.target.classList.remove('showclub');
		}
	});
});

const hiddenClubElement = document.querySelectorAll('.club-hidden');
hiddenClubElement.forEach((el) => clubObservation.observe(el));

// ANIMATION FOR THE FLEX 
const sportClubObservation = new IntersectionObserver((clubs) => {
	clubs.forEach((selectClub) => {
		if(selectClub.isIntersecting) {
			selectClub.target.classList.add('showSportClub');
		} else {
			selectClub.target.classList.remove('showSportClub');
		}
	});
});

const hiddenSportClubsElement = document.querySelectorAll('.clubshidden');
hiddenSportClubsElement.forEach((el)=> sportClubObservation.observe(el));


// THIRD SECTION ACTIVITY SECTION

const activeTitleElement = new IntersectionObserver((activeTitle) => {
	activeTitle.forEach((active) => {
		if(active.isIntersecting) {
			active.target.classList.add('showActive');
		} else {
			active.target.classList.remove('showActive');
		}
	});
});

const activeElement = document.querySelectorAll('.hiddentitle');
activeElement.forEach((el) => activeTitleElement.observe(el));