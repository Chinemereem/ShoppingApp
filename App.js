import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './NewAppScreen/components/Header';
import ListItems from './NewAppScreen/components/ListItems';
import AddItems from './NewAppScreen/components/AddItem';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Milk'},
    {id: '2', text: 'Eggs'},
    {id: '3', text: 'Bread'},
    {id: '4', text: 'Juice'},
  ]);
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };
  const addItem = text => {
    setItems(prevItems => {
      return [{id: uuidv4, text}, ...prevItems];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItems addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItems item={item} deleteItem={deleteItem} />
        )}
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
