let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');




// Criar ordem aleatória de cores
let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4);
	
	order[order.length] = colorOrder;
	clickedOrder = [];
	
	for (let i in order) {
		let elementColor = createColorElement(order[i]);
		
		lightColor(elementColor, Number(i) + 1);
	}
};


// Acender a próxima cor
let lightColor = (element, number) => {
	number = number * 500;
	
	setTimeout(() => {
		element.classList.add('selected');
	}, number - 250);
	
	setTimeout(() => {
		element.classList.remove('selected');
	});
};


// Checar se a ordem clicada é a mesma da ordem do jogo
let checkOrder = () => {
	for (let i in clickedOrder) {
		
		if (clickedOrder[i] != order[i]) {
			gameOver();
			
			break;
		} 
	}
	
	if (clickedOrder.length == order.length) {
		alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!!!`);
		
		nextLevel();
	}
};


// Função para clique do usuário
let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	
	createColorElement(color).classList.add('selected');
	
	setTimeout(() => {
		createColorElement(color).classList.remove('selected');
		
		checkOrder();
	}, 250);
};


// Função que retorna a cor
let createColorElement = (color) => {
	
	if (color == 0) {
		return green;
	} else if (color == 1) {
		return red;
	} else if (color == 2) {
		return yellow;
	} else if (color == 3) {
		return blue;
	}
};









