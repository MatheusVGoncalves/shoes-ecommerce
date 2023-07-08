import { Platform, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import OneSignal, { NotificationReceivedEvent, OSNotification } from 'react-native-onesignal';
import { Routes } from './src/routes';
import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';
import { useEffect } from 'react';

OneSignal.setAppId('e7a08bc9-09ee-4084-b080-5ae07885326a')

 OneSignal.promptForPushNotificationsWithUserResponse()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

tagUserInfoCreate() 


useEffect(() => {
  const unsubscribe = OneSignal.setNotificationOpenedHandler((response) => {
    console.log('USUÁRIO ABRIU A NOTIFICAÇÃO')
    console.log(response)
  })
  return () => unsubscribe
}, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
      
    </NativeBaseProvider>
  );
}