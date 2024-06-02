function chunk(items, size){
  let chunkResult = [];
  let count = 0;
  items.forEach((item) => {
    if(count >= items.length) return;
    let slicedParts = items.slice(count, count + size);
    chunkResult.push(slicedParts);
    count += size;
  })
  return chunkResult;
}

let nums = [1,2,3,4,5,6];
console.log(chunk(nums,1)); // [[1,2],[3,4],[5,6]]
