// Get the clock element
let clockElement = document.getElementById("clock");

// Get the alarm input element
let alarmInputElement = document.getElementById("alarm-input");

// Get the alarm button element
let alarmButtonElement = document.getElementById("alarm-button");

// Get the alarm message element
let alarmMessageElement = document.getElementById("alarm-message");

// Function to update the clock
function updateClock() {
  // Get the current time
  let currentTime = new Date();

  // Format the time as HH:MM:SS
  let hours = currentTime.getHours().toString().padStart(2, "0");
  let minutes = currentTime.getMinutes().toString().padStart(2, "0");
  let seconds = currentTime.getSeconds().toString().padStart(2, "0");

  // Update the clock element
  clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Function to set the alarm
function setAlarm() {
  // Get the alarm time from the input element
  let alarmTime = alarmInputElement.value;

  // Check if the alarm time is valid
  if (alarmTime.length !== 4) {
    alarmMessageElement.innerHTML = "Invalid alarm time";
    return;
  }

  // Parse the alarm time as HHMM
  let alarmHours = parseInt(alarmTime.substring(0, 2));
  let alarmMinutes = parseInt(alarmTime.substring(2, 4));

  // Check if the alarm time is valid
  if (alarmHours < 0 || alarmHours > 23 || alarmMinutes < 0 || alarmMinutes > 59) {
    alarmMessageElement.innerHTML = "Invalid alarm time";
    return;
  }

  // Set a timeout to trigger the alarm
  let currentTime = new Date();
  let alarmDateTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), alarmHours, alarmMinutes, 0);
  if (alarmDateTime < currentTime) {
    alarmDateTime.setDate(alarmDateTime.getDate() + 1);
  }
  let timeout = alarmDateTime.getTime() - currentTime.getTime();
  setTimeout(() => {
    alarmMessageElement.innerHTML = "Alarm ringing!";
  }, timeout);

  // Update the alarm message element
  alarmMessageElement.innerHTML = `Alarm set for ${alarmHours.toString().padStart(2, "0")}:${alarmMinutes.toString().padStart(2, "0")}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Add an event listener to the alarm button
alarmButtonElement.addEventListener("click", setAlarm);