// 1. When a user presses the record button, start recording actions
// 2. When recording, push an object with the important data to the array
//			- Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//			- Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded
//			- Ensure there is not current a recording going on (various ways to prevent that case)



// DOM elements
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')
const $cursor = document.getElementById('cursor')

// Variables/data
let isRecording = false;
let mouseMoves = [
	// Examples:
	// {x: 123, y:212, t:0},
	// {x: 220, y:317, t:100},
	// {x: 126, y:218, t:145},
]

// Each movement of the mouse
let recordEvent = window.addEventListener('mousemove', (event) => {
	if (isRecording && event.timeStamp <=5000) {
		let Movelist = {
			x : event.clientX,
			y : event.clientY,
			t : event.timeStamp
		}
		console.log(Movelist);
		mouseMoves.push(Movelist);
		}
	
		// Record the data to the Array
	  // this is one of many ways to prevent recording, consider you may also use removeEventListener() as wel
})

// Start/stop the recording
$startAndStop.addEventListener('click', (event) => {
	if(isRecording = !isRecording) {
		recordEvent;
	} else {
		console.log(`Recording has been stopped...!!!`)
	}
})



// Replay recording
$replayRecording.addEventListener('click', (event) => {

	const record = () => {

		mouseMoves.forEach((num) => {
			setTimeout(() => {
				$cursor.style.setProperty('--x', num.x);
				$cursor.style.setProperty('--y', num.y);
				record();
			}, 1000);
			
		})
	}
	record ();

	
	// Set the x and y for each mouse move recorded (123, 456 are examples)
	// $cursor.style.setProperty('--x', 123)
	// $cursor.style.setProperty('--y', 456)

})

