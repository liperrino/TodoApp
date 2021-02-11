class TodoModel {
  constructor(key, name, place, day, start, end, isChecked=false) {
    this.key = key;
    this.name = name;
    this.place = place;
    this.day = day;
    this.start = start;
    this.end = end;
    this.isChecked = isChecked;
  }
}

export default TodoModel;
