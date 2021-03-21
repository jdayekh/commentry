import '../global.js';

import {
  AppRegistry,
  Button,
  Dimensions,
  FlatList,
  Image,
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import Footer from '../components/Footer';

LogBox.ignoreAllLogs();
const data = require('../assets/commentaries.json');

const Landing = props => {
  let flatListRef = useRef(0);
  const myRef = useRef(null);

  const currentIndexRef = useRef(0);

  const [value, setValue] = React.useState(0);
  const [newValue, setNewValue] = React.useState(0);
  const [highlightRow, setHighlightRow] = React.useState(false);

  const handleChange = newValue => {
    setValue(newValue);
    setNewValue(newValue);
    if (newValue === value) {
      setHighlightRow(true);
    }
  };
  const COLORS = ['#f8edb2'];
  const FONT_SIZE = [15, 18, 20];
  const [dataSource, setDataSource] = React.useState([]);

  const getColor = index => {
    if (value === index) {
      return COLORS[0];
    }
  };

  const getFontSize = index => {
    if (value === index) {
      return FONT_SIZE[1];
    }
  };

  useEffect(() => {
    setDataSource(data.nodes);

    return () => {
      setDataSource([]);
    };
  }, []);

  useEffect(() => {
    let wait = new Promise(resolve => setTimeout(resolve, 500)); // Smaller number should work
    wait.then(() => {
      flatListRef.current.scrollToIndex({index: value - 1, animated: true});
    });
  }, [value]);

  const getItemLayout = (data, index) => {
    let index_hack = dataSource.length - value; //reverse index as are not dealing with id
    if (index_hack === index) {
      setHighlightRow(true);
    }
    return {
      length: styles.itemStyle.height,
      offset: styles.itemStyle.height * index_hack,
      index,
    };
  };

  const ItemView = ({item, index}) => {
    return (
      <>
        <View style={styles.itemStyle}>
          <View style={styles.itemStyleLeft}>
            <Text style={styles.itemStyle_circle}>{item.time}</Text>
            <View style={styles.itemStyleVerticalLine}></View>
          </View>

          <View style={styles.itemStyleRight}>
            {highlightRow ? (
              <Text
                style={[
                  styles.itemStyle_comments,
                  {
                    backgroundColor: getColor(item.id),
                    fontSize: getFontSize(item.id),
                  },
                ]}>
                {item.commentary}
              </Text>
            ) : (
              <Text style={styles.itemStyle_comments_selected}>
                {item.commentary}
              </Text>
            )}
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={dataSource}
        renderItem={ItemView}
        keyExtractor={item => item.id.toString()}
        ref={flatListRef}
        getItemLayout={getItemLayout.bind()}
      />

      <Footer handleChange={handleChange} />
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    padding: 10,
    fontSize: 15,
    height: 80,
    fontWeight: 'bold',
    color: global.dark_gray,
    backgroundColor: global.background_color,
  },

  itemStyleLeft: {
    width: 50,
  },
  itemStyle_circle: {
    marginTop: -10,
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    borderWidth: 2,
    color: 'black',
    paddingLeft: 10,
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: 'bold',
  },

  itemStyleVerticalLine: {
    height: '100%',
    width: 2,
    backgroundColor: global.dark_gray,
    marginLeft: 20,
  },

  itemStyleRight: {
    width: '90%',
  },
  itemStyle_comments: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginRight: 10,
  },
  itemStyle_comments_selected: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
});
