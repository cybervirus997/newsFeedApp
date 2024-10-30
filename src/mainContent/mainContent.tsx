import React from 'react';
import {SafeAreaView, ActivityIndicator, Text} from 'react-native';
import styles from './mainContent.styles';
import useFetchScores from './useFetchScores';
import CountryScore from '../countryScore';

const MainContent: React.FC = () => {
  const {container, errorText} = styles;
  const {scoreData, loading, error} = useFetchScores();

  return (
    <SafeAreaView style={container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={errorText}>{error}</Text>}
      {!loading && !error && <CountryScore scoreData={scoreData} />}
    </SafeAreaView>
  );
};

export default MainContent;
