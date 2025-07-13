import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slice/UserSlice'

const AddUsers = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const submitData = () => {
    
    dispatch(addUser({name, email, mobile}));
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.container}>
          <TextInput 
            style={styles.editText}
            placeholder='Name'
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <TextInput 
            style={styles.editText}
            placeholder='Email'
            keyboardType='email'
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput 
            style={styles.editText}
            placeholder='Mobile'
            value={mobile}
            onChangeText={(value) => setMobile(value)}
          />

          <TouchableOpacity 
            style={styles.submitBtn}
            onPress={() => submitData()}
          >
            <Text> Submit Data </Text>
          </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  editText: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 10
  },
  submitBtn: {
    width: '80%',
    padding: 20,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10
  }
})

export default AddUsers