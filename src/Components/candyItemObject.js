class CandyItemObject {
    constructor(name,price,path,barcode){
        this.name = name;
        this.price = price;
        this.path = path;
        this.barcode = barcode;
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

    barcode(){
        return this.barcode
    }
}

export default CandyItemObject