import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {Component, useContext, useRef} from 'react';

import Footer from '../components/Footer'
import { MomentContext } from "../MomentContext";

const data = require ('../assets/commentaries.json');
let dataSource = [];
let location_index = 0;
const momentClicked = useContext(MomentContext);
export default class st1_landing extends React.Component {

  constructor(props) {
    super(props);
    this.flatListRef = null;
    this.location_index= 4;
    this.dataSource = data.nodes;
    console.log('Selected moment :   ' + momentClicked);
  }
 
  componentDidMount() {
    setTimeout(() => this.flatListRef.scrollToIndex({ index: this.location_index }), 3000);
  }

  handlePress = (item) => {
    // const { navigate } = props.navigation;
    // props.navigation.navigate("Landing", {
    //   id: item.id,
    // //   title: item.title,
    // //   body: item.body,
    // //   userId: item.userId,
    // });
    // ToastAndroid.show(""+item.i,ToastAndroid.short);
    console.log('Selected Item :   ' + JSON.stringify(item.id));
    this.location_index = item.id;
    this.momentClicked = item.id;
    console.log('Selected Item :   ' + this.momentClicked);
    // flatListRef.current.scrollToIndex({index: item.id, animated: true })
    // this.flatListRef.scrollToIndex({ index: this.location_index }), 3000);
  };
 
  // renderItem({ item }) {
  //   return (
  //     <View style={styles.listItem}>
  //       <Text>{item.data}</Text>
  //     </View>
  //   );
  // }

   ItemView = ({item}) => {
    // flatListRef.scrollToIndex({ index: 4 }), 3000);
    return (
      <Text style = {styles.itemStyle} >
        {item.time} {'mins: '} {item.moment} {'- '} 
        {item.commentary}
      </Text>
    )
  }
 
  getItemLayout(data, index) {
    return { length: styles.listItem.height, offset: styles.listItem.height * index, index };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={(ref) => this.flatListRef = ref}
          data={this.dataSource}
          // renderItem={this.renderItem.bind(this)}
          renderItem={this.ItemView}
          keyExtractor={(item) => item.id}
          getItemLayout={this.getItemLayout.bind(this)} 
            
          />

          
        <Footer  />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10
  },
  listItem: {
    flex: 1,
    height: 40,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    paddingLeft: 10
  },

    itemStyle:{
    padding:20,
    fontSize:20
  }
});
 
// const DATA = [...Array(30).keys()].map((key) => ({ id: key.toString(), data: 'Item ' + key.toString()}));