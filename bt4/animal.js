class Animal{
    name;
    weight;
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
    }
    setName() {
      return this.name;
    }
    setWeight() {
      return this.weight;
    }
    toString() {
      return document.write(`tên là ${this.name}, cân nặng bằng ${this.weight}`)
    }
}