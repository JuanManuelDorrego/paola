function eliminar() {
    let parrafo = document.getElementById('parrafos')
    let valor = document.getElementById('posicion').value
    if (valor < parrafo.children.length)
        parrafo.removeChild(parrafo.children[valor])
}