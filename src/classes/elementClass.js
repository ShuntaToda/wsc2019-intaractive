export class elementClass {
  constructor(startX, startY) {
    this.id = Math.floor(Math.random() * 99999999999);
    this.shape = "circle"
    this.relations = []
    this.startX = startX
    this.startY = startY
  }

  setElement = (element) => {
    this.element = element
    this.rect = element.getBoundingClientRect()
  }

  setRelation = (childElement) => {
    this.relations = [...this.relations, childElement.id]
  }

  setRelations = (relations) => {
    this.relations = relations
  }
} 