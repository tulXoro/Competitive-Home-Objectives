let objectives = {
  "objectives": [
    {
      "id": 1,
      "label": "wash_dishes",
      "name": "Wash Dishes"
    },
    {
      "id": 2,
      "label": "laundry",
      "name": "Do the Laundry"
    },
    {
      "id": 3,
      "label": "fix_bed",
      "name": "Fix a Bed"
    },
    {
      "id": 4,
      "label": "vacuum",
      "name": "Vacuum a Room"
    },
    {
      "id": 5,
      "label": "dinner",
      "name": "Cook Dinner"
    },
    {
      "id": 6,
      "label": "plants",
      "name": "Water Plants"
    },
    {
      "id": 7,
      "label": "mop_the_floor",
      "name": "Mop the Floor"
    },
    {
      "id": 8,
      "label": "wash_car",
      "name": "Wash A Car"
    },
    {
      "id": 9,
      "label": "feed_the_pets",
      "name": "Feed the Pets"
    },
    {
      "id": 10,
      "label": "dust_the_shelves",
      "name": "Dust the Shelves"
    },
    {
      "id": 11,
      "label": "sweep_the_floor",
      "name": "Sweep the Floor"
    },
    {
      "id": 12,
      "label": "mow_the_lawn",
      "name": "Mow the Lawn"
    },
    {
      "id": 13,
      "label": "clean_room",
      "name": "Clean a Room"
    },
    {
      "id": 14,
      "label": "clean_backpack",
      "name": "Clean a Backpack"
    },
    {
      "id": 15,
      "label": "homework",
      "name": "Do Homework"
    },
    {
      "id": 16,
      "label": "retile",
      "name": "Retile the Roof"
    },
    {
      "id": 17,
      "label": "toilet",
      "name": "Scrub the Toilet"
    },
    {
      "id": 18,
      "label": "repair_shed",
      "name": "Repair the Shed"
    },
    {
      "id": 19,
      "label": "weeds",
      "name": "Pull Some Weeds"
    },
    {
      "id": 20,
      "label": "set_table",
      "name": "Set the Table"
    },
    { 
      "id": 21,
      "label": "text",
      "name": "Text Someone"
    },
    { 
      "id": 22,
      "label": "emails",
      "name": "Check Emails"
    },
    { 
      "id": 23,
      "label": "pushups",
      "name": "Do 10 Pushups"
    },
    { 
      "id": 24,
      "label": "situps",
      "name": "Do 10 Situps"
    },
    { 
      "id": 25,
      "label": "clean_blinds",
      "name": "Clean the Blinds"
    },
    { 
      "id": 26,
      "label": "garage",
      "name": "Clear Out the Garage"
    },
    { 
      "id": 27,
      "label": "carpets",
      "name": "Scrub the Carpets"
    },
    {
      "id": 28,
      "label": "pool",
      "name": "Clean Out the Pool"
    },
    { 
      "id": 29,
      "label": "desk",
      "name": "Clean a Desk"
    },
    { 
      "id": 30,
      "label": "closet",
      "name": "Organize a Closet"
    },
    { 
      "id": 31,
      "label": "sweep",
      "name": "Sweep the Floor"
    },
    { 
      "id": 32,
      "label": "trash",
      "name": "Take Out a Trashbag"
    }
  ]
}

let playerList = [];
let gameState = "Not_Ready";

let playerCount = 0;

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
 
}

/*
document.getElementById("startButton").onclick = function() { startApp() };
document.getElementById("refreshButton").onclick = function() { refresh() };*/

var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Add Player buttons
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("playerName").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  console.log(playerList);
  if (inputValue === '') {
    alert("You must type something!");
  } else if(playerList.some(player => player.name === inputValue)) {
    alert("Please input a unique name for each player!");
  } else {
    document.getElementById("playerList").appendChild(li);
    playerList[playerCount++] = new Player(inputValue);
  }
  document.getElementById("playerName").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      console.log(playerList);
      playerList.splice(i);
      console.log(playerList);
      playerCount--;
    }
  }
}

function refresh() { //Gets players
  clearLeaderBoard();

  playerList.sort((a, b) => (a.score > b.score) ? -1 : 1);
      
  var ol = document.getElementById("LeaderBoards");
  
    for(var i = 0; (i<playerCount); i++) {
        var li = document.createElement("li");
        li.id = playerList[i].name
        li.innerHTML = playerList[i].name;
        ol.appendChild(li);
      }

  var ol = document.getElementById("scoreLeaderboards");

    for(var i = 0; (i<playerCount); i++) {
      var li = document.createElement("li");
      li.id = playerList[i].name + "_score";
      li.innerHTML = playerList[i].score;
      ol.appendChild(li);
    }

/*
    var ol = document.getElementById("scoreLeaderboards");
    for(var i = 0; i<playerCount; i++) {
      var li = document.createElement("li");
      li.id = playerList[i].name + "_score";
      li.innerHTML = 0;
      ol.appendChild(li);
    }*/
      
}

var isVis = false;
function startApp() { //Starts game
    // hides element
    var button = document.getElementById("startingScreen");
    if(playerCount <= 0) {
      alert("No players detected!");
      return;
    }
      
    // if (button.style.display === "none") {
    //   button.style.display = "block";
    // } else {
    //   button.style.display = "none";
    // }
    var elem = document.getElementById("appBody");
    var outerGrid = document.getElementById("outerGrid");
    var p2inst = document.getElementById("instructions");

        if(!isVis)
        {
            elem.style.visibility = 'visible' ;
            p2inst.style.visibility = 'visible' ;
            outerGrid.style.visibility = 'hidden';
            isVis = true;
        }
        else
        {
            elem.style.visibility = 'hidden' ;
            p2inst.style.visibility = 'hidden' ;
            outerGrid.style.visibility = 'visible' ;
            isVis = false;
        }

    gameState = "Ready";

    var ol = document.getElementById("LeaderBoards");
    for(var i = 0; i<playerCount; i++) {
      var li = document.createElement("li");
      li.id = playerList[i].name;
      li.innerHTML = playerList[i].name;
      ol.appendChild(li);
    }

    var ol2 = document.getElementById("scoreLeaderboards");
    for(var i = 0; i<playerCount; i++) {
      var li = document.createElement("li");
      li.id = playerList[i].name + "_score";
      li.innerHTML = playerList[i].score;
      ol.appendChild(li);
    }
    generateObjectives(7); //////////////////////
    refresh();
}

function generateObjectives(num) {
  for(var i = 0; i<num; i++) {
    var random = Math.floor(Math.random() * objectives.objectives.length);
    
    /*
    var reply_click = function() {
    alert("Button clicked, id "+this.id+", text"+this.innerHTML);
}
document.getElementById('1').onclick = reply_click;
document.getElementById('2').onclick = reply_click;
document.getElementById('3').onclick = reply_click;*/
    // current objectives
    var ol = document.getElementById("objectivesCurrentPoints");
    var li = document.createElement("li");

    li.id = objectives.objectives[random].id + "_" + objectives.objectives[random].label;
    li.onclick = completeTask;
    li.innerHTML = objectives.objectives[random].name;

    ol.appendChild(li);

  }

}

function clearLeaderBoard() {
  for(var i = 0; i < playerCount; i++) {
    var li = document.getElementById(playerList[i].name);
    li.remove();
  }
  for(var i = 0; i < playerCount; i++) {
    var li = document.getElementById(playerList[i].name + "_score");
    li.remove();
  }
}

var completeTask = function() {/*
  alert("Button clicked, id "+this.id+", text"+this.innerHTML);*/
  var input = prompt("Please enter your player name" /*+ this.id*/);
  var temp = new Player(input);
  if (input == null || input == "" || !playerList.some(player => player.name === input)) {
    alert("Could not link player to in-game player. Maybe you typed it wrong?");
  }else {
    var ol = document.getElementById("completeObj");
    var li2 = document.createElement("li");
    li2.innerHTML = this.innerHTML;
    li2.id = this.id;
    givePoints(input);
    ol.appendChild(li2);
    this.remove();

    generateObjectives(1);

  }
}

function givePoints(player) {
  for(var i = 0; i<playerCount; i++) {
    if(playerList[i].name == player)
      playerList[i].score+=1;
  }
  refresh();
}