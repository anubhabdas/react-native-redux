import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { deleteUser } from '../redux/slice/UserSlice'

const Users = () => {

  const user = useSelector((state)=> state.users.users) 
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log("users: ", user);

  const editUser = (item, index) => {
    console.log("editUser:++ ", item);
    navigation.navigate('UpdateUsers', {
      data: item,
      index
    });
  }

  const showUsers = ({ item, index }) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.card}>
          <View style={styles.userInnerContainer}>
            <Text>{`Name: ${item.name}`}</Text>
            <Text>{`Email: ${item.email}`}</Text>
            <Text>{`Mobile: ${item.mobile}`}</Text>
          </View>
          <View style={styles.userInnerContainer}>
              <TouchableOpacity onPress={() => editUser(item, index)}>
                <Text style={styles.blueBorderBtn}> Edit </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                dispatch(deleteUser(index))
              }}>
                <Text style={styles.redBorderBtn}> Delete </Text>
              </TouchableOpacity>  
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {user.length > 0 
        ? (
          <FlatList 
            data={user}
            renderItem={(item, index) => showUsers(item, index)}
          />
        )
        : <Text> User not found </Text>
      }

      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => navigation.navigate('AddUsers')}
      >
        <Text> + </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  userContainer: {
    flex: 1,
  },
  userInnerContainer : {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 20,
    
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: 'white',
    elevation: 5,
    shadowRadius: 8
  },
  blueBorderBtn: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    textAlign: 'center'
  },
  redBorderBtn: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    marginTop: 10,
    textAlign: 'center'
  },
})

export default Users