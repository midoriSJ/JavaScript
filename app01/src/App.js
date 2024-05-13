import { Text, View, StyleSheet} from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import AssetExample from './components/AssetExample';


export default function App() {
  const [appName, setAppName] = useState("First App")

  return (
    <View>
      <Header name = {appName}/>
    </View>
  );
}
