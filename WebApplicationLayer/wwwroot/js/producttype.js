window.onload = function () {
    listProductType();
}

function listProductType() {
    fetchGet("ProductType/ListProductType", "json", function (res) {
        console.log(res)
        var contenido = "";
        contenido = contenido + "<table class=\"table table-striped\">";
        contenido = contenido + "<thead>";
        contenido = contenido + "<tr>";
        contenido = contenido + "<th>ID</th>";
        contenido = contenido + "<th>Nombre</th>";
        contenido = contenido + "<th>Descripcion</th>";
        contenido = contenido + "</tr>";
        contenido = contenido + "</thead>";
        contenido = contenido + "<tbody>";

        console.log(contenido);

        var nregistros = res.length;
        var element;

        for (var i = 0; i < nregistros; i++) {
            element = res[i]
            console.log(element);
            contenido = contenido + "<tr>";
            contenido = contenido + "<td>" + element.idProductType + "</td>";
            contenido = contenido + "<td>" + element.name + "</td>";
            contenido = contenido + "<td>" + element.description + "</td>";
            contenido = contenido + "</tr>";
        }

        contenido = contenido + "</tbody>";
        contenido = contenido + "</table>";
        console.log(contenido);
        document.getElementById("divTabla").innerHTML = contenido;
    });
}