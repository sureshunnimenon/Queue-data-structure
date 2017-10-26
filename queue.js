var Queue = function(){
  this.storage = {};
  this.count=0;
  this.lowestCount=0;
  
  // method to enqueue i.e., add an element to 'end' of the data structure. same as push in array.
  this.enqueue= function(value){
    this.storage[this.count]= value;
    this.count++;
  }; 
  
  // method to dequeue i.e, remove element from 'front' of the data structure, same as 'shift' in array
  this.dequeue = function(){
    if(this.count-this.lowestCount === 0){
      return undefined;
    }
    var result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
  };
  
  //method to find length/size
  this.size = function(){
    return this.count-this.lowestCount;
  };
  
  //method to return the queue elements
  this.print = function(){
    return this.storage;
  }
}

var myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(5);
console.log(myQueue.size());
myQueue.dequeue();
console.log(myQueue.size());
console.log(myQueue.print());
