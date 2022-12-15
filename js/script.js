import data from '../data.json' assert { type: 'json' };

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav__link');

const handleContent = () => {
	sections.forEach((section, index) => {
		const title = section.querySelector('.section__title');
		const time = section.querySelector('.section__time');
		const timeLastWeek = section.querySelector('.section__last-week');
		const activeLink = document.querySelector('.active');

		title.textContent = data[index].title;

		if (activeLink.textContent.toLowerCase() === 'weekly') {
			time.textContent = `${data[index].timeframes.weekly.current}hrs`;
			timeLastWeek.textContent = `${data[index].timeframes.weekly.previous}hrs`;
		} else if (activeLink.textContent.toLowerCase() === 'daily') {
			time.textContent = `${data[index].timeframes.daily.current}hrs`;
			timeLastWeek.textContent = `${data[index].timeframes.daily.previous}hrs`;
		} else if (activeLink.textContent.toLowerCase() === 'monthly') {
			time.textContent = `${data[index].timeframes.monthly.current}hrs`;
			timeLastWeek.textContent = `${data[index].timeframes.monthly.previous}hrs`;
		}
	});
};

window.addEventListener('DOMContentLoaded', handleContent);
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.forEach((link) => {
			link.classList.remove('active');
		});
		link.classList.add('active');
		handleContent();
	});
});
