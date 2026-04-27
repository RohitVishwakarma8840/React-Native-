import { Text, View, StyleSheet, TextInput } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import {useState} from "react";

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


const handleChange  = (e) => {
   setEmail(e.target.value);
}

const handlePassword  = (e) => {
  setPassword(e.target.value);
}


function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text>Rohit </Text>

      <Text> Vishwakarm </Text>

        <Text>Coder  </Text>

      <Text> Gpt </Text>

      <TextInput
      placeholder = "enter name "
      value = {email}
      onChange  = {handleChange}
      
      />


 <TextInput
      placeholder = "Enter password "
      value = {password}
      onChange  = {handlePassword}
      
      />


      <Text> password is {password}  </Text>
      <Text> value is {email}  </Text>
 



    </View>
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
    backgroundColor: "#b61d1d", 
    alignItems: "center",
    justifyContent: "center",
  },
});