# Creating a Stylish Real-Time Clock with JavaScript and CSS
## Date()
`Date()` lets you fetch the current date, and by using the `new` keyword, the current date can be stored in a variable.

```javascript
let date = new Date();
```

## Some Methods in Date Function
1. `getHours()`: Lets you extract the hours from the date. gets in 24 hour format
2. `getMinutes()`: Extracts minutes from the date.
3. `getSeconds()`: Extracts seconds from the date.
4. `getMilliseconds()`: Extracts milliseconds from the date.
5. `getFullYear()`: Gets the four-digit year (e.g., 2023).
6. `getMonth()`: Gets the month (0-11, where 0 is January and 11 is December).
7. `getDate()`: Gets the day of the month (1-31).

example usage:
using the previous date variable that was created 
```javascript
let hour =date.getHour();
let minutes = date.getMinutes()
let seconds = date.getSeconds();
```
These methods can be used to create a clock that updates in real-time.


but to get time updated in real time we need need to update these values atleast every seconds 


## setInterval()

The `setInterval()` method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. This method continues to call the function until `clearInterval()` is called or the window is closed.

### Syntax

```javascript
setInterval(function, milliseconds);

```

- `function`: The function to be executed.
- `milliseconds`: The time interval (in milliseconds) between each execution of the function.

### Example

Here is an example of how to use `setInterval()` to update the time every second:

```javascript
function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock, 1000);
```

In this example, the `updateClock` function is called every 1000 milliseconds (1 second), which updates and logs the current time.

## Padding the clock parameter to always have 2 digits
To ensure that the clock parameters (hours, minutes, and seconds) always have two digits, you can create a helper function to pad the numbers with leading zeros if necessary.

### Example

Here is an example of how to pad the clock parameters to always have two digits:

```javascript
function padToTwoDigits(number) {
    return number.toString().padStart(2, '0');
}

function updateClock() {
    let date = new Date();
    let hours = padToTwoDigits(date.getHours());
    let minutes = padToTwoDigits(date.getMinutes());
    let seconds = padToTwoDigits(date.getSeconds());
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock, 1000);
```

In this example, the `padToTwoDigits` function ensures that each time component (hours, minutes, and seconds) is always displayed with two digits by adding a leading zero if necessary.



## Final Program

### Html for clock

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dates1.css">
    <title>Clock</title>
    <style>
        
    </style>
</head>
<body>
    <div id="clock"></div>

    <script src="dates1.js">
        
    </script>
</body>
</html>
```
### CSS

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    background: url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    position: relative;
}

#clock {
    font-size: 4em;
    font-weight: bold;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    text-align: center;
    transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
    backdrop-filter: blur(5px);
}

#clock:hover {
    transform: scale(1.05);
    background: rgba(0, 0, 0, 0.7);
}

body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

#clock::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
    transform: translate(-50%, -50%) scale(1);
    border-radius: 50%;
    z-index: -1;
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.1);
        opacity: 0.7;
    }
}

```
### Javascript

```javascript
function getdate() {
    const date = new Date();
    let hour = date.getHours();
    const meridiam = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // Convert hour to 12-hour format and handle midnight (0)
    
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    document.getElementById("clock").textContent = `${String(hour).padStart(2, "0")}:${minutes}:${seconds} ${meridiam}`;
}

setInterval(getdate, 1000);
```




## Overview

In this guide, we have demonstrated how to create a real-time updating clock using JavaScript. We covered the following key concepts:

1. **Date Object**: How to use the `Date` object to fetch the current date and time.
2. **Date Methods**: Various methods available in the `Date` object to extract hours, minutes, seconds, and other date components.
3. **setInterval()**: Using the `setInterval()` method to repeatedly execute a function at specified intervals, enabling real-time updates.
4. **Padding Numbers**: Ensuring that time components (hours, minutes, seconds) are always displayed with two digits using a helper function.
6. **Enhanced CSS**: Applying advanced CSS styles to ensure the clock is visually appealing, centered on the webpage, and includes animations for a dynamic effect.


By following this guide, you can create a functional and visually appealing clock that updates every second, providing an accurate representation of the current time.


