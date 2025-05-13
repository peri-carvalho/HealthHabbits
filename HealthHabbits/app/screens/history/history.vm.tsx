import { Dimensions } from 'react-native';

const useHistory = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const UsersRanking = {
    myUserPoints: 15,
    users: [
      {
        id: 1,
        username: 'Diablo',
        points: 666
      },
      {
        id: 2,
        username: 'Carlos H',
        points: 11
      },
      {
        id: 3,
        username: 'Jonas P',
        points: 9
      },
      {
        id: 4,
        username: 'Pedro S',
        points: 9
      },
      {
        id: 5,
        username: 'Micael P',
        points: 9
      },
      {
        id: 6,
        username: 'Silva',
        points: 8
      },
      {
        id: 7,
        username: 'Pedro S',
        points: 7
      },
      {
        id: 8,
        username: 'Gustavo Silva',
        points: 7
      },
      {
        id: 9,
        username: 'Pericles C',
        points: 5
      },
      {
        id: 10,
        username: 'Aatrox',
        points: 2
      },
      {
        id: 12,
        username: 'Aang',
        points: 1
      },
      {
        id: 11,
        username: 'Imperador da humanidade',
        points: 0
      },
    ]
  }

  return {
    windowWidth,
    windowHeight,
    UsersRanking,
  };
};

export default useHistory;