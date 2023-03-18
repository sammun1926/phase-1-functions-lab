// Code your solution in this file!
const headquarters = 42;
function distanceFromHqInBlocks(blocks){
    if (blocks > 42){
        return blocks - 42;
    }
    else if ( blocks<= 42){
        return 42 - blocks;
    }
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264;
}
function distanceTravelledInFeet(blocks,blocks1) {
    const distanceTravelledInFeet = (distanceFromHqInFeet(blocks) - distanceFromHqInFeet(blocks1))
    if ( distanceTravelledInFeet >= 0) {
        return distanceTravelledInFeet;
    } else {
        return ( distanceTravelledInFeet * -1);
    }
  }
  function calculatesFarePrice(start,destination){
    const totalFeetTravelled= (distanceTravelledInFeet(start, destination))
    if (totalFeetTravelled <=400) {
        return 0;
    }else if (totalFeetTravelled >=400 && totalFeetTravelled <= 2000) {
        return ((totalFeetTravelled - 400) * 0.02);
    }else if (totalFeetTravelled >= 2000 && totalFeetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
  } 