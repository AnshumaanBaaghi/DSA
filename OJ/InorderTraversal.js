// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
var ans = [];
function inorderTraversal(root) {
  if (root == null) {
    return;
  }
  inorderTraversal(root.left);
  ans.push(root.val);
  inorderTraversal(root.right);
  return ans;
}

// in
