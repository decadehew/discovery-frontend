/**
 * 我想面試題都會考這個去重覆陣列
 */

function unique1 (arr) {
  const result = [];
  arr.forEach(item => {
    if (!(result.includes(item))) {
      result.push(item);
    }
  })
  return result;
}

function unique2 (arr) {
  return arr.filter((item, index, sourceArr) => {
    return sourceArr.indexOf(item) === index;
  })
}

function unique3 (arr) {
  const result = new Set(arr);
  return [...result]
}


const arr = [1,2,2,2,3,5,5,6,6];
console.log(unique2(arr)); // [1,2,3,5,6]