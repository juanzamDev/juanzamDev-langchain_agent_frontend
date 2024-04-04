import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAgent({user, setUser}) {
  const [personName, setPersonName] = React.useState([]);

  const names = [
    'Agente Pruebas',
    'Agente Azure',
    'Agente Licitaciones'
  ];

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setUser({
        ...user,
        agent: value
    });
    setPersonName(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }} fullWidth>
        <InputLabel shrink htmlFor="select-multiple-native">
          Agentes
        </InputLabel>
        <Select
          multiple
          required
          native
          value={personName}
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}