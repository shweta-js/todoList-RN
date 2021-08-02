import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,
Alert,
Keyboard,
TouchableWithoutFeedback } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo'
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buyrsfrtetet coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  
const pressHandler = (key)=>{
  setTodos(prevTodos=>{
    return prevTodos.filter(todo =>todo.key!=key);
  });
}
const submitHandler = (text)=>{
 if(text.length<3){
 Alert.alert('OOPS!','Todos must be over 3 chars logn',[
   {text:'understood',onPress:()=>console.log('alert closed')}

 ]);
}else{
   setText('')
  setTodos((prevTodos)=>{
    return[
     { text,key:Math.random().toString()},
     ...prevTodos
    ]
  })
 }
}
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
    <Header />
      <View style={styles.content}>
      <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item}
                pressHandler={pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    flex:1,
    marginTop: 20,
  },
});