class StringBuilder{
    _value
    constructor(str){
        this._value = str
    }

    append(str){
        this._value += str
    }
    prepend(str){
        this._value=  str + this._value

        
    }
    pad(str){
        this._value=  str + this._value
        this._value += str

    }

    get value(){
        return this._value
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

