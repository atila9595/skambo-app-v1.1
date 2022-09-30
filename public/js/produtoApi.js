var url = 'http://127.0.0.1:8081/prod/list'
var produtoclient = async() => {
    try {
        const response = await fetch(url)
        const data = await response.json()
            //console.log(data[0].imagem)

        show(data)


    } catch (error) {
        console.error(error)
    }

}

produtoclient()



function show(produtos) {

    var div = document.getElementById('container'); // The parent <div>.
    div.innerHTML = '';

    for (i = 0; i <= produtos.length - 1; i++) {

        // Create two <div> elements, one for the name and the other to show the image.


        var img = document.createElement('img'); // Create an <img> element.
        img.src = produtos[i].imagem; // The image source from JSON array.
        img.className = "imgProdutoHome2"
        img.name = produtos[i].id

        var divRight = document.createElement('a');
        divRight.href = 'prod/' + produtos[i].id

        divRight.appendChild(img);
        // Add the child DIVs to parent DIV.

        div.appendChild(divRight);

        // Note: Instead of <div>, you can also create a dynamic <table> to show the images. 
        // Here's an example ... https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm 
    }


}