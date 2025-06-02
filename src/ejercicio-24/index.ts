type TreeNode = {
  value: string;
  left?: TreeNode | null | undefined;
  right?: TreeNode | null | undefined;
};

export function isTreesSynchronized(
  tree1: TreeNode | null | undefined,
  tree2: TreeNode | null | undefined
): [boolean, string | null | undefined] {
  function isMirror(
    node1: TreeNode | null | undefined,
    node2: TreeNode | null | undefined
  ): boolean {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.value !== node2.value) return false;

    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    );
  }

  if (!tree1 && !tree2) return [true, undefined];
  if (!tree1) return [false, undefined];

  const synchronized = isMirror(tree1, tree2);
  return [synchronized, tree1.value];
}
