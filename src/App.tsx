import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='bg-slate-900 p-5 min-h-screen'>
      <h1 className='text-center text-white text-5xl'>DFS/BFS Visualizer</h1>
      <article className='grid grid-cols-2 gap-x-4 mt-4'>
        <div className='binary-tree col-span-2 md:col-span-1'>
          <div>
            <span className='border-2 border-sky-500 text-white'>4</span>
            <div>
              <span className='border-2 border-sky-500 text-white'>2</span>
              <div>
                <span className='border-2 border-sky-500 text-white'>1</span>
                <div></div>
                <div></div>
              </div>
              <div>
                <span className='border-2 border-sky-500 text-white'>3</span>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <span className='border-2 border-sky-500 text-white'>6</span>
              <div>
                <span className='border-2 border-sky-500 text-white'>5</span>
                <div></div>
                <div></div>
              </div>
              <div>
                <span className='border-2 border-sky-500 text-white'>7</span>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-5'>
          <div className='text-white'>
            <div>
              <Checkbox
                inputProps={{ 'aria-label': 'DFS' }}
                sx={{
                  color: 'rgb(14 165 233)',
                  '&.Mui-checked': {
                    color: 'rgb(14 165 233)',
                  },
                }}
              />
              DFS
            </div>
            <div>
              <Checkbox
                inputProps={{ 'aria-label': 'DFS' }}
                sx={{
                  color: 'rgb(14 165 233)',
                  '&.Mui-checked': {
                    color: 'rgb(14 165 233)',
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
                border: '1px solid rgb(14 165 233)',
                color: '#fff',
                // backgroundColor: 'rgb(14 165 233)',
                '&:hover': {
                  backgroundColor: 'rgb(14 165 233)',
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
