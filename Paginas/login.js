function logar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    

    if(login == "aprendendojs@dev.com" && senha == "1234"){
        alert('Login validado com sucesso');
    }else{
        alert('Usuário ou senha invalidos');
    }
}