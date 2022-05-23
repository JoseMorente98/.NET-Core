async function fetchGet(url, tipoRespuesta, callback) {
    try {
        var root = document.getElementById("hdfOculto").value;
        var url = window.location.protocol + "//" + window.location.host + "/" + root + url;
        var res = await fetch(url)
        if (tipoRespuesta == "json")
            res = await res.json();
        callback(res);
    } catch (e) {

    }
}

//{url:"",columnas:[],propiedades:[]}

var objConfiguracionGlobal;

function pintar(objConfiguracion) {
    objConfiguracionGlobal = objConfiguracion;
    fetchGet(objConfiguracion.url, "json", function (res) {
        var contenido = "";

        contenido += "<div id='divContenedorTabla'>";
        contenido += generarTabla(res)
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML = contenido;
    })
}

function generarTabla(res) {
    var contenido = "";
    var cabeceras = objConfiguracionGlobal.cabeceras;
    var nombrepropiedades = objConfiguracionGlobal.propiedades;
    contenido += "<table class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    for (var i = 0; i < cabeceras.length; i++) {
        contenido += "<td>" + cabeceras[i] + "</td>";
    }
    contenido += "</tr>";
    contenido += "</thead>"

    var nregistros = res.length;
    var obj;
    var propiedadActual;
    contenido += "<tbody>";
    for (var i = 0; i < nregistros; i++) {
        obj = res[i]
        contenido += "<tr>";
        for (var j = 0; j < nombrepropiedades.length; j++) {
            propiedadActual = nombrepropiedades[j]
            contenido += "<td>" + obj[propiedadActual] + "</td>";
        }
        contenido += "</tr>";
    }
    contenido += "</tbody>"
    contenido += "</table>";
    return contenido;
}