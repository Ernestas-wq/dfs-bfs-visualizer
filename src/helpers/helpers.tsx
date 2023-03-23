import { AnimationType } from '../types/AnimationType';
import { TreeNode } from '../types/TreeNode';
import { Animation } from '../types/Animation';

export const dfs = (root: TreeNode | null): Animation[] => {
  const stack = [];
  const animations: Animation[] = [];
  let delay = 0;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      animations.push({
        value: root.val,
        delay,
        animationType: AnimationType.PUSH,
      });
      delay += 1000;
      root = root.left;
    }

    root = stack.pop()!;
    animations.push({
      value: root.val,
      delay,
      animationType: AnimationType.POP,
    });

    delay += 1000;

    root = root.right;
  }

  return animations;
};
