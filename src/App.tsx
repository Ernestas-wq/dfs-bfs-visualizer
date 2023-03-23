import { dfs, bfs } from './helpers/helpers';
import { tree } from './helpers/tree';
import { TreeNodeComp } from './components/TreeNodeComp';
import { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import { AnimationType } from './types/AnimationType';
import { TraverseType } from './types/TraverseType';
import { Animation } from './types/Animation';

function App() {
  const [list, setList] = useState<number[]>([]);
  const [output, setOutput] = useState<number[]>([]);
  const [traverseType, setTraverseType] = useState<TraverseType>(
    TraverseType.DFS
  );

  const stackAnimations = dfs(tree);
  const queueAnimations = bfs(tree);

  const handleAnimations = (animations: Animation[]) => {
    animations.forEach((animation) => {
      if (animation.animationType === AnimationType.PUSH) {
        setTimeout(() => {
          setList((prevList) => [...prevList, animation.value]);
        }, animation.delay);
        return;
      }

      setTimeout(() => {
        setList((prevList) => {
          const newStack = [...prevList];
          AnimationType.DEQUE ? newStack.shift() : newStack.pop();
          return newStack;
        });
        setOutput((prevOutput) => [...prevOutput, animation.value]);
      }, animation.delay);
    });
  };

  const handleStart = () => {
    setOutput([]);
    handleAnimations(
      traverseType === TraverseType.DFS ? stackAnimations : queueAnimations
    );
  };

  return (
    <div className='bg-slate-900 p-5 min-h-screen'>
      <h1 className='text-center text-white text-5xl'>DFS/BFS Visualizer</h1>
      <article className='flex flex-col justify-center md:flex-row gap-5 mt-5'>
        <div className='binary-tree w-full col-span-2 md:col-span-1 md:w-1/2'>
          <TreeNodeComp node={tree} />
        </div>
        <ControlPanel
          output={output}
          list={list}
          handleStart={handleStart}
          traverseType={traverseType}
          setTraverseType={setTraverseType}
        />
      </article>
    </div>
  );
}

export default App;
