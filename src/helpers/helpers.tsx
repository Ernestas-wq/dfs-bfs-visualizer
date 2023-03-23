import { TreeNode } from '../types/TreeNode';

export const dfs = (root: TreeNode | null): void => {
  const stack = [];
  const output: number[] = [];

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    output.push(root.val);
    root = root.right;
  }
  console.log(output);
};
