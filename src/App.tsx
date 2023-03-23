import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { dfs } from './helpers/helpers';
import { tree } from './tree';
import { SingleTreeNode } from './SingleTreeNode';
function App() {
  dfs(tree);
  return (
    <div className='bg-slate-900 p-5 min-h-screen'>
      <h1 className='text-center text-white text-5xl'>DFS/BFS Visualizer</h1>
      <article className='flex flex-col justify-center md:flex-row gap-5 mt-4'>
        <div className='binary-tree col-span-2 md:col-span-1'>
          <SingleTreeNode node={tree} />
        </div>
        <div className='ml-5 '>
          <div className='text-white'>
            <div>
              <Checkbox
                inputProps={{ 'aria-label': 'DFS' }}
                sx={{
                  color: '#0EA5E9',
                  '&.Mui-checked': {
                    color: '#0EA5E9',
                  },
                }}
              />
              DFS
            </div>
            <div>
              <Checkbox
                inputProps={{ 'aria-label': 'DFS' }}
                sx={{
                  color: '#0EA5E9',
                  '&.Mui-checked': {
                    color: '#0EA5E9',
                  },
                }}
              />
              BFS
            </div>
            <Button
              variant='outlined'
              size='large'
              sx={{
                marginLeft: '9px',
                border: '1px solid #0EA5E9',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#0EA5E9',
                },
              }}
            >
              START
            </Button>

            <div className='mt-3 ml-2'>
              <p className='text-xl'>STACK: </p>
              <div className='text-5xl text-sky-500'>[ ]</div>
            </div>
            <div className='mt-3 ml-2'>
              <p className='text-xl'>OUTPUT: </p>
              <div className='text-5xl text-sky-500'>[ ]</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
