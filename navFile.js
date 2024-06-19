// import { useFonts } from 'expo-font';
// import { useEffect } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/Home';
// import LoginScreen from './screens/Login';

// const Stack = createNativeStackNavigator();

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [loaded] = useFonts({
//     Poppins: require('../assets/fonts/Poppins-Black.ttf'),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (loaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   useEffect(() => {
//     if (loaded) {
//         onLayoutRootView()
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }


//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
