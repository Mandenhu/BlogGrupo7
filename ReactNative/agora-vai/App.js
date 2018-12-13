import {createStackNavigator,createAppContainer} from 'react-navigation'
import {PeoplePage} from './src/pages';
import {PeopleDetailPage} from './src/pages';
import {FirstLetter} from './src/util'

const AppNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage,
        navigationOptions: {
          title: 'WTF',
          headerStyle: {
            backgroundColor: '#001a44',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 30,
            textAlign: 'center',
            flexGrow: 1,
          }
        }
    },

    'PeopleDetailPage': {
        screen: PeopleDetailPage,
        // utilizar o {navigation} permite passar as propriedades entre as pages
        navigationOptions: ({navigation}) => { 
          const peopleName = FirstLetter(navigation.state.params.people.name.first) + ' ' +  FirstLetter(navigation.state.params.people.name.last);
          return({
            title: (peopleName),
            headerTintColor: '#fff',
            headerStyle:{
              backgroundColor: '#001a44',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 30,
            }
          })
        }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

