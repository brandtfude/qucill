// Define an object named force
let force = {};

// Assign a method distance to the force object
force.distance = function (_) {
    // Function body goes here
    console.log("Distance function called with argument:", _);
};

// Call the distance method of the force object
force.distance(10); // Outputs: Distance function called with argument: 10
