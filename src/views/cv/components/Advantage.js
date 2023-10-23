{
  /* // ==============================|| 우대사항 ||============================== // */
}

import { CheckCircleOutline, CheckCircle } from '@mui/icons-material';
import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import { useState } from 'react';

const Advantage = () => {
  //병역 분류
  const [militaryDetatil, setMilitaryDetatil] = React.useState('');
  //장애 분류
  const [obstacleDetail, setObstacleDetail] = React.useState('');

  const military_detail_handleChange = (event) => {
    setMilitaryDetatil(event.target.value);
  };

  const obstacle_detail_handleChange = (event) => {
    setObstacleDetail(event.target.value);
  };

  const advantageTypeArr = ['병역', '보훈 대상', '장애', '고용지원금 대상', '취업보호 대상'];
  const advantageDetail = {
    병역: ['군필', '미필', '면제', '해당없음'],
    장애: ['중증', '경증', '1급', '2급', '3급', '4급', '5급', '6급']
  };

  //체크 여부
  const [checkedItems, setCheckedItems] = useState([]);

  const isChecked = (event) => {
    if (checkedItems.includes(event.target.value)) {
      // console.log('이미 체크된 항목입니다.');
      setCheckedItems(checkedItems.filter((item) => item !== event.target.value));
    } else {
      // 배열에 추가
      setCheckedItems((prev) => [...prev, event.target.value]);
      // console.log('Checked! : ' + event.target.value);
      // console.log(checkedItems);
    }
  };

  return (
    <>
      <Divider color="#4682B4" sx={{ mb: 2.5, height: 5, width: '100%' }} />
      <Grid item xs={12}>
        <Grid item xs={12} sx={{ mb: 2.5 }}>
          {/* <Box display={'flex'} flexDirection={'row'} sx={{ gap: 2.5 }}> */}
          <Grid item xs={12}>
            <div>
              <FormGroup row>
                {advantageTypeArr.map((type, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox icon={<CheckCircleOutline />} checkedIcon={<CheckCircle />} value={type} onChange={isChecked} />}
                    label={type}
                  />
                ))}
              </FormGroup>
            </div>
          </Grid>

          {checkedItems.includes('병역') && (
            <Grid item xs={12} sx={{ mb: 2.5 }}>
              <Box display={'flex'} flexDirection={'row'} sx={{ gap: 2.5 }}>
                <Grid item xs={4}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Advantage Type</InputLabel>
                      <Select value={militaryDetatil} onChange={military_detail_handleChange}>
                        {advantageDetail['병역'].map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth label="Advantage Detail" color="primary" type="text" defaultValue="세부 사항" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox icon={<CheckCircleOutline />} checkedIcon={<CheckCircle />} />}
                      label={'수집동의'}
                    />
                  </FormGroup>
                </Grid>
              </Box>
            </Grid>
          )}

          {checkedItems.includes('장애') && (
            <Grid item xs={12}>
              <Box display={'flex'} flexDirection={'row'} sx={{ gap: 2.5 }}>
                <Grid item xs={4}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Advantage Type</InputLabel>
                      <Select value={obstacleDetail} onChange={obstacle_detail_handleChange}>
                        {advantageDetail['장애'].map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={4} sx={{ gap: 2.5 }}>
                  <TextField fullWidth label="Advantage Detail" color="primary" type="text" defaultValue="세부 사항" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox icon={<CheckCircleOutline />} checkedIcon={<CheckCircle />} />}
                      label={'수집동의'}
                    />
                  </FormGroup>
                </Grid>
              </Box>
            </Grid>
          )}
          {/* </Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Advantage;
