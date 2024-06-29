const headQuarters = 42;
const feet = 264;
function distanceFromHqInBlocks(distance) {
    if (distance < headQuarters) {
        return headQuarters - distance;

    } else {
        return distance - headQuarters
    }
}
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * feet;
}
function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
        return (start - destination) * feet
    } else {
        return (destination - start) * feet;
    }
}
function calculatesFarePrice(start, destination) {

    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return ((distance - 400) * 2) / 100;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }

}
