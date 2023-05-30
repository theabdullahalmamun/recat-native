import React from "react";
import { StyleSheet,View,Text } from "react-native-web";
export default function rev(){
    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>Home Screen</Text>
        </View>

    )
}
const styles=StyleSheet.create({
    container: {
        padding: 24,
    },
    titletext:{
        fontSize: 18,
    }
})