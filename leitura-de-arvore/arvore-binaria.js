class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(root)

let tmp1 = root
let tmp2 = [tmp1]

function getLeft(node) {
  return node.left ? node.left : null
}
function getRight(node) {
  return node.right ? node.right : null
}

// while (tmp1.right !== null) {
while (tmp1.left !== null) {
  console.log(tmp1.data)

  tmp2.push(tmp1)

  tmp1 = getLeft(tmp1)
  if (!tmp1.left) {
    console.log(tmp1.data)
    console.log('prev', tmp2.data)
  }
}

//   tmp2.push(tmp1)
// }

// do {
//   console.log(tmp.data)
//   tmp = getLeft(tmp)

//   if (!tmp.left) {
//     console.log(tmp.data)
//   }
// } while (tmp.left !== null)
