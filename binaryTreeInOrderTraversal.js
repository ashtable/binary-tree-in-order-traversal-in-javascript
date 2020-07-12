const inOrder = function (node) {
  let result = [];
  if (node) {
    result = result.concat(inOrder(node.left));
    result.push(node.value);
    result = result.concat(inOrder(node.right));
  }
  return result;
}

module.exports = inOrder;
