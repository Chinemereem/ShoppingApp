import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './NewAppScreen/components/Header';


const App = () => {
  const [items, setItems] = useState([
    
    {text: 'Eggs'},
    {text: 'Bread'},
    {text: 'Juice'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {color: 'darkslateblue', fontSize: 20},
});
export default App;
