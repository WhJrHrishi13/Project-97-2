import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props)
  {super(props)
  this.state={}}
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/BG.jpg')}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Digital Learning</Text>
          </View>
    
          <TouchableOpacity
            style={styles.routeCard}>
            {()=>this.props.navigation.navigate("ISS LOCATION")}
            <Text style={styles.routeText}>BOOKS</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Image
              source={require('../assets/books_759.jpg')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Worksheets</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Image
              source={require('../assets/Worksheet.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Datesheets</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Image
              source={require('../assets/Datasheets.jpg')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
    flex: 0.4,
    
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    marginBottom:50,
    borderRadius: 30,
    backgroundColor: 'thistle',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'blue',
    fontSize: 15,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
   
  },
  iconImage: {
    position: 'absolute',
    height: 150,
    width: 150,
    resizeMode: 'contain',
    right: 40,
    top: -60,
  },
});

