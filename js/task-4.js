function getShippingCost(country, price) {
  switch (country) {
    case `Australia`:
      makeMessage = `Shipping to ${country} will cost ${price} credits`;
      break;
    case `China`:
      makeMessage = `Shipping to ${country} will cost ${price} credits`;
      break;
    case `Chile`:
      makeMessage = `Shipping to ${country} will cost ${price} credits`;
      break;
    case `Jamaica`:
      makeMessage = `Shipping to ${country} will cost ${price} credits`;
      break;

    default:
      makeMessage = `Sorry, there is no delivery to your country`;
      break;
  }
  console.log(makeMessage);
}

getShippingCost('Australia', 170); // "Shipping to Australia will cost 170 credits"
getShippingCost('Germany'); // "Sorry, there is no delivery to your country"
getShippingCost('China', 100); // "Shipping to China will cost 100 credits"
getShippingCost('Chile', 250); // "Shipping to Chile will cost 250 credits"
getShippingCost('Jamaica', 120); // "Shipping to Jamaica will cost 120 credits"
getShippingCost('Sweden'); // "Sorry, there is no delivery to your country"
