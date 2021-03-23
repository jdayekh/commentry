import '../global.js';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import IonIcon from 'react-native-vector-icons/Ionicons';

const data = require('../assets/commentaries.json');

const Footer = ({handleChange}) => {
  const [dataSource, setDataSource] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);
  const [id, setId] = React.useState(null);

  const [showScrollView, setShowScrollView] = useState(false);

  const getFooterHeight = () => {
    setShowScrollView(!showScrollView);
  };

  let JsonReversedArray = data.nodes.sort((a, b) => b.id - a.id);
  useEffect(() => {
    setDataSource(JsonReversedArray.slice(0, JsonReversedArray.length));

    return () => {
      setDataSource([]);
    };
  }, []);

  const handlePress = item => {
    setClickedItem(item.id);

    handleChange(item.id);
    console.log('Selected Footer:   ' + clickedItem);
    return clickedItem;
  };

  return (
    <SafeAreaView>
      {!showScrollView ? (
        <>
          <View style={[styles.container, {height: 160}]}>
            <TouchableOpacity
              style={[styles.footerHeadingWrap, {height: 40}]}
              onPress={() => getFooterHeight()}>
              <View style={[styles.footerHeading, {height: 40}]}>
                <Text style={styles.spacer}> space</Text>
                <Text style={styles.title}>Key Moments</Text>
                <IonIcon
                  name="ios-arrow-dropdown"
                  size={40}
                  color={global.dark_gray}
                />
              </View>
            </TouchableOpacity>

            <FlatList
              style={styles.flatList}
              data={dataSource}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <TouchableWithoutFeedback onPress={() => handlePress(item)}>
                  <View style={styles.key_moment}>
                    <Text style={styles.cellRow_title}>
                      {item.time} {'   '} {item.key_moment}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
        </>
      ) : (
        <View style={[styles.container, {height: 50, MarginBottom: 5}]}>
          <TouchableOpacity
            style={[styles.footerHeadingWrap, {height: 40}]}
            onPress={() => getFooterHeight()}>
            <View style={[styles.footerHeading_smaller, {height: 40}]}>
              <Text style={styles.spacer}> space</Text>
              <Text style={styles.title}>Key Moments</Text>
              <IonIcon
                name="ios-arrow-dropup"
                size={40}
                color={global.dark_gray}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'black',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },

  footerHeadingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    width: '98%',
  },

  footerHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    width: '98%',
  },
  footerHeading_smaller: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 25,
    width: '98%',
  },
  flatList: {
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
  },

  cellRow_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: global.dark_gray,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: global.dark_gray,
    padding: 3,
    textAlign: 'center',
    alignSelf: 'center',
  },

  spacer: {
    color: global.background_color,
  },

  key_moment: {
    width: '100%',
    paddingBottom: 3,
    fontSize: 14,
    marginLeft: 10,
  },
});

export default Footer;
