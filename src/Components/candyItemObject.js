class CandyItemObject {
    constructor(name,price,path){
        this.name = name;
        this.price = price;
        this.path = path;
    }

    name(){
        return this.name
    }

    price(){
        return this.price
    }

    path(){
        return this.path
    }
}

export default CandyItemObject