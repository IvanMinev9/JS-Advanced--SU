class List {
  constructor(list = []) {
    this.list = list.sort((a, b) => a - b);
    this.size = this.list.legnth;
  }

  add(element) {
    this.list.push(element);
    this.list.sort((a, b) => a - b);
    return this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index not found");
    } else {
      this.list.splice(index, 1);
      return this.size--;
    }
  }

  get(index) {
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index not found");
    } else {
      return this.list[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
