import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const YourComponent = () => {
  const [isHealthSelected, setIsHealthSelected] = useState(false);

  const handleHealthButtonPress = () => {
    setIsHealthSelected(true);
  };

  const handleStudyButtonPress = () => {
    setIsHealthSelected(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isHealthSelected ? styles.selectedButton : styles.unselectedButton]}
        onPress={handleHealthButtonPress}
      >
        <Text style={isHealthSelected ? styles.selectedButtonText : styles.unselectedButtonText}>Sức Khỏe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, !isHealthSelected ? styles.selectedButton : styles.unselectedButton]}
        onPress={handleStudyButtonPress}
      >
        <Text style={!isHealthSelected ? styles.selectedButtonText : styles.unselectedButtonText}>Học Tập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedButton: {
  },
  unselectedButton: {
  },
  selectedButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  unselectedButtonText: {
    color: '#ccc',
    fontWeight: 'bold',
  },
});

export default YourComponent;
