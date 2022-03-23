import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ListItems = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItems}>
      <View style={styles.listItemsView}>
        <Text style={styles.listItemsText}> {item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    height: 60,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemsText: {
    fontSize: 18,
  },
});
export default ListItems;
