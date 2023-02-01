import { api } from '@/helpers/api';
import { useMutation } from 'react-query';

const useRenew = () => {
  return useMutation(async (data: any) => {
    const res = await api.post('/renew', {
      data,
    });
    return res;
  });
};

export default useRenew;
