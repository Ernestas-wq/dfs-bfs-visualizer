import { dfs } from './helpers/helpers';
import { tree } from './helpers/tree';
import { TreeNodeComp } from './components/TreeNodeComp';
import { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import { AnimationType } from './types/AnimationType';

function App() {
  const [output, setOutput] = useState<number[]>([]);
  const [stack, setStack] = useState<number[]>([]);
  const animations = dfs(tree);

  const handleStart = () => {
    animations.forEach((animation) => {
      if (animation.animationType === AnimationType.PUSH) {
        setTimeout(() => {
          setStack((prevStack) => [...prevStack, animation.value]);
        }, animation.delay);
        return;
      }

      setTimeout(() => {
        setStack((prevStack) => {
          const newStack = [...prevStack];
          newStack.pop();
          return newStack;
        });
        setOutput((prevOutput) => [...prevOutput, animation.value]);
      }, animation.delay);
    });
  };

  return (
    <div className='bg-slate-900 p-5 min-h-screen'>
      <h1 className='text-center text-white text-5xl'>DFS/BFS Visualizer</h1>
      <article className='flex flex-col justify-center md:flex-row gap-5 mt-4'>
        <div className='binary-tree col-span-2 md:col-span-1'>
          <TreeNodeComp node={tree} />
        </div>
        <ControlPanel output={output} stack={stack} handleStart={handleStart} />
      </article>
    </div>
  );
}

export default App;
