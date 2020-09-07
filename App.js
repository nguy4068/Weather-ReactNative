import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
} from "react-native";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    /**this.tester()**/
  }
  state = {
    long: "new",
    lat: "new",
    currentTemp: 0,
    city: "city",
    state: "state",
    icon: "icon",
    description: "description",
    country: "country",
    nextDay: {
      day1: {
        date: "today",
        temp: "temp",
        icon: "a01d",
        description: "wait",
      },
      day2: {
        date: "today",
        temp: "temp",
        icon: "a01d",
        description: "wait",
      },
      day3: {
        date: "today",
        temp: "temp",
        icon: "a01d",
        description: "wait",
      },
    },
  };

  getPosition = () => {
    // Simple wrapper
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  };

  tester = async () => {
    if (navigator.geolocation) {
      let position = await this.getPosition();
      this.setState({
        long: position.coords.longitude,
        lat: position.coords.latitude,
        currentTemp: 0,
        city: "city",
        state: "state",
        icon: "icon",
      });

      var api =
        "https://api.weatherbit.io/v2.0/current?lat=" +
        this.state.lat.toString() +
        "&lon=" +
        this.state.long.toString() +
        "&key=d98c16c096b444299c8475a201d1ee2e";
      var api1 =
        "https://api.weatherbit.io/v2.0/forecast/daily?lat=" +
        this.state.lat.toString() +
        "&lon=" +
        this.state.long.toString() +
        "&key=d98c16c096b444299c8475a201d1ee2e";
      if (this.state.long !== "new" && this.state.lat !== "new") {
        await fetch(api)
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            if (this.state.lat !== 0 && this.state.long !== 0) {
              this.setState({
                city: data["data"][0]["city_name"],
                state: data["data"][0]["state_code"],
                currentTemp: data["data"][0]["app_temp"],
                icon: data["data"][0]["weather"]["icon"],
                description: data["data"][0]["weather"]["description"],
              });
            }
          });
        await fetch(api1)
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            this.setState({
              nextDay: {
                day1: {
                  date: data["data"][1]["datetime"],
                  temp: data["data"][1]["temp"],
                  icon: data["data"][1]["weather"]["icon"],
                  description: data["data"][1]["weather"]["description"],
                },
                day2: {
                  date: data["data"][2]["datetime"],
                  temp: data["data"][2]["temp"],
                  icon: data["data"][2]["weather"]["icon"],
                  description: data["data"][2]["weather"]["description"],
                },
                day3: {
                  date: data["data"][3]["datetime"],
                  temp: data["data"][3]["temp"],
                  icon: data["data"][3]["weather"]["icon"],
                  description: data["data"][3]["weather"]["description"],
                },
              },
            });
          });
      }
    }
  };
  OnSubmit = async (event) => {
    this.setState({ country: event });
  };
  onPress = async () => {
    var api =
      "https://api.weatherbit.io/v2.0/current?city=" +
      this.state.country.toString() +
      "&key=d98c16c096b444299c8475a201d1ee2e";
    var api1 =
      "https://api.weatherbit.io/v2.0/forecast/daily?city=" +
      this.state.country.toString() +
      "&key=d98c16c096b444299c8475a201d1ee2e";
    await fetch(api)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (this.state.lat !== 0 && this.state.long !== 0) {
          this.setState({
            city: data["data"][0]["city_name"],
            state: data["data"][0]["state_code"],
            currentTemp: data["data"][0]["app_temp"],
            icon: data["data"][0]["weather"]["icon"],
            description: data["data"][0]["weather"]["description"],
          });
        }
      });
    await fetch(api1)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          nextDay: {
            day1: {
              date: data["data"][1]["datetime"],
              temp: data["data"][1]["temp"],
              icon: data["data"][1]["weather"]["icon"],
              description: data["data"][1]["weather"]["description"],
            },
            day2: {
              date: data["data"][2]["datetime"],
              temp: data["data"][2]["temp"],
              icon: data["data"][2]["weather"]["icon"],
              description: data["data"][2]["weather"]["description"],
            },
            day3: {
              date: data["data"][3]["datetime"],
              temp: data["data"][3]["temp"],
              icon: data["data"][3]["weather"]["icon"],
              description: data["data"][3]["weather"]["description"],
            },
          },
        });
      });
  };

  render() {
    return (
      <View>
        <Text>Hi There</Text>
      </View>
      /**<View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Enter City Name"
            style={styles.input}
            onChangeText={this.OnSubmit}
          ></TextInput>
          <View style={styles.button}>
            <Text onPress={this.onPress}>
              <Ionicons name="md-search" size={30} color="black" />
            </Text>
          </View>
        </View>
        <Header
          description={this.state.description}
          temp={this.state.currentTemp}
          city={this.state.city}
          state={this.state.state}
          icon={this.state.icon}
        />
        <Content listDay={this.state.nextDay} />
        <Footer />
        <StatusBar style="auto" />
      </View>**/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEFA",
  },
  searchBar: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    backgroundColor: "#FFF5EE",
    width: "80%",
    alignSelf: "center",
    textDecorationColor: "white",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#C0C0C0",
    width: "10%",
    marginTop: 40,
    height: 37,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
