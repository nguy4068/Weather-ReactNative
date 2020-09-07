import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

class Cards extends Component {
  render() {
    var temp = `${this.props.temp}℃`;
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: this.props.color,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            ...styles.bgcard,
            backgroundColor: this.props.color1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: this.props.borderUp,
          }}
        >
          <Text style={styles.text1}>{this.props.date}</Text>
          <Image
            source={{
              uri: `https://www.weatherbit.io/static/img/icons/${this.props.image}.png`,
            }}
            style={styles.image}
          />
        </View>
        <View
          style={{
            ...styles.bgcard,
            backgroundColor: this.props.color2,
            zIndex: -1,
            borderTopLeftRadius: this.props.borderDown,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Text style={styles.text}>{temp}</Text>
          <Text style={{ ...styles.text1, padding: 10 }}>
            {this.props.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgcard: {
    width: 100,
    height: 135,
    alignItems: "center",
  },
  container: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 10,
    zIndex: 1,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
  },
  text1: {
    fontSize: 12,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#2F4F4F",
    marginVertical: 20,
  },
});
export default Cards;
