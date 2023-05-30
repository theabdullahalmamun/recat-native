import React from "react";
import { StyleSheet,View,Text } from "react-native";
export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>Skill</Text>
        <Text style={styles.gtext}>Machine Learning</Text>
        <Text style={styles.gtext}>Web Developement</Text>
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
