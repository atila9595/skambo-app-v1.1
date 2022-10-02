var id = document.getElementById('nomediv').value


var urlinteresse = 'http://127.0.0.1:8081/home/buscarUsuario/' + id
var usuarioApi = async() => {
    try {
        const response = await fetch(urlinteresse)
        const data = await response.json()
            //console.log(data[0].imagem)
        console.log(data.nome)
        show(data)


    } catch (error) {

    }

}

function show(usuario) {
    document.getElementById("imguser").src = usuario.imguser;
    document.getElementById("nomeuser").innerHTML = usuario.nome;
    document.getElementById("linkprefil").href = 'home/'
}

usuarioApi()