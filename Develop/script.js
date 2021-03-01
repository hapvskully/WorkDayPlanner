var currentDayEl = document.querySelector("#currentDay")
var currentDayValue = moment().format("MMM Do YYYY");
currentDayEl.textContent = currentDayValue
var currentHour = moment().format("HH");
var parentContainer = $("#parent")
var time = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

for(i=0; i<9; i++){
    var timeblock = $("<div>").attr("class", "row")
    
    var newP = $("<p>").text(time[i]).attr("class", "col-1 hour")

    if(parseInt(currentHour) > i+9) {
        var newText = $("<textarea>").attr("class", "col-10 past")
    } else if(currentHour == i+9){
        var newText = $("<textarea>").attr("class", "col-10 present")
    } else {
        var newText = $("<textarea>").attr("class", "col-10 future")
    }
    JSON.stringify
    newText.text(localStorage.getItem(""))
    var newBtn = $("<button>").attr("class", "col-1 saveBtn").text("save")
    newBtn.on("click", saveToLocal);

    timeblock.append(newP)
    timeblock.append(newText)
    timeblock.append(newBtn)
    
    parentContainer.append(timeblock)
}

function saveToLocal(){
    console.log("saved to local!")
    var valueToSave = $(this).prev().val()
    // localStorage.setItem("arr", JSON.stringify(time))
    // JSON.parse(localStorage.getItem("arr"))
    localStorage.setItem("textarea",)
    localStorage.length("textarea",)
}
