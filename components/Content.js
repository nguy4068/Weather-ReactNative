import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Cards from "./parts/Cards";

class Content extends Component {
  state = {
    image1: require("../assets/icons/a01d.png"),
    image2: require("../assets/icons/a01n.png"),
    image3: require("../assets/icons/a01d.png"),
  };
  render() {
    return (
      <View style={styles.container}>
        <Cards
          color1="#DDA0DD"
          color2="#FFC0CB"
          color="#DDA0DD"
          borderUp={0}
          borderDown={50}
          temp={this.props.listDay.day1.temp}
          date={this.props.listDay.day1.date}
          image={this.props.listDay.day1.icon}
          description={this.props.listDay.day1.description}
        />
        <Cards
          color1="#FA8072"
          color2="#DB7093"
          color="#DB7093"
          borderUp={0}
          borderDown={0}
          temp={this.props.listDay.day2.temp}
          date={this.props.listDay.day2.date}
          image={this.props.listDay.day2.icon}
          description={this.props.listDay.day2.description}
        />
        <Cards
          color1="#9370DB"
          color2="#7B68EE"
          color="#7B68EE"
          borderUp={50}
          borderDown={0}
          temp={this.props.listDay.day3.temp}
          date={this.props.listDay.day3.date}
          image={this.props.listDay.day3.icon}
          description={this.props.listDay.day3.description}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  date: {
    display: "flex",
    justifyContent: "center",
  },
});

export default Content;
