import React, { useEffect, useReducer, useState } from 'react';
import { BoardHeader, BoardBody } from 'components';

import api from '../../api';
import fetchReducer from '../../reducers/fetchReducer';
import { initialState } from '../../initState';

import './RecruitmentBoard.scss';

const RecruitmentBoard = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { loading, error, data } = state;
  const [jobsCategories, jobs] = data;
  const [currentFilter, setCurrentFilter] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const categories = await api.get('/categories/en');
        const offers = await api.get('/offers/list/en/');
        dispatch({
          type: 'RESPONSE_COMPLETED',
          payload: [categories.data, offers.data.jobs],
        });
      } catch (error) {
        dispatch({ type: 'RESPONSE_FAILED' });
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="board-container">
      <BoardHeader
        jobsCategories={jobsCategories}
        loading={loading}
        error={error}
        onClick={setCurrentFilter}
        currentFilter={currentFilter}
      />
      <BoardBody jobs={jobs} currentFilter={currentFilter} loading={loading} />
    </section>
  );
};

export default RecruitmentBoard;
