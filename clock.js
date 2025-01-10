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
