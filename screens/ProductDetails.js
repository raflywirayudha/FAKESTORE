import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProductDetails = ({ navigation, route }) => {
  const item = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.coverImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.ratprice}>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={31} color={"orange"}></Icon>
                <Text style={styles.rating}>{item.rating.rate}</Text>
              </View>

              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
          <Text style={[styles.description, styles.sizeText]}>Description</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 14,
              lineHeight: 18,
              marginTop: 10,
              fontWeight: 400,
            }}
          >
            {item.description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="add-shopping-cart" size={30} color={"white"}></Icon>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 60,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: 260,
    width: "100%",
  },
  coverImage: {
    resizeMode: "contain",
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    marginTop: 20,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444444",
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#444444",
  },

  ratingContainer: {
    flexDirection: "row",
  },

  rating: {
    fontSize: 24,
    color: "#444444",
  },

  ratprice: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    fontSize: 16,
    fontWeight: "700",
    color: "#444444",
  },
  sizeText: {
    marginTop: 20,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    margin: 20,
  },

  buyButton: {
    backgroundColor: "seagreen",
    height: 62,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  cartButton: {
    backgroundColor: "seagreen",
    height: 62,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export default ProductDetails;
