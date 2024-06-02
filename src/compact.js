let values = [0, 1, false, 2, '', 3]

_compact(values);

function _compact(arr) {
  let result;
  result = arr.filter((item) => {
    return !item === false;
  })
  
  return result
}