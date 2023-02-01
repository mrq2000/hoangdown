/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button } from '@mui/material';
import React, { FC } from 'react';

interface ImportButtonProps {
  setData: (data: any) => void;
}
const ImportButton: FC<ImportButtonProps> = ({ setData }) => {
  const onReaderLoad = (event: ProgressEvent<FileReader>) => {
    if (event?.target?.result) {
      // @ts-ignore
      const obj = JSON.parse(event.target.result);
      setData(obj);
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target?.files?.[0]) {
      reader.onload = onReaderLoad;
      reader.readAsText(event.target.files[0]);
      console.log(reader.result);
    }
  };

  return (
    <>
      <Button variant="contained" component="label">
        Upload File
        <input hidden type="file" onChange={handleUpload} accept="application/JSON" />
      </Button>
    </>
  );
};

export default ImportButton;
