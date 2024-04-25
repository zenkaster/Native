import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home component</Text>
            <Button
                title='Change Title'
                onPress={() => navigation.setOptions({ title: 'New Title' })}
            />
            <Button
                title='Go to second'
                onPress={() => navigation.navigate('second', { name: 'Hello world' })}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
