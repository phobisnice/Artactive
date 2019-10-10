ymaps.ready(init);
function init() {

  var myMap;

  myMap = new ymaps.Map("map", {
    center: [57.657123566964735, 39.84186149999995],
    zoom: 16,
    controls: []
  });

  if (document.documentElement.clientWidth < 768) {
    myMap.panTo([57.659123566964735, 39.84586149999995]);
  }

  myMap.behaviors.disable('scrollZoom');

  myMap.controls.add("zoomControl", {
    position: { bottom: 30, right: 15 },
    size: "small"
  });

  var myPlacemark = new ymaps.Placemark([57.657123566964735, 39.84586149999995], {
    hintContent: 'Artactive',
    balloonContent: 'г. Ярославль, проспект Октября, 88',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '/img/pin.svg',
    iconImageSize: [80, 80],
    iconImageOffset: [-40, -80]
  });

  myMap.geoObjects.add(myPlacemark);
}
