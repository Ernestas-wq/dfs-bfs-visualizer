import { dfs, bfs } from './helpers/helpers';
import { tree } from './helpers/tree';
import { TreeNodeComp } from './components/TreeNodeComp';
import { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import { AnimationType } from './types/AnimationType';
import { TraverseType } from './types/TraverseType';
import { Animation } from './types/Animation';
import { ANIMATION_DELAY_MS } from './constants';
import { ActiveNode, OperationType } from './types/ActiveNode';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function App() {
  const [list, setList] = useState<number[]>([]);
  const [output, setOutput] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [activeNode, setActiveNode] = useState<ActiveNode | null>(null);
  const [traverseType, setTraverseType] = useState<TraverseType>(
    TraverseType.DFS
  );

  const stackAnimations = dfs(tree);
  const queueAnimations = bfs(tree);

  const handleAnimations = (animations: Animation[]) => {
    animations.forEach((animation) => {
      // add push operations
      if (animation.animationType === AnimationType.PUSH) {
        setTimeout(() => {
          setList((prevList) => [...prevList, animation.value]);
          setActiveNode({
            value: animation.value,
            operationType: OperationType.ADD,
          });
        }, animation.delay);
        return;
      }

      // add remove operations
      setTimeout(() => {
        setList((prevList) => {
          const newList = [...prevList];
          animation.animationType === AnimationType.DEQUE
            ? newList.shift()
            : newList.pop();
          return newList;
        });

        setActiveNode({
          value: animation.value,
          operationType: OperationType.REMOVE,
        });

        setOutput((prevOutput) => [...prevOutput, animation.value]);
      }, animation.delay);
    });
  };

  const handleStart = () => {
    setOutput([]);
    setIsAnimating(true);
    setActiveNode(null);

    setTimeout(() => {
      setIsAnimating(false);
    }, (stackAnimations.length - 1) * ANIMATION_DELAY_MS);

    handleAnimations(
      traverseType === TraverseType.DFS ? stackAnimations : queueAnimations
    );
  };

  return (
    <div className='bg-slate-900 p-5 min-h-screen'>
      <h1 className='text-center text-white text-5xl'>DFS/BFS Visualizer</h1>
      <article className='flex flex-col justify-center md:flex-row gap-5 mt-5 md:mt-8'>
        <div className='binary-tree w-full col-span-2 md:col-span-1 md:w-1/2 relative'>
          <div className='color-indicator'>
            <p className='arrow-add'>
              ADD <ArrowRightAltIcon className='arrow-add' />
            </p>
            <p className='arrow-remove'>
              REMOVE <ArrowRightAltIcon className='arrow-remove' />
            </p>
          </div>
          <TreeNodeComp node={tree} activeNode={activeNode} />
        </div>
        <ControlPanel
          output={output}
          list={list}
          isAnimating={isAnimating}
          handleStart={handleStart}
          traverseType={traverseType}
          setTraverseType={setTraverseType}
        />
      </article>
    </div>
  );
}

export default App;
