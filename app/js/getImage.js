'use strict';

var getImage = function(givenData) {
  var imageUrl;
  if (givenData.match('warm')) {
    imageUrl = 'http://photo.jacko.com/d/2199-2/IMG_1458.jpg';
  } else if (givenData.match('cool')) {
    imageUrl = 'http://i.huffpost.com/gen/954892/thumbs/o-FAMILY-MEALTIME-facebook.jpg';
  } else if (givenData.match('perfect')) {
    imageUrl = 'http://thelovage.com/wp-content/uploads/2012/06/MILLBROOK-DINNER.jpg';
  } else if (givenData.match('jacket')) {
    imageUrl = 'http://www.countryliving.com/cm/countryliving/images/Party-toasts-champagne-ENTERT0505-de.jpg';
  } else imageUrl = 'http://d1hw6n3yxknhky.cloudfront.net/012338773_prevstill.jpeg';
  return '<div><img src=\'' + imageUrl + '\'></div>';
};

module.exports = getImage;
