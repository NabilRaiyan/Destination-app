import { StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className='text-center text-lg text-black'>Hello</Text>
      <Text className='text-center text-lg text-black'>Welcome from React native</Text>

      <StatusBar barStyle={'dark-content'}/>
    </SafeAreaView>
  );
}


