class Stack{
    #storage
    #head
    constructor(){
        this.#storage = {}
        this.#head = 0;
    }

    size(){
        return this.#head;
    }

    empty(){
        return this.#head > 0 ? false : true;
    }

    push(value){
        this.#storage[this.#head] = value;
        this.#head += 1;
    }

    top(){
        let temp;
        if(this.#head > 0){
            temp = this.#storage[this.#head - 1];
        }
        return temp;
    }

    pop(){
        let temp;
        if(this.#head > 0){
            temp = this.#storage[this.#head - 1];
            delete this.#storage[this.#head - 1];
            this.#head -= 1;
        }
        return temp;
    }
}