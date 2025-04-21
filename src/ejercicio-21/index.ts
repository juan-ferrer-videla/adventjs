interface Node {
  value: string;
  left: Node | null;
  right: Node | null;
}

export function treeHeight(tree: Node | null): number {
  if (!tree) return 0;
  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);
  return 1 + Math.max(leftHeight, rightHeight);
}
