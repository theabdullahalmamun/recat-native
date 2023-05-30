import React from "react";
import { StyleSheet,View,Text } from "react-native-web";
export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>About</Text>
            <Text style={styles.gtext}>There are no about included yet</Text>
        </View>

    )
}
const styles=StyleSheet.create({
    container: {
        padding: 24,
    },
    titletext:{
        textAlign:'center',
        fontSize: 28,
        
    },
    gtext:{
        textAlign:'center'
    }
})
