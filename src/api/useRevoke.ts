import { api } from '@/helpers/api';
import { useMutation } from 'react-query';

const useRevoke = () => {
  return useMutation(async (data: any) => {
    const res = await api.post('/revoke', {
      data,
    });
    return res;
  });
};

export default useRevoke;
