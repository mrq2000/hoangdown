import { api } from '@/helpers/api';
import { useMutation } from 'react-query';

const useIssue = () => {
  return useMutation(async (data: any) => {
    const res = await api.post('/issue', {
      data,
    });
    return res;
  });
};

export default useIssue;
