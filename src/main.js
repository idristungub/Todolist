// add a div container when user press "plus"

// onclick function for plus

// we want the task written

/*
  When the user adds or subtract it should recreate the innerHTML
  We want the each todo have its own state for + and - 
*/

// when button pressed text value put into console
let noOfPomodoro = 0;
const mainContainer = document.querySelector("#task-container");
export let textInput = document.querySelector(".task-box");
let plusButton = document.querySelector(".plus-container");

// add eventlistener on keyup and click

// add eventlistener onclick action takes place producing addContainer
export function addTodoOnClick(e) {
  e.preventDefault();
  const value = textInput.value;
  // only variables are allowed inside html from javascript
  let addContainer = `<div class="add-container">
        <p class="task">${value}</p>
        <p id="No-timelapse">No. of Pomodoro:</p>
        <div class="timelapse-generator">
          <span id="no-of-pomodoro" style="font-size: 30px">0</span>
          <div class="btns">
            <a href="" class="btn-up"
              ><i class="bi bi-arrow-up-circle-fill" style="font-size: 30px" onclick="incrementButton(event)"></i
            ></a>
            <a href="" class="btn-down"
              ><i
                class="bi bi-arrow-down-circle-fill"
                style="font-size: 30px"
                onclick= "decrementButton(event)"
              ></i
            ></a>
          </div>
        </div>
        <p><a href="" id="note">+ Add Note</a></p>
         <button id="save-pomodoro" onclick="savePomodoroList()">Save</button>
        <button id="cancel-pomodoro" onclick="cancelPomodoroList()">Cancel</button>
      </div>
  `;

  mainContainer.innerHTML = addContainer;

  if (value === "") {
    console.log("nothing");
    return; // no need for return in event listeners
  }
}

// button function to increase\decrease timelapses

let incrementButton = (event) => {
  event.preventDefault();
  noOfPomodoro++;
  // button up refreshing
  const noOfPomodoroSpan = document.querySelector("#no-of-pomodoro");
  noOfPomodoroSpan.innerHTML = noOfPomodoro;
};

let decrementButton = (event) => {
  event.preventDefault();
  if (!noOfPomodoro) return;
  noOfPomodoro--;
  const noOfPomodoroSpan = document.querySelector("#no-of-pomodoro");
  noOfPomodoroSpan.innerHTML = noOfPomodoro;
};

// add form when "+ Add Note" is pressed

// when "add" happens the task is added on top of "mainContainer"
