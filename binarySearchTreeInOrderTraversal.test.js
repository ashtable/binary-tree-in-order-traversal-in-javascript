const TreeNode = require('./treeNode');
const inOrder = require('./binaryTreeInOrderTraversal');

test('null root TreeNode returns a result of empty array', () => {
  expect(inOrder(null)).toStrictEqual([]);
});

test('complete tree returns in-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = h;
  h.left = y;
  y.left = p;
  y.right = t;
  h.right = n;
  n.left = o;

  // Act & Assert
  expect(inOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});

test('left-only tree returns in-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = n;
  n.left = o;
  o.left = h;
  h.left = t;
  t.left = y;
  y.left = p;

  // Act & Assert
  expect(inOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});

test('right-only tree returns in-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = p;
  p.right = y;
  y.right = t;
  t.right = h;
  h.right = o;
  o.right = n;

  // Act & Assert
  expect(inOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});
