let arr = [1, 2, 3, 4, 5]
let result = []

for (let index of Object.keys(arr)) {
  if (index == 2) {
    arr.splice(index, 1)
  }
}
console.log(arr)
