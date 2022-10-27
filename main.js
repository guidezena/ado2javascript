var button = document.getElementById('button')
function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function api() {
    // var currentNumber;
    let route = get('http://numbersapi.com/random/math', function (data) {
        $('#number').text(data);
    });
    alert(route)
    // let number = prompt('Qual o numero que voce deseja?')
    // data.forEach(element => {
    //     if (element.name == user) {
    //         alert(route.responseText)
    //     }
    // });
    // if (!currentNumber) {
    //     alert('Não tem esse usuario cadastrado')
    // }
    // console.log(route)

}
api()