import { StyleSheet, Text, View, Modal, TextInput, Button} from 'react-native'
import React, { useState } from 'react'

function Input({isAddMode, closeModal, addItem}) {
    const[item, setItem] = useState('');
  return (
    <Modal visible={isAddMode} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='New Item' 
                style= {styles.input} 
                onChangeText={(text)=>setItem(text)} 
                value= {item}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button color={styles.addButton.color}
                    title="Add" onPress={()=>{
                        addItem(item);
                        setItem("");
                    }}/>
                </View>
                <View style={styles.button}>
                    <Button title="Cancel"  color={styles.cancelButton.color} onPress={closeModal}/>
                </View>
            </View>
        </View>
    </Modal>
    
  )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#DAF4F5'
    },
    input:{
        width:'80%',
        borderWidth:1,
        padding:10,
        borderColor: '#ABCECF',
        color: '#484D51',
        marginBottom:15,
        borderRadius: 5,
    },

    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'60%',
    },

    button:{
        width:'40%',
    },
    addButton: {
        color: '#80A3A2'
     },
    cancelButton: {
        color: '#A04747'
    }
})

