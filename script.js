const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');



const getText = (imc) =>{
    if(imc < 16){
        return 'Magreza grave';
    }
    if(imc >= 16 && imc <= 16.9){
        return 'Magreza moderada';
    }
    if(imc >= 17 && imc <= 18.5){
        return 'Magreza leve';
    }
    if(imc >= 18.6 && imc<= 24.9){
        return 'Peso Ideal';
    }
    if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso';
    }
    if(imc >= 30 && imc <= 34.9){
        return 'Obesidade grau I';
    }
    if(imc >= 35 && imc <= 39.9){
        return 'Obesidade grau II';
    }
    if(imc >= 40){
        return 'Obesidade grau III';
    }
}

const imcCalc = () =>{
    if(!peso.value || !altura.value || !nome.value) return resultado.textContent = `Preencha todos os campos`;
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent =`${nome.value} - IMC: ${valorImc} - ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc);