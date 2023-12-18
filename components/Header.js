import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ setSearchQuery }) => {
  const navigation = useNavigation();
  const [searchQueryLocal, setSearchQueryLocal] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchQueryLocal);
    // Implement your search logic here
    console.log('Searching for:', searchQueryLocal);
  };

  return (
    <View style={styles.headerContainer}>
      {/* Replace text with image */}
      <Image
        source={require('../assets/Dlillah-Logo.png')} // Specify the path to your local image
        style={styles.logoImage}
      />

      {/* Search input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => {
            setSearchQueryLocal(text);
            // Call search function immediately when text changes
            handleSearch();
          }}
          value={searchQueryLocal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#04B4A2',
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'column'
  },
  logoImage: {
    width: 170,
    height: 50,
    marginRight: 10,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 80,
    paddingLeft: 15,
    fontFamily: 'Poppins',
    color: 'gray',
  },
});

export default Header;
