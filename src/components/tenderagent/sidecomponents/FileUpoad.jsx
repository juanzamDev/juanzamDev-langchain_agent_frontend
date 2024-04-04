import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function FileUpload({ setFiles }) {

  const handleFileChange = (event) => {
    // const file = event.target.files[0]; 
     setFiles(event.target.files); 
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      className=' bg-blue-gray-700 hover:bg-blue-gray-900'
    >
      Subir Archivos
      <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
    </Button>
  );
}

export default FileUpload;