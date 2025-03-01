document.addEventListener("DOMContentLoaded", function() {
    let today = new Date();
    let day = today.getDate(); // আজকের দিন সংখ্যা
    
    let rows = document.querySelectorAll("#ramadanTable tr");
    
    rows.forEach(row => {
        let rowDate = parseInt(row.getAttribute("data-date"));
        if (rowDate === day) {
            row.classList.add("blink"); // আজকের রমজান দিনের জন্য ব্লিঙ্ক চালু
        }
    });
});