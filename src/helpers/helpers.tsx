import { AnimationType } from '../types/AnimationType';
import { TreeNode } from '../types/TreeNode';
import { Animation } from '../types/Animation';
import { ANIMATION_DELAY_MS } from '../constants';

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
      delay += ANIMATION_DELAY_MS;
      root = root.left;
    }

    root = stack.pop()!;
    animations.push({
      value: root.val,
      delay,
      animationType: AnimationType.POP,
    });

    delay += ANIMATION_DELAY_MS;

    root = root.right;
  }

  return animations;
};

export const bfs = (root: TreeNode): Animation[] => {
  const q: TreeNode[] = [root];
  const animations: Animation[] = [
    { value: root.val, delay: 0, animationType: AnimationType.PUSH },
  ];
  let delay = 1000;

  while (q.length) {
    const curr = q.shift()!;
    animations.push({
      value: curr.val,
      delay,
      animationType: AnimationType.DEQUE,
    });

    delay += ANIMATION_DELAY_MS;
    for (const node of [curr.left, curr.right]) {
      if (node) {
        animations.push({
          value: node.val,
          delay,
          animationType: AnimationType.PUSH,
        });
        delay += ANIMATION_DELAY_MS;

        q.push(node);
      }
    }
  }

  return animations;
};
