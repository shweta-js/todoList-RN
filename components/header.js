import React from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';

export default function Header(){
return(
    <View style={styles.heading}>
        <Text style={styles.headText}>Todo List</Text>
    </View>
);
}
const styles = StyleSheet.create({
    heading:{
        
        height:'10%',
        backgroundColor:'coral',
        alignItems:'center',
        justifyContent:'center'
},
    headText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
        padding:50
       
    }
})