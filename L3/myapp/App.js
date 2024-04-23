// import React from 'react';
// import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
// import Item from './components/Item';
// import Separator from './components/Separator';

// const App = () => {
//   const arr = [
//     {
//       id: 0,
//       title: 'Element',
//     },
//     {
//       id: 1,
//       title: 'Element',
//     },
//     {
//       id: 2,
//       title: 'Element',
//     },
//     {
//       id: 3,
//       title: 'Element',
//     },
//     {
//       id: 4,
//       title: 'Element',
//     },
//   ]
//   const arr2 = [
//     {
//       id: 0,
//       title: 'Element',
//       data: [
//         'Water', 'Cola', 'Fanta'
//       ]
//     },
//     {
//       id: 1,
//       title: 'Element',
//       data: [
//         'Pizza', 'Burger', 'Chips'
//       ]
//     },
//     {
//       id: 2,
//       title: 'Element',
//       data: [
//         'Candy', 'Ice Cream',
//       ]
//     },
//   ]

//   return (
//     <View>
//       {/* <FlatList
//         data={arr}
//         renderItem={({ item }) => <Item id={item.id} title={item.title} />}
//         keyExtractor={(item) => item.id}
//         ItemSeparatorComponent={<Separator />}
//       /> */}

//       <SectionList
//         sections={arr2}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({ item }) => <Item title={item} />}

//         renderSectionHeader={({ section: { title, id } }) =>
//           <Text>{title} - {id + 1}</Text>
//         }

//         renderSectionFooter={() => <Separator />}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({})

// export default App;


import React, { useEffect, useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const App = () => {

  const fontSizeAnim = useRef(new Animated.Value(10)).current;

  // const anim = () => {
  // Animated.timing(fontSizeAnim, {
  //   toValue: 5,
  //   duration: 3000,
  //   useNativeDriver: true,
  // }).start();
  // }
  useEffect(() => {
    Animated.spring(fontSizeAnim, {
      toValue: 15,
      duration: 2000,
      friction: 1,
      tension: 1,
      useNativeDriver: true,
    }).start();
  })

  return (
    <View>
      <Animated.Text style={{ fontSize: fontSizeAnim }}>
        Hello world
      </Animated.Text>

      {/* <Button title='Click' onPress={anim} /> */}
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;

