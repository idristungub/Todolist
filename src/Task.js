// import {noOfPomodoro} from
import { textInput } from "./main.js";
export let list = [];
document
  .querySelector(".save-pomodoro")
  .addEventListener("click", savePomodoroList);

function savePomodoroList() {
  list.forEach(function (task, index) {
    const task = textInput.value;
    const html = `
 <div class="add-pomodoro-list">
          <div class="add-pomodoro-list-child1">
            <a href="" class="checkbox">
              <i class="bi bi-check-circle-fill" style="font-size: 25px"></i>
            </a>
            <p class="task-copy">${task}</p>
          </div>
          <div class="add-pomodoro-list-child2">
            <span class="pomodoro-counter">0/</span>
            <a href="" class="task-menu-container"
              ><i class="bi bi-three-dots-vertical" style="font-size: 25px"></i>
            </a>
          </div>
        </div>`;
  });
}
