var currentDayEl = document.querySelector("#currentDay")
var currentDayValue = moment().format("MMM Do YYYY");
currentDayEl.textContent = currentDayValue
var currentHour = moment().format("HH");
var parentContainer = $("#parent")
var time = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

for(i=0; i<9; i++){
    var timeblock = $("<div>").attr("class", "row")
    
    var newP = $("<p>").text(time[i]).attr("class", "col-1 hour").attr("id",'time')

    if(parseInt(currentHour) > i+9) {
        var newText = $("<textarea>").attr("class", "col-10 past").attr("id",i)
    } else if(currentHour == i+9){
        var newText = $("<textarea>").attr("class", "col-10 present").attr("id",i)
    } else {
        var newText = $("<textarea>").attr("class", "col-10 future").attr("id",i)
    }
    JSON.stringify
    newText.text(localStorage.getItem(""))
    var newBtn = $("<button>").attr("class", "col-1 saveBtn").text("save")
    // console.log(document.querySelector(`#hour-${i}`))
    // console.log($(`#${i}`))
    newBtn.on("click", saveToLocal);

    timeblock.append(newP)
    timeblock.append(newText)
    timeblock.append(newBtn)
    
    parentContainer.append(timeblock)
}

function saveToLocal(){
    console.log("saved to local!")

    var EventName = document.querySelector('#time').id;
    
    var UserEvent = document.querySelector('textarea').value;

    console.log(UserEvent)
    window.localStorage.setItem(EventName, UserEvent)
}
