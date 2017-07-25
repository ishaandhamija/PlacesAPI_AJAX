/**
 * Created by ishaandhamija on 25/07/17.
 */

window.onload = function () {

    getLocation();

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
        console.log('dikkat')
    }
}

function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)

    $.ajax({
        // url: 'http://maps.googleapis.com/maps/api/place/textsearch/json?',
        url: 'https://maps.googleapis.com/maps/api/place/search/json?location=28.5355,77.3910&radius=500&types=hospital&sensor=true&key=AIzaSyAImBQiqvaXOQtqeK8VC-9I96kMmB6Mz7I',
        // url: 'http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback',
        data: {
            'location':'-33.8670522,151.1957362',
            'radius':500,
            'sensor':'true',
            'key':'AIzaSyAImBQiqvaXOQtqeK8VC-9I96kMmB6Mz7I'},
        dataType: "json",
        headers:{
            'Access-Control-Allow-Origin': '*'
        },
        type: "GET",
        success: function( data ) {
            console.log(data)
            console.log('yaha')
        },
        error: function (request, status, error) {
            console.log(error)
            console.log('dikkat')
        }
    });
}