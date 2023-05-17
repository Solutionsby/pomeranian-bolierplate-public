import './styles.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { OutlinedInput } from '@mui/material';
import { useState } from 'react';

export const MaterialUIBasicElements = () => {
  const [name, setName] = useState('');

  function handleClick() {
    console.log(name);
  }
  const InputHandleClick = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <Stack spacing={2} direction="row">
        <OutlinedInput className="input-elements" onChange={InputHandleClick} />
        <Button variant="contained" onClick={handleClick}>
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};
