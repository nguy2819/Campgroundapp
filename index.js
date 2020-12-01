//1. How many campsites do we have?
let campground = [
{ number: 1, view: "ocean", partySize: 8, isReserved: false },
{ number: 5, view: "ocean", partySize: 4, isReserved: false },
{ number: 12, view: "ocean", partySize: 4, isReserved: true },
{ number: 18, view: "forest", partySize: 4, isReserved: false },
{ number: 23, view: "forest", partySize: 4, isReserved: true },
{ number: 26, view: "beach", partySize: 4, isReserved: false },
];

function howManyCampsites(campground){
  let campsites = 0;
  for(i=0; i<campground.length; i++){
    campsites+=1;
  }
  return campsites;
}

//2. How many people can we host at max capacity?
function howManyMaxCapacity(campground){
  let maxCapacity = 0;
  for(i=0; i<campground.length; i++){
    maxCapacity += campground[i].partySize;
  }
  return maxCapacity;
}
//3. Which campsites are available to reserve?
function campsitesAvailableToReserve(campground){
  let availableToReserve = [];
  for(i=0; i<campground.length; i++){
    if(campground[i].isReserved === false){
      availableToReserve.push(campground[i]);
    }
  }
  return availableToReserve;
}
//4. What's the capacity of the nonreserved sites?
function howManyCapacityOfNonreserved(campground){
  let availableToReserve = campsitesAvailableToReserve(campground);
  return howManyMaxCapacity(availableToReserve);
}
//5. How many campsites are there with each kind of view?
function howManyCapacityWithOceanView(campground){
  let capacityWithOceanView = 0;
  for(i=0; i<campground.length; i++){
    if(campground[i].view === "ocean"){
      capacityWithOceanView +=1;
    }
  }
  return capacityWithOceanView;
}

function howManyCapacityWithForestView(campground){
  let capacityWithForestView = 0;
  for(i=0; i<campground.length; i++){
    if(campground[i].view === "forest"){
      capacityWithForestView +=1;
    }
  }
  return capacityWithForestView;
}

function campsitesWithEachView(campground){
  return {
    forest: howManyCapacityWithForestView(campground),
    ocean: howManyCapacityWithOceanView(campground)
  };
}

function campsitesCountViews(campground){
  let views = {};
  for(let i = 0; i < campground.length; i++){
    const campsite = campground[i];
    if(!views[campsite.view]){
      views[campsite.view] = 0;
    }
    views[campsite.view] += 1;
  }

  return views;
}

//6. Which campsites are available to reserve for a given party size and a given view?
function getCampsitesWithView(campground, desiredView){
  let campsites = [];
  for(let i = 0; i < campground.length; i++){
    if(campground[i].view === desiredView){
      campsites.push(campground[i]);
    }
  }
  return campsites;
}

function campsitesAvailable(campground, desiredView, desiredPartySize){
    const availableToReserve = campsitesAvailableToReserve(campground);
    const campsitesWithView = getCampsitesWithView(availableToReserve, desiredView);
    let campsitesWithCapacity = [];
    for(let i = 0; i < campsitesWithView.length; i++){
      if(campsitesWithView[i].partySize >= desiredPartySize){
        campsitesWithCapacity.push(campsitesWithView[i]);
      }  
    }
    return campsitesWithCapacity;

}

// tests

howManyCampsites(campground);
howManyMaxCapacity(campground);
campsitesAvailableToReserve(campground);
howManyCapacityOfNonreserved(campground);
howManyCapacityWithOceanView(campground);
howManyCapacityWithForestView(campground);
campsitesCountViews(campground);
campsitesAvailable(campground, 'ocean', 6);