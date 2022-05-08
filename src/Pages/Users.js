import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {addUser, removeUser, updateUser} from '../store/reducers/Users';

import {useSelector, useDispatch} from 'react-redux';
import Card from '../Component/Card';

export default () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users.value);
  const [name, setName] = useState('');
  const [uName, setUname] = useState('');
  const [newName, setNewName] = useState('');

  return (
    <View>
      {/* Add Users */}
      <View style={style.inputgroup}>
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          style={style.input}
          placeholder="John Doe"
        />
        <TextInput
          value={uName}
          onChangeText={e => setUname(e)}
          style={style.input}
          placeholder="userName(john_doe)"
        />
        <Button
          onPress={() =>
            dispatch(addUser({id: userList.length + 1, name, username: uName}))
          }
          title="add user"
          color="#841584"
        />
      </View>
      {/* users */}
      <View
        style={{
          padding: 20,
        }}>
        {userList.map(data => (
          <Card key={data.id} data={data} />
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputgroup: {
    marginVertical: 12,
  },
  input: {
    borderWidth: 1,
    marginTop: 5,
  },
});
