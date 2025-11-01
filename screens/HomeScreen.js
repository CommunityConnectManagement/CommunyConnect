import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native;



export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <View>
          <Text style={styles.navBarGreet}>Hi, Linda👋</Text>
          <Text style={styles.navBarPhrase}>See What knew</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image 
              source={require('./assets/1757256402.png')} 
              style={{ width: 50, height: 50, borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchView} >
        <View style={styles.searchHolder}>
          <TextInput style={styles.searchInput} placeholder="search context or places" />
          <TouchableOpacity>
            <Image source={require('./assets/filter.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trendHolder}>
        <Text style={styles.trendLine}>Trending News</Text>
        <TouchableOpacity style={styles.trendView}>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.locationsHolder}>
        <TouchableOpacity style={styles.locationButton} >
          <Text>My Township</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.locationButton} >
          <Text>Select Town</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.locationButton} >
          <Text>Top Towns</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.CardRender}></View>

      <View style={styles.pagesHolder}>
        <TouchableOpacity>
          <Image source={require( './assets/home.png' )} style={styles.pagesIcon}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('./assets/messages.png' )}  style={styles.pagesIcon}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require( './assets/chat.png' )}  style={styles.pagesIcon}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('./assets/tracking.png' )}  style={styles.pagesIcon}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('./assets/setting.png')}  style={styles.pagesIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Icons : {
    width: 30,
    height: 30,
  },
  pagesIcon: {
  width: 32,
  height: 32,
  marginRight: 5,  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  searchView : {
    display: "flex",
    flexDirection: "row",
    color: "blue",
    height: "8%",
    width: "100%",
    MarginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    
  },
  searchHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    width: "70%",
    height: "70%",
    borderStyle: "solid",
    borderWidth: 0.4,
    borderColor: "black",
    borderRadius: 15,
    
  },
  searchInput : {
    width: "70%",
    height: "100%",
    fontSize: 14,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 20,
    height: "10vh",
  },
  navBarGreet: {
    fontSize: 30,
    fontWeight: "bold",
  },
  navBarPhrase: {
    fontSize: 20,
    color: "gray",
  },
  
  trendHolder : {
    width: "100%",
    height: "8%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  trendLine : {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 20,
 
  },
  trendView : {
  marginRight: 5,
  },
  
  locationsHolder : {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    marginTop: -16,
  },
  locationButton: {
    width: 115,
    height: 48,
    backgroundColor: "blue",
    marginLeft: 10,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    
  },
  CardRender: {
    backgroundColor: "black",
    width: "50%",
    height: "45%",
  },
  pagesHolder : {
    width: "100%",
    height: "10%", 
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center", 
    },
});
