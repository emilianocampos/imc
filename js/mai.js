function elemnt() {
    let imcPamtalla = document.createElement('p');
    imcPamtalla.innerHTML = `<h1 class="o">Tu IMC es : ${resultado.toFixed(2)} Tenes bajo peso</h1>`
    document.body.appendChild(imcPamtalla);
}
function imc() {
    let resultadoExp;
    let resultado;
    let btn = document.getElementById('btn');


    btn.addEventListener('click', () => {
        let altura = parseFloat(document.getElementById('altura').value);
        let peso = parseInt(document.getElementById('kg').value);

        resultadoExp = altura * altura;
        resultado = peso / resultadoExp;
        if (resultado < 18.5) {

            let imcPamtalla = document.createElement('p');
            imcPamtalla.innerHTML = `<h1>Tu IMC es : ${resultado.toFixed(2)} Bajo peso</h1>`
            document.body.appendChild(imcPamtalla);
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            let imcPamtalla = document.createElement('p');
            imcPamtalla.innerHTML = `<h1>Tu IMC es : ${resultado.toFixed(2)} Tu peso es el adecuado</h1>`
            document.body.appendChild(imcPamtalla);

        } else if (resultado >= 25 && resultado <= 29.9) {
            let imcPamtalla = document.createElement('p');
            imcPamtalla.innerHTML = `<h1>Tu IMC es : ${resultado.toFixed(2)}  Sobrepeso</h1>`
            document.body.appendChild(imcPamtalla);

        } else if (resultado >= 30 && resultado <= 34.9) {
            let imcPamtalla = document.createElement('p');
            imcPamtalla.innerHTML = `<h1>Tu IMC es : ${resultado.toFixed(2)}  Obesidad Grado 1</h1>`
            document.body.appendChild(imcPamtalla);

        } else if (resultado >= 35 && resultado <= 39.9) {
            let imcPamtalla = document.createElement('p');
            imcPamtalla.innerHTML = `<h1>Tu IMC es : ${resultado.toFixed(2)}  Obesidad Grado 2 </h1>`
            c

        } else if (resultado > 40) {
            let imcPamtalla = document.createElement('p');
            imcPamtalla.innerHTML = `<h1>Tu IMC es : ${resultado.toFixed(2)}  Obesidad Grado  3</h1>`
            document.body.appendChild(imcPamtalla);
        }

        const borrar = document.getElementById('borrar');
        borrar.addEventListener('click', () => {
            const elementosEliminar = document.querySelectorAll('h1');

            elementosEliminar.forEach((elemento) => {
                elemento.remove();
            })
        })

    })

}





imc();
