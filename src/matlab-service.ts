
//make a rest call using axios
function makeRestCall(url, data) {
}

//connect to a remote matlab server via rest using axios, then make a post request to the server
function connect() {
    return axios.create({
        baseURL: 'http://localhost:8080/',
        headers: {
            'Content-Type': 'application/json'
        }
    });

}



// var request = new XMLHttpRequest();
// //MPS RESTful API: Specify URL
// var url = "http://localhost:9910/ctfArchiveName/mymagic";
// //MPS RESTful API: Specify HTTP POST method
// request.open("POST", url);
// //MPS RESTful API: Specify Content-Type to application/json
// request.setRequestHeader("Content-Type", "application/json");
// var params = { nargout: 1, rhs: [5] };
// request.send(JSON.stringify(params));
// request.onreadystatechange = function () {
//   if (request.readyState == 4) {
//     //MPS RESTful API: Check for HTTP Status Code 200
//     if (request.status == 200) {
//       result = JSON.parse(request.responseText);
//       if (result.hasOwnProperty("lhs")) {
//         //MPS RESTful API: Index into "lhs" to retrieve response from server
//         document.getElementById("demo").innerHTML =
//           "<p>" + result.lhs[0].mwdata;
//       }
//     } else if (result.hasOwnProperty("error")) {
//       alert("Error: " + result.error.message);
//     }
//   }
// };
