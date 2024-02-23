class nextArray{

    constructor(arr,iter) {
        this.iter=iter;
        this.arr=arr;
    }
    hasNext(){
        return this.iter<this.arr.length;
    }
    next(){
        return this.arr[this.iter++];
    }

}
arr=[1,2,3,4,5,6,7,8,9];
iter=new nextArray(arr,0);
while (iter.hasNext()){
    console.log(iter.next());
}


/*
Array.prototype=Object.create(nextArray.prototype);
arr2=[9,8,7,6,5];
while(arr2.hasNext()){
    console.log(arr2.next());
}*/
