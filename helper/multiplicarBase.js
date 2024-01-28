async function multiplicar(base){
    
    let htmlContent = '<table class="table table-primary">';
    htmlContent += '<tr><th>Base</th><th>X</th><th>Resultado</th></tr>';
    for(let i = 1; i <= 10; i++){
        htmlContent += `<tr><td>${base}</td><td>${i}</td><td>${base * i}</td></tr>`
    }
    htmlContent += '</table>';

    return htmlContent
}

module.exports= {multiplicar};