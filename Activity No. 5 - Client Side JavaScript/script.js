const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

const menuBar = document.querySelector('#content nav .fa.fa-bars');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .fa');
const searchForm = document.querySelector('#content nav form');

	searchButton.addEventListener('click', function (e) {
		if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('fa-search', 'fa-times');
		} else {
			searchButtonIcon.classList.replace('fa-times', 'fa-search');
		}

	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
}else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('fa-times', 'fa-search');
	searchForm.classList.remove('show');
}

window.addEventListener('resize' , function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('fa-times', 'fa-search');
		searchForm.classList.remove('show');
	}
})

document.getElementById("buy-now").onclick = function () {
    location.href = "Thanks for buying.html";
};
document.getElementById("buy-now-1").onclick = function () {
    location.href = "Thanks for buying.html";
};
document.getElementById("buy-now-2").onclick = function () {
    location.href = "Thanks for buying.html";
};
document.getElementById("buy-now-3").onclick = function () {
    location.href = "Thanks for buying.html";
};
document.getElementById("buy-now-4").onclick = function () {
    location.href = "Thanks for buying.html";
};
document.getElementById("buy-now-5").onclick = function () {
    location.href = "Thanks for buying.html";
};
document.getElementById("buy-now-6").onclick = function () {
    location.href = "Thanks for buying.html";
};
document.getElementById("buy-now-7").onclick = function () {
    location.href = "Thanks for buying.html";
};




