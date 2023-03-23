import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

type Props = {
  output: number[];
  stack: number[];
  handleStart: () => void;
};

const ControlPanel = ({ output, stack, handleStart }: Props) => {
  return (
    <div className='ml-5'>
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
          onClick={() => handleStart()}
        >
          START
        </Button>

        <div className='mt-3 ml-2'>
          <p className='text-xl'>STACK: </p>
          <div className='text-5xl text-sky-500'>
            [
            {stack.map((val, i) => (
              <span key={i} className='text-4xl text-white'>
                {val} {i !== output.length - 1 && ', '}
              </span>
            ))}
            ]
          </div>
        </div>
        <div className='mt-3 ml-2'>
          <p className='text-xl'>OUTPUT: </p>
          <div className='text-5xl text-sky-500'>
            [
            {output.map((val, i) => (
              <span key={i} className='text-4xl text-white'>
                {val} {i !== output.length - 1 && ', '}
              </span>
            ))}
            ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
