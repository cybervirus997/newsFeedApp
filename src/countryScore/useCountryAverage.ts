import {useState, useEffect, useCallback} from 'react';
import {ScoreData} from '../types';

const useCountryAverage = (scoreData: ScoreData) => {
  const [countryInput, setCountryInput] = useState<string>('');
  const [averageScore, setAverageScore] = useState<number | null>(null);

  const calculateAverage = useCallback(
    (country: string) => {
      const scores = scoreData.filter(
        entry => entry[0].toLowerCase() === country.toLowerCase(),
      );

      if (scores.length === 0) {
        setAverageScore(null);
        return;
      }

      const totalScore = scores.reduce((acc, entry) => acc + entry[1], 0);
      setAverageScore(totalScore / scores.length);
    },
    [scoreData],
  );

  useEffect(() => {
    calculateAverage(countryInput);
  }, [countryInput, calculateAverage]);

  const handleInputChange = (text: string) => {
    setCountryInput(text);
  };

  return {countryInput, averageScore, handleInputChange};
};

export default useCountryAverage;
