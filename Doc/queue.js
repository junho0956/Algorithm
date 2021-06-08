class Queue{
    #storage
    #top
    #end
    constructor(){
        this.#storage = {};
        this.#top = 0;
        this.#end = -1;
    }

    size(){
        return this.#end - this.#top + 1;
    }

    empty(){
        if(this.size()) return false;
        else return true;
    }

    push(value){
        this.#end += 1;
        this.#storage[this.#end] = value;
    }

    front(){
        let temp;
        if(this.#end - this.#top >= 0){
            temp = this.#storage[this.#top];
        }
        return temp;
    }

    pop(){
        let temp;
        if(this.#end - this.#top >= 0){
            temp = this.#storage[this.#top];
            delete this.#storage[this.#top];
            this.#top += 1;
        }
        return temp;
    }
}