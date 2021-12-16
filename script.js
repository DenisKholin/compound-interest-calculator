function createGraphic() {
	if (document.querySelector('.grid__container')) {
		document.querySelector('.grid__container').remove();
	}

	document.getElementById("y1").innerHTML = '';
	let depositV = document.getElementById("deposit").value,
		depositVint = parseInt(depositV, 10),
		deposArray = [],
		interestV = document.getElementById("inRate").value,
		interestVint = parseInt(interestV, 10),
		monthV = document.getElementById("inMonth").value,
		monthVint = parseInt(monthV, 10),
		now = new Date(),
		month,
		gridContainer,
		i = 1;

	document.querySelector('#y1').insertAdjacentHTML('afterend', `	<div class="grid__container">

	</div>`);



	gridContainer = document.querySelector('.grid__container');
	gridContainer.style.gridTemplateColumns = `repeat(${monthVint}, 98px)`;


	for (i; i <= monthVint; i++) {
		var result = depositVint / 100 * interestVint;
		depositVint = depositVint + result;
		deposArray[i] = depositVint.toFixed(2);
		console.log(depositVint.toFixed(2));

		for (let j = 1; j <= 11; j++) {
			gridContainer.innerHTML += `<div class="grid__container_item" data-gridnumber="${j}-${i}">
				<div class="grid__container_item-colored"></div>
			</div>`;
		}
	}

	console.log(deposArray);


	switch (now.getMonth() - 4) {
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



}

document.querySelector('#createGraphicButton').addEventListener('click', (e) => {
	e.preventDefault();
	createGraphic();
	createGraphic.i = 1;

});
