import React from "react";
import { StyleSheet,View,Text } from "react-native-web";
export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>Contact</Text>
            <Text style={styles.gtext} > Email: almamunabdullahinfo@gmail.com</Text>
            <Text style={styles.gtext} >Phone: +880 1605104121</Text>
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
