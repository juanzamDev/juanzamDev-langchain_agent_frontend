import React, {useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAgents } from "@/app/api/createUser";

export default function SelectAgent({user, setUser}) {
  const [personName, setPersonName] = useState([]);
  const [agents, setAgents] = useState([]);
  const names = agents;

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
        agents: value
    });
    setPersonName(value);
  };

  useEffect(()=>{
    const fetchData = async () => {
      try {
          const agentsData = await getAgents();
          setAgents(agentsData)
      } catch (error) {
          console.error('Error fetching agents:', error);
      }
    };
    fetchData();
  },[])

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
          {names?.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}