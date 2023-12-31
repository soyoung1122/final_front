import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const JobRole = ({ onSelect, disabled, selectedRow }) => {
  //   console.log('v:' + value);
  //   console.log('d:' + disabled);

  const jobRoles = [
    { label: '직무1', qual: '- 자격조건1\n- 자격조건1', prefer: '- 우대사항1\n- 우대사항1', duties: '- 수행업무1\n- 수행업무1' },
    { label: '직무2', qual: '자격조건2', prefer: '- 우대사항2\n -우대사항2\n- 우대사항2', duties: '- 수행업무2\n- 수행업무2' },
    { label: '직무3', qual: '- 자격조건3\n- 자격조건3', prefer: '- 우대사항3\n- 우대사항3', duties: '- 수행업무3\n- 수행업무3' },
    { label: '직무4', qual: '- 자격조건4\n- 자격조건4', prefer: '- 우대사항4\n- 우대사항4', duties: '- 수행업무4\n- 수행업무4' },
    { label: '직무5', qual: '- 자격조건5\n- 자격조건5', prefer: '- 우대사항5\n- 우대사항5', duties: '- 수행업무5\n- 수행업무5' }
  ];

  const selectedOptionIndex = jobRoles.findIndex((option) => option.label === selectedRow.job_role);
  //   console.log('index:' + selectedOptionIndex);
  //   console.log(selectedRow);

  return (
    <Autocomplete
      defaultValue={jobRoles[selectedOptionIndex]}
      disableClearable
      options={jobRoles}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="직무 선택"
          variant="outlined"
          name="job_role"
          size="small"
          // value={selectedOption ? selectedOption.label : value}
        />
      )}
      onChange={(event, value) => onSelect(value)}
      disabled={disabled} // Autocomplete를 비활성화
    />
  );
};

export default JobRole;
