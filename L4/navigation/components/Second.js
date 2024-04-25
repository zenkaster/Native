import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Second = ({ route }) => {
    return (
        <View>
            <Text>{route.params.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Second;
