var array = [1, 3, 5, 7, 2, 2, 4, 6, 1, 3, 4, 6, 6];
for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] == array[j]) {
      array.splice(j, 1);
      //   以防后元素自动补位跳过
      j--;
    }
  }
}
console.log(array);
