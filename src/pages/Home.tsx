import { Box } from '@mui/material';
import { FC, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Issue from '@/components/home/Issue';
import Revoke from '@/components/home/Revoke';
import Renew from '@/components/home/Renew';

type TAB = 'ISSUE' | 'RENEW' | 'REVOKE';

const Home: FC = () => {
  const [value, setValue] = useState<TAB>('ISSUE');
  const handleChange = (event: React.SyntheticEvent, newValue: TAB) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Issue" value="ISSUE" />
            <Tab label="Renew" value="RENEW" />
            <Tab label="Revoke" value="REVOKE" />
          </TabList>
        </Box>
        <TabPanel sx={{ padding: '24px 0px' }} value="ISSUE">
          <Issue />
        </TabPanel>
        <TabPanel sx={{ padding: '24px 0px' }} value="RENEW">
          <Renew />
        </TabPanel>
        <TabPanel sx={{ padding: '24px 0px' }} value="REVOKE">
          <Revoke />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Home;
