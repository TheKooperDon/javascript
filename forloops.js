//for loops
const nbaProfiles = [ 
    //1 Profile
    {
      firstName: "Lebron",
      lastName: "James",
      state: "Ohio",
      doesHeSuck: true,
    },
    // 1 Profile
  
    // 2nd Profile
    {
      firstName: "Stephen",
      lastName: "Curry",
      state: "North Carolina",
      doesHeSuck: false,
    },
    //3rd Profile
     {
      firstName: "Giannis",
      lastName: "Antetokounmpo",
      state: "Ohio",
      doesHeSuck: false,
    },
      //4th Profile
     {
      firstName: "James",
      lastName: "Harden",
      state: "Bitch Town",
      doesHeSuck: true,
    },
  ];
//data[0].state = state: "Ohio"

let howManyTimesDoesOhioShowUp = 0;
/*
function checkNBAPlayersStateFunction ( data ){
    if ( data[0].state === 'Ohio' ) {
        howManyTimesDoesOhioShowUp = howManyTimesDoesOhioShowUp + 1
    }

    if ( data[1].state === 'Ohio') {
        howManyTimesDoesOhioShowUp = howManyTimesDoesOhioShowUp + 1
    }

    if ( data[2].state === 'Ohio') {
        howManyTimesDoesOhioShowUp = howManyTimesDoesOhioShowUp + 1
    }
    
    if ( data[3].state === 'Ohio') {
        howManyTimesDoesOhioShowUp = howManyTimesDoesOhioShowUp + 1
    }

}
*/
function checkNBAPlayersStateFunction ( stateChecker ) {

    //stateChecker = [ {} ]
  
  
    //nbaProfiles = stateChecker
    
    for (let loopNumber = 0; loopNumber < stateChecker.length; loopNumber++) {
      
        if (stateChecker[loopNumber].state === 'Ohio' ) {
         howManyTimesDoesOhioShowUp++
        }
    }
  }


checkNBAPlayersStateFunction( nbaProfiles )
console.log(howManyTimesDoesOhioShowUp)