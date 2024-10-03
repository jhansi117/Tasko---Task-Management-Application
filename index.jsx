import { StyleSheet, Text, View, Button } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import Input from '@/components/Input.jsx'
import ItemsDisplayer from '@/components/ItemsDisplayer'


function App() {

  const [items,setItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addItem = (item) =>{
    if(item.length === 0){
      return
    }
    setItems(currItems =>{
      return [...currItems,{id:Math.random().toString(), value:item}]
    })

    setIsAddMode(false)

  }

  const closeModal = () =>{
      setIsAddMode(false)
  }

  const handleDelete = (itemId) =>{
    setItems((currItems)=>{
      return currItems.filter((item)=>item.id != itemId)
    })
  }

  return (
    <GestureHandlerRootView >
    <View style= {styles.screen}>
      <Text style={styles.title}>Tasko</Text>
      <Button title="Add Task" onPress={() => setIsAddMode(true)} color={styles.button.color}/>
      <Input isAddMode={isAddMode} closeModal = {closeModal} addItem={addItem}/>
      <ItemsDisplayer items={items} handleDelete={handleDelete} />
    </View>
    </GestureHandlerRootView>
  )
}

export default App;

const styles = StyleSheet.create({
  screen:{
    padding:50,
    paddingTop:0,
    backgroundColor: '#DAF4F5',
    flex: 1,
  },
  title:{
    fontSize:30,
    color: '#484D51',
    textAlign: 'center',
    paddingVertical: 20
  },
  button: {
    color: '#80A3A2'
  }

})