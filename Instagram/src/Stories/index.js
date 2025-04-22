import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const Stories = ({ data }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.storyContainer}>
          <Image source={{ uri: item.imgperfil }} style={styles.storyImage} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    marginHorizontal: 5,
    alignSelf: 'center',
    height: 90,
    justifyContent: 'center',
    marginTop: 10,
 
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
});

export default Stories;