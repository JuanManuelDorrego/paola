function cantidadHijosElementos() {
    let container1 = document.getElementById('container1')
    alert('La cantidad de hijos del primer div es:' + container1.children.length)
    let container2 = document.getElementById('container2')
    alert('La cantidad de hijos del segundo div es:' + container2.children.length)
}

function cantidadHijos() {
    let container1 = document.getElementById('container1')
    alert('La cantidad de hijos del primer div es:' + container1.childNodes.length)
    let container2 = document.getElementById('container2')
    alert('La cantidad de hijos del segundo div es:' + container2.childNodes.length)
}