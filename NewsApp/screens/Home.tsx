import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Appbar, Button, Chip, useTheme } from "react-native-paper";
const categories = ["Technologie", "Sport", "Politics", "Health", "Buisnes"];
const API_KEY = "pub_187635d956506d548fdfafd33df7fe91981ef";
const Home = () => {
  const theme = useTheme()
  const [selectedCategories, setselectedCategories] = useState([]);
  const handelSelect = (val: string) => {
    setselectedCategories((prev: string[]) =>
      prev.find((p) => p === val)
        ? prev.filter((cat) => cat !== val)
        : [...prev, val]
    );
  };
  const handelPress = async()=>{
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=ma&language=fr${selectedCategories.length > 0 ? `&category=${selectedCategories.join()}  `: ""
  }`
   console.log(URL);
   
    
  }
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filterContainer}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            mode="outlined"
            style={styles.chipItem}
            textStyle={{ fontWeight: "400", color: "white", padding: 1 }}
            showSelectedOverlay
            selected={selectedCategories.find((c) => cat === c) ? true : false}
            onPress={() => handelSelect(cat)}
          >
            {cat}
          </Chip>
        ))}
        <Button
        mode="outlined"
          icon={"sync"}
          onPress={handelPress}
          labelStyle={{ fontSize: 14, margin: "auto" }}
          style={styles.button}
        >
          Refresh
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  chipItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 400,
  },
});
