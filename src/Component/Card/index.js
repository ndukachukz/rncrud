import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {removeUser, updateUser} from '../../store/reducers/Users';
import {useDispatch} from 'react-redux';

export default ({data}) => {
  const dispatch = useDispatch();
  // const userList = useSelector(state => state.users.value);
  const [val, setVal] = useState('');

  return (
    <View
      style={{
        marginVertical: 15,
      }}>
      <Text>Name: {data.name}</Text>
      <Text>username: {data.username}</Text>
      <View>
        <TextInput
          value={val}
          onChangeText={e => setVal(e)}
          style={style.input}
          placeholder="userName(john_doe)"
        />
        <View>
          <Button
            onPress={() => dispatch(updateUser({id: data.id, name: val}))}
            title="update user"
            color="#841584"
          />
          <Button
            onPress={() => dispatch(removeUser({id: data.id}))}
            title="Delete user"
            color="#841584"
          />
        </View>
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
