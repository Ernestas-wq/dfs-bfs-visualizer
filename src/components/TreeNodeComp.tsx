import { TreeNode } from '../types/TreeNode';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ActiveNode, OperationType } from '../types/ActiveNode';

type Props = {
  node: TreeNode;
  activeNode: ActiveNode | null;
};

export function TreeNodeComp({ node, activeNode }: Props) {
  const isActive = activeNode?.value === node.val;
  return (
    <div className='tree-branch'>
      <span
        className={`tree-node border-2 border-sky-500 text-white h-5 md:h-12 
        ${
          isActive && activeNode?.operationType === OperationType.ADD
            ? 'active-add'
            : ''
        }
        ${
          isActive && activeNode?.operationType === OperationType.REMOVE
            ? 'active-remove'
            : ''
        }
        `}
      >
        <p className='absolute'>{node.val}</p>
        {isActive && (
          <ArrowRightAltIcon
            className={`arrow ${
              activeNode?.operationType === OperationType.ADD
                ? 'arrow-add'
                : 'arrow-remove'
            }
            `}
          />
        )}
      </span>
      {node.left && <TreeNodeComp node={node.left} activeNode={activeNode} />}
      {node.right && <TreeNodeComp node={node.right} activeNode={activeNode} />}
    </div>
  );
}
