var container = document.querySelector('.locaMap');
var options = {
  center: new kakao.maps.LatLng(37.566826, 126.9786567),
  level: 3
};

var map = new kakao.maps.Map(container, options);