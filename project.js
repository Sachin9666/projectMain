let selectEl = document.getElementById("select");
let paraEl = document.getElementById("para");
let anchorEl = document.createElement("a");
let link;
selectEl.addEventListener("change", function (event) {
    console.log(event.target.value);
    if (event.target.value === "CSE") {
        link = "page1.html";
        paraEl.textContent = "";
        
    } else if (event.target.value === "ECE") {
        paraEl.textContent = "";
        link = "page2.html";
    } else if (event.target.value === "EEE") {
        link = "page3.html";
        paraEl.textContent = "";
    } else {
        paraEl.textContent = "Select A Branch";
        paraEl.removeChild(anchorEl);
    }
    anchorEl.href = link;
    anchorEl.classList.add("aTag");
    anchorEl.textContent = "Next";
    paraEl.appendChild(anchorEl);
});
window.addEventListener('beforeunload', function (event) {
    selectEl.selectedIndex = "select";
});
