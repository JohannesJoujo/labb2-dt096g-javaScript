class nextArray2{
    constructor(arr,iter) {
        this.iter=iter;
        this.arr=arr;
    }
    hasNext=function (){
        return this.iter<this.arr.length;
    }

    next=function (){
        return this.arr[this.iter++];
    }
}

Array.prototype.iter=function (){
    const it=new nextArray2(this,0)
    while (it.hasNext()){
        console.log(it.next());
    }
}

arr=[9,8,7,6,5,4];
arr.iter();