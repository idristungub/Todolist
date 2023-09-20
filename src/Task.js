export let list = [];

export function savePomodoroList() {
  const value = taskInput.value;
  let saveTaskContainer = `<div class="add-pomodoro-list">
        <div class="add-pomodoro-list-child1">
          <a href="" class="checkbox">
            <i class="bi bi-check-circle-fill" style="font-size: 25px"></i>
          </a>
          <p class="task-copy">${value}</p>
        </div>
        <div class="add-pomodoro-list-child2">
          <span class="pomodoro-counter">0/${noOfPomodoro}</span>
          <a href="" class="task-menu-container"
            ><i class="bi bi-three-dots-vertical" style="font-size: 25px"></i>
          </a>
        </div>
      </div>`;

  console.log(saveTaskContainer);
}
