import { Dimensions } from 'react-native';

const useSettings = () => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return {
    windowWidth,
    windowHeight,
  };
};

export default useSettings;