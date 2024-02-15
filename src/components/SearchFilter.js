import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
const SearchFilter = ({icon, placeholder}) => {
  return (
      <View style={styles.container}> 
          <FontAwesome5 name="search" size={20} color="#f96163" />
          <TextInput style={{paddingLeft:9,fontSize:17}}>{placeholder}</TextInput>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 16,
    marginTop: 25,
        
        
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});