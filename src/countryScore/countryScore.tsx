import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {CountryScoreProps} from './countryScore.types';
import useCountryAverage from './useCountryAverage';
import styles from './countryScore.styles';

const CountryScore: React.FC<CountryScoreProps> = ({scoreData}) => {
  const {container, input, row, countryText, averageText, bar} = styles;
  const {countryInput, averageScore, handleInputChange} =
    useCountryAverage(scoreData);

  const avgScore = averageScore !== null ? averageScore.toFixed(2) : '-';
  const isAvgScore = averageScore !== null;

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Enter Country Name"
        value={countryInput}
        onChangeText={handleInputChange}
      />
      <View style={row}>
        <Text style={countryText}>{countryInput}</Text>
        <Text style={averageText}>{avgScore}</Text>
        {isAvgScore && <View style={[bar, {width: averageScore * 2}]} />}
      </View>
    </View>
  );
};

export default CountryScore;
