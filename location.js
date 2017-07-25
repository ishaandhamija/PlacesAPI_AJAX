/**
 * Created by ishaandhamija on 24/07/17.
 */

window.onload = function () {

    // var x = document.getElementById("demo");
    getLocation()
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

    var map;
    var infowindow;

    function initialize() {
        var pyrmont = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // sample location to start with: Mumbai, India

        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: pyrmont,
            zoom: 15
        });

        var request = {
            location: pyrmont,
            radius: 200,
            types: ['hospital', 'health'] // this is where you set the map to get the hospitals and health related places
        };
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
}