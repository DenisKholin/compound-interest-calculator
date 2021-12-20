function createGraphic() {
	if (document.querySelector('.grid__wrapper')) {
		document.querySelector('.grid__wrapper').remove();
	}

	document.getElementById("y1").innerHTML = '';
	let depositV = document.getElementById("deposit").value,
		depositVint = parseInt(depositV, 10),
		deposArray = [],
		deposPerscentArray = [],
		interestV = document.getElementById("inRate").value,
		interestVint = parseInt(interestV, 10),
		monthV = document.getElementById("inMonth").value,
		monthVint = parseInt(monthV, 10),
		now = new Date(),
		monthNumber = now.getMonth(),
		month,
		gridContainer,
		i = 1,
		percent = 100,
		windowWidth = window.outerWidth;
	console.log(windowWidth);

	document.querySelector('#y1').insertAdjacentHTML('beforebegin', `	<div class="grid__wrapper"></div>`);

	document.querySelector('.grid__wrapper').insertAdjacentHTML('afterbegin', `<div class="grid__header">
		<p class="grid__header_text grid__header_text-big">Нарощена сума</p>
		<p class="grid__header_text grid__header_text-small">Щомісячно</p>
	</div>`);

	document.querySelector('.grid__header').insertAdjacentHTML('afterend', `<div class="grid__wrapper_inner">
		<div class="grid__container-month"></div>
	</div>`)

	document.querySelector('.grid__container-month').insertAdjacentHTML('afterend', `	<div class="grid__container"></div>`);

	gridContainer = document.querySelector('.grid__container');


	if (window.matchMedia('(max-width: 1120px)').matches) {
		gridContainer.style.gridTemplateColumns = `repeat(${monthVint}, 56px)`;
		gridContainer.style.width = `${windowWidth - 50}px`;
	} else {
		gridContainer.style.gridTemplateColumns = `repeat(${monthVint}, 86px)`;
	}



	for (i; i <= monthVint; i++) {
		var result = depositVint / 100 * interestVint;
		depositVint = depositVint + result;
		deposArray[i] = +depositVint.toFixed(2);
	}

	for (let i = 1; i < deposArray.length; i++) {
		deposPerscentArray[i] = Math.round((deposArray[i] * 10 / deposArray[deposArray.length - 1]));
	}

	for (let i = 1; i <= 11; i++) {
		document.querySelector('.grid__container-month').innerHTML += `<div class="grid__text grid__text_percent" style="grid-row: ${i}/${i + 2}; grid-column: 1/3">${percent}%</div>`;
		percent -= 10;
	}

	for (let i = 1; i < deposPerscentArray.length; i++) {
		gridContainer.innerHTML += `<div class="grid__container_item" data-gridnumber="${i}" style="grid-row: ${11 - deposPerscentArray[i]}/12; grid-column: ${i}/${i + 2}">
		</div>`;
		monthNumber += 1;

		if (monthNumber >= 12) {
			monthNumber = 0;
		}

		switch (monthNumber) {
			case 0:
				month = 'Січень';
				break;
			case 1:
				month = 'Лютий';
				break;
			case 2:
				month = 'Березень';
				break;
			case 3:
				month = 'Квітень';
				break;
			case 4:
				month = 'Травень';
				break;
			case 5:
				month = 'Червень';
				break;
			case 6:
				month = 'Липень';
				break;
			case 7:
				month = 'Серпень';
				break;
			case 8:
				month = 'Вересень';
				break;
			case 9:
				month = 'Жовтень';
				break;
			case 10:
				month = 'Листопад';
				break;
			case 11:
				month = 'Грудень';
				break;
		}
		gridContainer.innerHTML += `<div class="grid__text grid__text_month" style="grid-row: 12/14; grid-column: ${i}/${i + 2}">${month}</div>`;

		for (let j = 1; j <= (10 - deposPerscentArray[i]); j++) {
			gridContainer.innerHTML += `<div class="grid__container_item-colored grid__container_item-colored-${i}-${j}" style="grid-row: ${j}/${j + 2}; grid-column: ${i}/${i}">
		</div>`;
		}
	}

	document.querySelector('[data-gridnumber="1"]').innerHTML = `<p>0%</p>`;
	document.querySelector('.grid__container_item-colored-1-1').innerHTML = `<p>100%</p>`;
}

document.querySelector('#createGraphicButton').addEventListener('click', (e) => {
	e.preventDefault();
	createGraphic();
	createGraphic.i = 1;

});

createGraphic();