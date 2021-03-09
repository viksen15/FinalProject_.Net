var a = document.getElementById("mailMenu");
var b = document.getElementById("newMailButtons");
var x = document.getElementById("hijoPrincipal");
var y = document.getElementById("hijoCorreoNuevo");
var w = document.getElementById("hijoMailRecibido");
var z = document.getElementById("hijoBandejaBorrados");
var v = document.getElementById("hijoMailBorrado");
var rec = document.getElementById("recibidos");
var cN = document.getElementById("correoNuevo");

function MostrarMailNuevo() {
    if (y.style.display === "none") {
        y.style.display = "flex";
        x.style.display = "none";
        w.style.display = "none";
        z.style.display = "none";
        v.style.display = "none";
        a.style.display = "none";
        b.style.display = "flex";
    }
}
function MostrarBandejaEntrada() {
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none";
        w.style.display = "none";
        z.style.display = "none";
        v.style.display = "none";
        b.style.display = "none";
        a.style.display = "flex";
    }
}
function MostrarMailRecibido() {
    if (w.style.display === "none") {
        w.style.display = "flex";
        x.style.display = "none";
    }
}
function MostrarBandejaBorrados() {
    if (z.style.display === "none") {
        z.style.display = "flex";
        x.style.display = "none";
        y.style.display = "none";
        w.style.display = "none";
        v.style.display = "none";
    }
}
function MostrarMailBorrado() {
    if (v.style.display === "none") {
        v.style.display = "flex";
        z.style.display = "none";
        y.style.display = "none";
        w.style.display = "none";
    }
}
