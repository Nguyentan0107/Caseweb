class ProductCase {
    name;
    price;
    quantity;
    img;
    description;

    constructor(name,price,quantity,img,description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.img = img;
        this.description = description;
    }
    get name(){
        return this.name;
    }
    set name(value) {
        return this.name = value;
    }
    get price(){
        return this.price;
    }
    set price(value) {
        return this.price = value;
    }
    get quantity() {
        return this.quantity;
    }
    set quantity(vailue) {
        return this.quantity = vailue;
    }
    get img() {
        return this.img;
    }
    set img(value) {
        return this.img = value;
    }
    get description() {
        return this.description;
    }
    set description(vailue) {
        return this.description = vailue;
    }
}