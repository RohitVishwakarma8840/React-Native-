import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
const Stack = createNativeStackNavigator();

import Map from '../app-example/components/Map/Map';

import { useState } from 'react';

function HomeScreen() {
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [showMap, setShowMap] = useState<boolean>(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style = {styles.cross}>
      {/* <img src="../assets/react-logo.png" alt="cross icon "  width={100} height={200}  /> */}
      {/* <img src = '../assets/x.svg' alt='rohit' width={200} height={200} /> */}
      </View>
      <Map showMap={showMap} setShowMap={setShowMap} />

      <Text>Rohit </Text>
      <Text> Vishwakarm </Text>
      <Text>Coder </Text>
      <Text> Gpt </Text>

      <TextInput
        placeholder="enter name "
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter password "
        value={password}
        onChangeText={setPassword}
      />

      <Text> password is {password} </Text>
      <Text> value is {email} </Text>


      {/* <Button onPress={(prev)=> setShowMap(!prev)}>Toggle Maap</Button> */}
      <Button title="Toggle Map" onPress={() => setShowMap(prev => !prev)} />

      {/* </View> */}
    </ScrollView>
  );
}

function TabScreen() {
  return (
    <View style={styles.container}>
      <Text>Rohit </Text>

      <Text> Vishwakarm </Text>

      <Text>Coder </Text>

      <Text> Gpt </Text>
    </View>
  );
}

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tab" component={TabScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#796d6d',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cross: {
    display : "flex", 
    // marginTop  :10,
     marginTop  : '50%', 
     marginLeft : '50%',
     zIndex : 1000

  }
});
