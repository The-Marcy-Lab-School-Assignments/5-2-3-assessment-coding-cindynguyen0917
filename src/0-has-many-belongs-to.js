const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, deadline) {
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.id = getId();
    this.isDone = false;
    this.deadline = deadline;
  }
  getDeadline() {
    console.log(`Your deadline for this task is ${this.deadline}!`)
    return job.deadline;
  }
}


class ToDoList {
  #tasks = [];
  static #allLists = [];
  constructor(name, subject) {
    this.id = getId();
    this.name = name;
    this.subject = subject;

    ToDoList.#allLists.push(this);
  }
  createItem(description, priorityLevel) {
    const addedTask = new ToDoItem(description, priorityLevel);
    this.#tasks.push(addedTask)
    return addedTask;
  }
  getItems() {
    return [...this.#tasks]
  }
  getCompletedCount() {
    return this.#tasks.filter((task) => task.isDone === true).length
  }
  static list() {
    return [...ToDoList.#allLists];
  }
  static findBy(id) {
    return ToDoList.#allLists.filter((list) => list.id === id)[0]
  }
  getSummary() {
    console.log(`These are your tasks for ${this.subject} list: ${this.#tasks.join(', ')}.`)
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};