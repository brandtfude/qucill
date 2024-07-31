const EventEmitter = require('events');
class DataflowEmitter extends EventEmitter {}

const dataflowEmitter = new DataflowEmitter();

dataflowEmitter.on('evaluationComplete', () => {
    console.log('Dataflow tracking: Evaluation has completed.');
});

function evaluateDataflow() {
    // Simulate dataflow evaluation with a timeout
    setTimeout(() => {
        console.log('Dataflow evaluation completed.');
        dataflowEmitter.emit('evaluationComplete');
    }, 2000); // Assume it takes 2 seconds to complete
}

evaluateDataflow();
