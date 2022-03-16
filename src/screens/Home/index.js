import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  Button,
  Dimensions,
  StyleSheet,
} from 'react-native';
import styles from './styles';
let id = 0;
const {width, height} = Dimensions.get('window');


const Home = props => {
  const [searchedText, setsearchedText] = useState();
  const [unOrderedList, setunOrderedList] = useState([]);
  const [orderedList, setorderedList] = useState([])
  const pushToList = (data) => {
      if(data.trim('')) {
    id += 1;
    const dataToPush = {
      id: id,
      value: data,
    };
    unOrderedList.push(dataToPush);
    setunOrderedList(unOrderedList);
    setsearchedText('')}
    console.log(unOrderedList,"unOrderedList")
  };

  const cleanList = () => {
    setunOrderedList([]);
    setsearchedText('')
  };
  const ascendingOrder = () => {
    setsearchedText('')
      unOrderedList.map((item,index) => {
        orderedList.push(item?.value)
      })
    console.log(orderedList,"orderedList")
    orderedList.sort(function(a, b){return a-b});
    console.log(orderedList,"orderedList sorted")

    setunOrderedList(orderedList)
//    unOrderedList.sort()
  };

  
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{height: height, width: width}}>
        <TextInput
          value={searchedText}
          style={{
            width: width,
            height:height*0.05,
            color: 'black',
            borderWidth: 1,
          }}
          selectionColor={'black'}
          keyboardType={'default'}
          returnKeyType={'next'}
          onChangeText={text => setsearchedText(text)}
        />
        <Button
          title="Add to List"
          onPress={() => pushToList(searchedText)}></Button>
        <Button title="Clean List" onPress={() => cleanList()}></Button>
        <Button title="Rearrange List" onPress={() => ascendingOrder()}></Button>
        <FlatList
          data={unOrderedList}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.value}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          extraData={unOrderedList}
          ItemSeparatorComponent={() => {
            return  <View
            style={{
              height: 1,
              width: "100%",
              marginVertical:20,
              backgroundColor: "#607D8B",
            }}
          /> ;
          }}
        />
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  itemsText: {
    fontSize: 24,
    color: 'black',
    paddingLeft: 10,
  },

  button: {
    width: '90%',
    height: 45,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 6,
    alignSelf: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});

export default Home;
