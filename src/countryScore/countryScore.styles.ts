import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryText: {
    flex: 1,
  },
  averageText: {
    flex: 1,
    textAlign: 'center',
  },
  bar: {
    height: 20,
    backgroundColor: 'blue',
  },
});

export default styles;
