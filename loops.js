var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// Loop problem 1
for (var i = 0; i < animals.length - 1; i++) {
    console.log('Problem 1: ', animals[i]);
}


// Loop problem 2
for (var i = 0; i < animals.length; i+=2) {
    console.log('Problem 2: ', animals[i]);
}


// Loop problem 3
// Reverse loop does not need to compare i to the length each time around
for (var i = animals.length; i--;) {
    console.log('Problem 3: ', animals[i]);
}



// Loop problem 4
for (var i = 0; i < animals.length; i++) {
    if (animals[i] === animals[0] || animals[i] === animals[animals.length - 1]) {
        console.log('Problem 4: ', animals[i]);
    } else {
        console.log('Problem 4: ', animals[i]);
        console.log('Problem 4: ', animals[i]);
    }
}