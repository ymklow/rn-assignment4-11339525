import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        <TextInput
          placeholder="Search a job or position"
          style={styles.input}
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity  style={styles.filterIcon}>
        <Ionicons name="filter" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    marginTop: 15
  },
  searchbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 13,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  filterIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default SearchBar;