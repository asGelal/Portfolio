//Creating a request variable and a new XMLHttp Request
// object to it.
var request = new XMLHttpRequest()
    //open a new connection, using the GET request ont he URL endpoint
request.open('GET', 'https://api.github.com/users/asGelal/repos', true)
request.onload = function() {
    var data = JSON.parse(this.response);




}
request.send();