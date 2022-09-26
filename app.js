function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function api() {
    let route = get("https://api.agify.io/?name[]=michael&name[]=matthew&name[]=jane")
    data = JSON.parse(route)
    let usuario = prompt('Qual o seu nome?')
    if (usuario == "michael") {
        alert('A idade do michael é ' + data[0].age)
    } else if (usuario == "matthew") {
        alert('A idade do matthew é ' + data[1].age)
    } else if (usuario == "jane") {
        alert('A idade do jane é ' + data[2].age)
    } else {
        alert('Não existe esse nome')
    }
console.log(data)
}
api()