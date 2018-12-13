import {createStackNavigator,createAppContainer} from 'react-navigation'
import {PeoplePage} from './src/pages';
import {PeopleDetailPage} from './src/pages';
import {FirstLetter} from './src/util'

// createStackNavigator além de receber objetos literais, podem receber funções.
// A ordem das screens importa, principalmente a primeira, que sera como uma "index"
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
        // utilizar o {navigation} permite passar propriedades entre as pages, permitindo buscaro nome clicado no maping feito pela PeopleList atraves
        // da possagem de parametros entre as pages
        navigationOptions: ({navigation}) => { 
          const {first} = navigation.state.params.people.name;
          const {last} = navigation.state.params.people.name;
          const peopleName = ` ${FirstLetter(first)} ${FirstLetter(last)}`;
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

