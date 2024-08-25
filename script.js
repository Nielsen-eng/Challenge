console.log("Arquivo JS carregado!"); 
function criptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = 7; 
    let resultado = '';
    console.log("Criptografando mensagem:", mensagem);
    for (let i = 0; i < mensagem.length; i++) {
        let charCode = mensagem.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 + chave) % 26 + 97);
        } else {
            resultado += mensagem[i];
        }
    }

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2 class="titulo_right">Mensagem Criptografada</h2>
        <p class="p1">${resultado}</p>
        <button class="btm-copiar" onclick="copiar()">Copiar</button>
    `;
    resultadoDiv.style.display = 'block';
    console.log("Resultado da criptografia:", resultado);
    document.getElementById("mensagem").value = '';

    
    let imagemBoneco = document.querySelector("#resultado .img-boneco");
    if (imagemBoneco) {
        imagemBoneco.style.display = 'none';
    }
}
function descriptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = 7; // Chave fixa de 7 casas
    let resultado = '';

    for (let i = 0; i < mensagem.length; i++) {
        let charCode = mensagem.charCodeAt(i);

        
        if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 - chave + 26) % 26 + 97);
        }
        
        else {
            resultado += mensagem[i];
        }
      }
    
      let resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
          <h2 class="titulo_right">Mensagem Descriptografada</h2>
          <p class="p1">${resultado}</p>
          <button class="btm-copiar" onclick="copiar()">Copiar</button>
      `;
      resultadoDiv.style.display = 'block';
      document.getElementById("mensagem").value = '';
      
      let imagemBoneco = document.querySelector("#resultado .img-boneco");
      if (imagemBoneco) {
          imagemBoneco.style.display = 'none';
}
}

function copiar() {
    let resultado = document.querySelector(".p1").innerText;
    navigator.clipboard.writeText(resultado).then(() => {
        alert("Mensagem copiada para a área de transferência!");
    }).catch(err => {
        alert("Erro ao copiar a mensagem: " + err);
    });
}