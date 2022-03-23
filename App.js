import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './NewAppScreen/components/Header';
import ListItems from './NewAppScreen/components/ListItems';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4, text: 'Milk'},
    {id: uuidv4, text: 'Eggs'},
    {id: uuidv4, text: 'Bread'},
    {id: uuidv4, text: 'Juice'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItems item={item} />}
      />
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
