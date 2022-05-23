import React, { useState } from 'react';
import { StyleSheet, Pressable, TextInput, View } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';


const App=()=>{

  const [passVisibility, setPassVisibility] = useState(true);
  const [icon, setIcon] = useState('eye');

   const handlePasswordVisibility = () => {
    if (icon === 'eye') {
      setIcon('eye-off');
      setPassVisibility(!passVisibility);
    } else if (icon === 'eye-off') {
      setIcon('eye');
      setPassVisibility(!passVisibility);
    }
  };
  
  return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Enter password"
          textContentType="newPassword"
          secureTextEntry={passVisibility} 
        />
        <Pressable onPress={handlePasswordVisibility}>
            <IconIonicons name={icon} size={20} color='black' />
        </Pressable>
      </View>
    
  );
}

export default App;

const styles = StyleSheet.create({
  
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7'
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: '90%'
  }
});
