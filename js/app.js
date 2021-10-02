let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let imc = document.querySelector('#btn');
let dentro_imc = document.querySelector('.imc span');
let info = document.querySelector('.info');


imc.addEventListener('click', () => {

    valor_do_imc = parseFloat(Number(peso.value) / (Number(altura.value) ** 2)).toFixed(2);
    if (valor_do_imc < 18.5) {
        dentro_imc.innerText = valor_do_imc;
        info.innerText = "Magreza, quando o resultado é menor que 18,5kg"
        info.style.backgroundColor = "rgb(211, 12, 12)";


    } else if (valor_do_imc < 24.9) {
        dentro_imc.innerText = valor_do_imc;
        info.innerText = "Normal, quando o resultado está entre 18,5 e 24,9kg"
        info.style.backgroundColor = "rgb(38, 163, 0)";

    } else if (valor_do_imc <= 30) {
        dentro_imc.innerText = valor_do_imc;
        info.innerText = "Sobrepeso, quando o resultado está entre 24,9 e 30kg"
        info.style.backgroundColor = "rgb(255, 51, 0)";

    } else if (valor_do_imc > 30) {
        dentro_imc.innerText = valor_do_imc;
        info.innerText = "Obesidade, quando o resultado é maior que 30kg"
        info.style.backgroundColor = "red";

    } else {
        dentro_imc.innerText = valor_do_imc;
        info.innerText = "Valor para IMC invalido.\n Tente novamente"
        info.style.backgroundColor = "rgb(165, 1, 23)";
    }
})