import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveHeadlines = async (key: string, headlines: any[]) => {
  await AsyncStorage.setItem(key, JSON.stringify(headlines));
};

export const getHeadlines = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const clearStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
