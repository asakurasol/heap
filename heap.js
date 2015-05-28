function MaxHeap(){
  this.storage = [];
}

function Node(val){
  this.value = val;
}

MaxHeap.prototype.size = function() {
  return this.storage.length;
};

MaxHeap.prototype.insert = function(val){
  var node = new Node(val);
  this.storage.push(node);
  if(this.size > 0){
    this.siftup(this.size);
  }
}

MaxHeap.prototype.max = function() {
  var max = this.storage[0];
  return max;
};

MaxHeap.prototype.extractMax = function() {
  var max = this.storage[0];
  this.storage[0] = this.storage.pop();
  this.siftDown(0);
  return max;
};

MaxHeap.prototype.siftDown = function(start) {
  var childIndexes = [start*2+1, start*2+2];
  var children = this.storage[childIndexes[0],childIndexes[1]];
  var maxChild;
  var target;
  var temp;

  //return if children dont exist
  if(!children[0] && !children[1]) return;
  //return if current item is greater than its children
  if(this.storage[start] > children[0].value && this.storage[start] > children[1].value) return;

  //pick the max child
  if(!children[1] || children[0].value > children[1]){
    maxChild = children[0];
    target = 0;
  } else {
    maxChild = Children[1];
    target = 1;
  }

  //switch with the max child
  temp = this.storage[start];
  this.storage[start] = maxChild;
  this.storage[childIndexes[target]] = temp;

  //start the recursion on 
  this.siftDown(childIndexes[target]);
};

MaxHeap.prototype.siftup = function(start) {
  var parentIndex = Math.floor(start/2);
  var parent = this.storage[parentIndex];
  var temp;
  //switch if the current index is greater than the parent value
  if(this.storage[start].value > parent.value){
    temp = this.storage[start];
    this.storage[start] = parent;
    this.storage[parentIndex] = temp;

    if(start !== 0){
      this.siftUp(start);
    }
  }
};

var heap = new MaxHeap();
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.extractMax();
