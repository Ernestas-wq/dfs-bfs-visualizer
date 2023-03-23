import { TreeNode } from '../types/TreeNode';

export function TreeNodeComp({ node }: { node: TreeNode }) {
  return (
    <div>
      <span className='border-2 border-sky-500 text-white'>{node.val}</span>
      {node.left && <TreeNodeComp node={node.left} />}
      {node.right && <TreeNodeComp node={node.right} />}
    </div>
  );
}
