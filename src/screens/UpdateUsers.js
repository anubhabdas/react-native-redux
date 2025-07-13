import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/slice/UserSlice'

const UpdateUsers = (props) => {

  let route = props.route.params

  console.log("updateUser props", props)

  const [name, setName] = useState(route.data.name)
  const [email, setEmail] = useState(route.data.email)
  const [mobile, setMobile] = useState(route.data.mobile)

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const submitData = () => {
    
    console.log("submmit update", route.index)

    dispatch(updateUser({
      index: route.index,
      data: {
        name,
        email,
        mobile
      }
    }));
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

export default UpdateUsers