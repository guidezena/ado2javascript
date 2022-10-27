function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function api() {
    let route = get("https://api.agify.io/?name[]=michael&name[]=matthew&name[]=jane")
    data = JSON.parse(route)
        var currentAge
        let user = prompt('Qual o seu nome?')
        data.forEach(element => {
            if (element.name == user) {
                currentAge = element.age
                alert("A idade do usuario " + element.name + " é: " + element.age)
            }
        });

        if (!currentAge) {
            alert('Não tem esse usuario cadastrado')
        }

    }

api()