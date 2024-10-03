import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ItemsDisplayer({items, handleDelete}) {
  return (
    // <ScrollView contentContainerStyle= {{paddingBottom: 80}} style={{marginBottom:20, paddingBottom:20}} showsVerticalScrollIndicator={false}>
    //   {items.map((item) => (
    //     <Text style={{fontSize:50}}  key={item.id}>{item.value}</Text>
    //   ))}
    // </ScrollView>

    <FlatList
        keyExtractor={(item,index)=>item.id}
        data={items}
        contentContainerStyle = {{paddingBottom:80,paddingTop:20}}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData)=>{
            return(
                <View style={styles.listItems}>
                    <Text style={styles.itemText}>{itemData.item.value}</Text>
                    <TouchableOpacity style= {styles.button} onPress={()=>handleDelete(itemData.item.id)}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )
        }}
    />


  )
}

const styles = StyleSheet.create({
    listItems:{
        padding:10,
        margin: 12,
        backgroundColor: '#C4DCE0',
        borderColor: '#ABCECF',
        borderWidth:1,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    itemText: {
        fontSize: 16,
        color: '#484D51'
      },
    button:{
        backgroundColor: '#80A3A2',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
    },
    buttonText:{
        color: '#DAF4F5', 
    },
    itemText:{
        color:'#484D51'
    }
})