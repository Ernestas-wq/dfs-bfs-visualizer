import { TreeNode } from './types/TreeNode';

export function SingleTreeNode({ node }: { node: TreeNode }) {
  return (
    <div>
      <span className='border-2 border-sky-500 text-white'>{node.val}</span>
      {node.left && <SingleTreeNode node={node.left} />}
      {node.right && <SingleTreeNode node={node.right} />}
    </div>
  );
}
