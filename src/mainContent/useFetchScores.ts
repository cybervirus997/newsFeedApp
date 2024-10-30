import {useEffect, useState} from 'react';
import {ScoreData} from '../types';

const useFetchScores = () => {
  const [scoreData, setScoreData] = useState<ScoreData>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    setLoading(true); // Start loading immediatly
    setError(null); // Clr prev error

    try {
      const response = await fetch(
        'https://assessments.reliscore.com/api/cric-scores/',
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ScoreData = await response.json();
      console.log('data', data);
      setScoreData(data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch scores');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {scoreData, loading, error};
};

export default useFetchScores;
