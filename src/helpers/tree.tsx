import { TreeNode } from '../types/TreeNode';

export const tree: TreeNode = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: {
        val: -3,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 10,
        left: null,
        right: null,
      },
    },
  } as TreeNode,
  right: {
    val: 6,
    left: {
      val: 5,
      left: {
        val: 11,
        left: null,
        right: null,
      },
      right: {
        val: 12,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: {
        val: 13,
        left: null,
        right: null,
      },
      right: {
        val: 14,
        left: null,
        right: null,
      },
    },
  } as TreeNode,
};
