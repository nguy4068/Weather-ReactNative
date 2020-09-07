import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Header extends Component {
  render() {
    var temp = `${this.props.temp}℃`;
    return (
      <View>
        <Text style={styles.text}>{this.props.description}</Text>
        <Image
          source={{
            uri: `https://www.weatherbit.io/static/img/icons/${this.props.icon}.png`,
          }}
          style={styles.image}
        />
        <Text style={styles.text1}>{temp}</Text>
        <Text style={styles.city}>
          {this.props.city}•{this.props.state}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginTop: 70,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 10,
  },
  text1: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "800",
    color: "black",
  },
  city: {
    alignSelf: "center",
    fontSize: 24,
    color: "#696969",
    padding: 10,
  },
});

export default Header;
