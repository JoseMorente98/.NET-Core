window.onload = function () {
    listProductType();
}

function listProductType() {
    pintar({
        url: "ProductType/ListProductType",
        cabeceras: ["ID", "Nombre", "Descripcion"],
        propiedades: ["idProductType", "name", "description"]
    })
}