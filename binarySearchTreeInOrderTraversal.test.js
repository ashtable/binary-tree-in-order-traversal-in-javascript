const TreeNode = require('./treeNode');
const inOrder = require('./binaryTreeInOrderTraversal');

test('null root TreeNode returns a result of empty array', () => {
  expect(inOrder(null)).toStrictEqual([]);
});

test('complete tree returns in-order traversal', () => {
  // Arrange
  const n1 = new TreeNode(1);
  const n2 = new TreeNode(2);
  const n3 = new TreeNode(3);
  const n4 = new TreeNode(4);
  const n5 = new TreeNode(5);
  const n6 = new TreeNode(6);

  const rootNode = n4;
  n4.left = n2;
  n2.left = n1;
  n2.right = n3;
  n4.right = n6;
  n6.left = n5;

  // Act & Assert
  expect(inOrder(rootNode)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('left-only tree returns in-order traversal', () => {
  // Arrange
  const n1 = new TreeNode(1);
  const n2 = new TreeNode(2);
  const n3 = new TreeNode(3);
  const n4 = new TreeNode(4);
  const n5 = new TreeNode(5);
  const n6 = new TreeNode(6);

  const rootNode = n6;
  n6.left = n5;
  n5.left = n4;
  n4.left = n3;
  n3.left = n2;
  n2.left = n1;

  // Act & Assert
  expect(inOrder(rootNode)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('right-only tree returns in-order traversal', () => {
  // Arrange
  const n1 = new TreeNode(1);
  const n2 = new TreeNode(2);
  const n3 = new TreeNode(3);
  const n4 = new TreeNode(4);
  const n5 = new TreeNode(5);
  const n6 = new TreeNode(6);

  const rootNode = n1;
  n1.right = n2;
  n2.right = n3;
  n3.right = n4;
  n4.right = n5;
  n5.right = n6;

  // Act & Assert
  expect(inOrder(rootNode)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
