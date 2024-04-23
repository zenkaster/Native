import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => {
    return (
        <View style={styles.line}>

        </View>
    );
}

const styles = StyleSheet.create({
    line:{
        backgroundColor:'red',
        width:'100%',
        height:2
    }
})

export default Separator;
