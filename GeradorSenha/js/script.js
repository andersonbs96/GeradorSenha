function gerenciarSenhas(length, addMaiChars, addNums, addSpChars){
    let chars = "abcçdefghijklmnopqrstuvwxyz";
    const maichars = "ABCÇDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const spchars = "!@#$%&*()+=-*./";
    
    if (addMaiChars){
        chars += maichars;
    }
    if (addNums){
        chars += nums;
    }
    if (addSpChars){
        chars += spchars;
    }
    
    let senha = "";
    for (let i = 0; i < length; i++){
        senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return senha;
}

let listaSenha = [];

function gerarSenhas(){
    let tamSenha = parseInt(document.getElementById("tamanhoSenha").value);
    let qtdeSenha = parseInt(document.getElementById("quantidadeSenha").value);
    let addMaiChars = document.getElementById("gerarMaiChars").checked;
    let addNums = document.getElementById("gerarNums").checked;
    let addSpChars = document.getElementById("gerarSpChars").checked;
    let textArea = document.getElementById("receberSenhas");
    
    if (tamSenha <= 5 || tamSenha > 20 || qtdeSenha < 1 || qtdeSenha > 10){
        alert("Numeros de tamanho da senha e/ou quantidade inválidos, favor inserir valores válidos.");
        return false;
    }
      
    for (let i = 0; i < qtdeSenha; i++){
        listaSenha.push(gerenciarSenhas(tamSenha,addMaiChars,addNums,addSpChars));
    }
    
    textArea.value = "";
    
    listaSenha.forEach((senha) =>{
        textArea.value += senha + "\r\n";
    });
}

function limparSenhas(){
    document.getElementById('tamanhoSenha').value = "";
    document.getElementById('quantidadeSenha').value = "";
    document.getElementById('gerarMaiChars').checked = false;
    document.getElementById('gerarNums').checked = false;
    document.getElementById('gerarSpChars').checked = false;
    document.getElementById('receberSenhas').value = "";
    
    listaSenha = [];
}

function atualizarTamSenha(value) {
    document.getElementById('tamanhoSenha').value = value;
}

