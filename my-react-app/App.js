// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons'

// export default function App() {
//   const [inputText, setInputText] = useState('');
//   const [listData, setListData] = useState([]);

//   const handlePress = () => {
//     console.log("Input Value:", inputText);
//     setListData([...listData, inputText]);
//     setInputText('');
//     // console.log(e);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>This is React Native on Expo</Text>
//       <Text>This is TODO APP In React Native
//         <Icon size={30} name='toggle-off' color='black' />
//         <Icon size={30} name='collections-bookmark' color='black' />
//       </Text>
//       <TextInput
//         style={styles.input}
//         placeholder="This is an input"
//         value={inputText}
//         onChangeText={(text) => setInputText(text)}
//       />
//       <TouchableOpacity onPress={handlePress}>
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>Add to List</Text>
//         </View>
//       </TouchableOpacity>
//       <FlatList
//         data={listData}
//         renderItem={({ item }) => <Text>{item}</Text>}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     borderWidth: 2,
//     borderRadius: 4,
//     padding: 10,
//     marginTop: 10,
//   },
//   button: {
//     marginTop: 10,
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });






// // import { StatusBar } from 'expo-status-bar';
// // import React, { useState } from 'react';
// // import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Modal, Button } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';

// // export default function App() {
// //   const [inputText, setInputText] = useState('');
// //   const [listData, setListData] = useState([]);
// //   const [modalVisible, setModalVisible] = useState(false);

// //   const handlePress = () => {
// //     setListData([...listData, inputText]);
// //     setInputText('');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text>This is React Native on Expo</Text>
// //       <Text>This is Modal In React Native
// //         {/* <Icon size={30} name='toggle-off' color='black' /> */}
// //         <Icon size={30} name='visibility' color='black' />
// //       </Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="This is an input"
// //         value={inputText}
// //         onChangeText={(text) => setInputText(text)}
// //       />
// //       <TouchableOpacity onPress={() => setModalVisible(true)}>
// //         <View style={styles.button}>
// //           <Text style={styles.buttonText}>Add to List</Text>
// //         </View>
// //       </TouchableOpacity>

// //       {/* Modal */}
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={() => {
// //           setModalVisible(!modalVisible);
// //         }}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <Text>List Items:</Text>
// //             <FlatList
// //               data={listData}
// //               renderItem={({ item }) => <Text>{item}</Text>}
// //               keyExtractor={(item, index) => index.toString()}
// //             />
// //             <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
// //           </View>
// //         </View>
// //       </Modal>

// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   input: {
// //     borderWidth: 2,
// //     borderRadius: 4,
// //     padding: 10,
// //     marginTop: 10,
// //   },
// //   button: {
// //     marginTop: 10,
// //     backgroundColor: 'blue',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: 'white',
// //     textAlign: 'center',
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   modalContent: {
// //     backgroundColor: 'white',
// //     padding: 20,
// //     borderRadius: 10,
// //     elevation: 5,
// //   },
// // });




import React from 'react'
// import StackNav from './config/StackNav'
import StackNav from './Router/StackNav'
import { View } from 'react-native'

function App() {
  return (
    <View>
      <StackNav />
    </View>
  )
}
export default App
