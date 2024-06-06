export class elementClass {
  constructor() {
    this.id = Math.floor(Math.random() * 99999999999);
    this.shape = "circle"
    this.relations = []
  }

  setElement = (element) => {
    this.element = element
    this.rect = element.getBoundingClientRect()
  }
} 