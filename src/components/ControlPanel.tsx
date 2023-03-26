import Button from '@mui/material/Button';
import { TraverseType } from '../types/TraverseType';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

type Props = {
  output: number[];
  list: number[];
  isAnimating: boolean;
  handleStart: () => void;
  traverseType: TraverseType;
  setTraverseType: (type: TraverseType) => void;
};

const ControlPanel = ({
  output,
  list,
  isAnimating,
  handleStart,
  traverseType,
  setTraverseType,
}: Props) => {
  const handleChange = (value: TraverseType) => {
    setTraverseType(value);
  };

  return (
    <div className='w-full md:w-1/2 sm:ml-5'>
      <div className='text-white'>
        <div className='ml-2'>
          <FormControl sx={{ minWidth: 150 }} className='select-container'>
            <InputLabel
              id='demo-simple-select-autowidth-label'
              sx={{
                color: '#fff',
                '&.Mui-focused': {
                  color: '#0EA5E9',
                },
              }}
            >
              Traverse Type
            </InputLabel>

            <Select
              labelId='demo-simple-select-autowidth-label'
              value={traverseType}
              className='test'
              label='TraverseType'
              sx={{
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0EA5E9',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0EA5E9',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0EA5E9',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0EA5E9',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
              }}
              onChange={(e) => handleChange(e.target.value as TraverseType)}
            >
              <MenuItem value={TraverseType.DFS}>DFS</MenuItem>
              <MenuItem value={TraverseType.BFS}>BFS</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={`w-fit ${isAnimating ? 'cursor-not-allowed' : ''}`}>
          <Button
            variant='outlined'
            size='large'
            disabled={isAnimating}
            sx={{
              border: '2px solid #0EA5E9',
              margin: '16px 0 0 10px',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#0EA5E9',
                border: '2px solid #fff',
              },
              '&.Mui-disabled': {
                border: '2px solid grey',
                cursor: 'not-allowed',
                color: 'grey',
              },
            }}
            onClick={() => handleStart()}
          >
            START
          </Button>
        </div>

        <div className='mt-3 ml-2'>
          <p className='text-xl'>
            {traverseType === TraverseType.BFS ? 'QUEUE : ' : 'STACK : '}
          </p>
          <div className='text-5xl text-sky-500'>
            [
            {list.map((val, i) => (
              <span key={i} className='text-4xl text-white'>
                {val} {i !== list.length - 1 && ', '}
              </span>
            ))}
            ]
          </div>
        </div>
        <div className='mt-3 ml-2'>
          <p className='text-xl'>OUTPUT :</p>
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
