let gMap = {}; // gMap is an empty object
let gKey = 'someKey'; // gKey is set to 'someKey'

let group = gMap[gKey] = []; // Initializes gMap['someKey'] as an empty array and assigns it to group

console.log(gMap); // Output: { someKey: [] }
console.log(group); // Output: []

// Now gMap['someKey'] and group both refer to the same empty array []
