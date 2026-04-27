import { Text, View, StyleSheet, TextInput,ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import { Map } from "../app-example/components/Map/Map";


import {useState} from "react";




function HomeScreen() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");





  return (
      <ScrollView contentContainerStyle={styles.container}>
   
         <Map/>



      <Text>Rohit </Text>
      <Text> Vishwakarm </Text>
      <Text>Coder  </Text>
      <Text> Gpt </Text>

      <TextInput
      placeholder = "enter name "
      value = {email}
      onChangeText  = {setEmail}
      
      />


 <TextInput
      placeholder = "Enter password "
      value = {password}
      onChangeText  = {setPassword}
      
      />


      <Text> password is {password}  </Text>
      <Text> value is {email}  </Text>
 



    {/* </View> */}
    </ScrollView>
  );
}

function TabScreen () {
  return (
  


<View style={styles.container}>

      <Text>Rohit </Text>

      <Text> Vishwakarm </Text>

        <Text>Coder  </Text>

      <Text> Gpt </Text>
    </View>


  );
}

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
      />
       <Stack.Screen 
        name="Tab" 
        component={TabScreen} 
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#796d6d", 
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 'bold',
    fontSize : 20
  },
});