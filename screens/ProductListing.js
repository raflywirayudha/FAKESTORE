import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProductListing = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/products";

    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 27,
          textAlign: "center",
          paddingTop: 60,
          paddingBottom: 10,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "white",
          backgroundColor: "#101010",
          width: "100%",
        }}
      >
        <Icon name="shopping-cart" size={30} color={"gold"}></Icon>
        FAKESTORE.
      </Text>
      <FlatList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ProductDetails", item)}
          >
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {item.title}
            </Text>
            <View style={styles.ratprice}>
              <Icon name="star" size={24} color={"orange"}></Icon>
              <Text style={styles.rating}>{item.rating.rate}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 9,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 180,
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  title: {
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 5,
    paddingTop: 30,
  },
  image: {
    height: 160,
    width: 160,
    resizeMode: "contain",
  },
  price: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 35,
  },

  rating: {
    textAlign: "center",

    fontSize: 16,
  },
  ratprice: {
    flexDirection: "row",
  },
  errorStyle: {
    color: "red",
    fontSize: 18,
  },
});
