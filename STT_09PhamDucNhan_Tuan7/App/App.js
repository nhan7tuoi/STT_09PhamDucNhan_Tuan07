
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from './views/Screen1';
import Screen2 from './views/Screen2';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#fff',
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}
      initialRouteName='Screen1'>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}