import React, { useEffect, useReducer } from 'react';

import api from '../../api';
import fetchReducer from '../../reducers/fetchReducer';

import { initialState } from '../../initState';

const RecruitmentBoard = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchJobs = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const categories = await api.get('/categories/en');
        const offers = await api.get('/offers/list/en/');
        dispatch({ type: 'RESPONSE_COMPLETED', payload: [categories, offers] });
      } catch (error) {
        dispatch({ type: 'RESPONSE_FAILED' });
      }
    };

    fetchJobs();
  }, []);

  return <div>tablica here</div>;
};

export default RecruitmentBoard;
