import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Item = ({ title }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Item;
