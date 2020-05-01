import { useEffect } from 'react';
import { fetchRequest } from '../services/fetchRequest.js';

export const useHooks = () => {

  useEffect(() => {
    fetchRequest()
      
  }, []); 

};
