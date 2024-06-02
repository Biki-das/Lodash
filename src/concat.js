function concat(targetArray) {
    let args = arguments;
    for (let i = 1; i < args.length; i++){
     targetArray.push(args[i])
    }
  return targetArray;
}


concat([4],1,3);

