

function initMap() {
    var losAngeles = {lat: 34.063380, lng: -118.358080};
    map = new google.maps.Map(document.getElementById('map'), {
      center: losAngeles,
      zoom: 11,
      mapTypeId: 'roadmap',
    });

}

function initMap() {
    // The location of losAngeles
    var losAngeles = {lat: 34.050180, lng: -118.241199};
    // The map, centered at losAngeles
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: losAngeles});
    // The marker, positioned at losAngeles
    var marker = new google.maps.Marker({position: losAngeles, map: map});
  }

