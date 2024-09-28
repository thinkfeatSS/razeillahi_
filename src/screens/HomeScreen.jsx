import React, {useState, useRef} from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Button as RButton,
  TouchableOpacity,
  Text as RText,
  ScrollView,
  FlatList,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';
import {Button, Card, Text, Switch, useTheme} from 'react-native-paper';
import {poetry} from '../constants/poetry';
import Topbar from '../components/Topbar';
import ICONS from '../theme/icons';

const { height, width } = Dimensions.get('window');

// const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
// const alphabet = [...'ا ب پ پ پ ت ث ت ث ث ج ج جه چ ج چ ح خ د ڌ ڏ ڊ ڍ ذ ر ڙ ز س ش ص ض ط ظ ع غ ف ق ق ڪ ک گ ل م ن ھ ن و ی'];
const alphabet = [...'ابٻڀت'];

const HomeScreen = props => {
  const flatListRef = useRef(null); // Reference to FlatList for scrolling
  const [activeLetter, setActiveLetter] = useState(''); // For showing the overlay letter
  const overlayOpacity = useRef(new Animated.Value(0)).current;

    // Function to scroll to section
    const scrollToSection = (letter) => {
      const index = poetry.findIndex(contact => contact.title == letter);
      if (index != -1) {
        flatListRef.current.scrollToIndex({ index, animated: true });
        setActiveLetter(letter); // Update active letter here
      }
    };
  
    // Detect current letter while scrolling normally
    const handleScroll = (event) => {
      const yOffset = event.nativeEvent.contentOffset.y;
      const index = Math.floor(yOffset / 100); // 100 is the height of each item
      if (index >= 0 && index < poetry.length) {
        const currentLetter = poetry[index].key;
        setActiveLetter(currentLetter); // Dynamically set active letter while scrolling
      }
    };
  
    // PanResponder to handle dragging over the alphabet index
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
          const alphabetHeight = height / alphabet.length;
          const index = Math.min(
            Math.max(Math.floor(gestureState.moveY / alphabetHeight), 0),
            alphabet.length - 1
          );
          scrollToSection(alphabet[index]);
        },
        onPanResponderGrant: () => {
          Animated.timing(overlayOpacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        },
        onPanResponderRelease: () => {
          Animated.timing(overlayOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        },
      })
    ).current;


  const theme = useTheme();
  const Item = ({_}) => (
    <View style={{marginRight:34,height:500}}>
      <View
        style={{
          backgroundColor: theme.colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          borderRadius: 8,
          //height:50,
          // width: '100%',
          marginHorizontal: 4
        }}>
        <Text
          variant="bodyLarge"
          style={{color: theme.colors.onPrimary, textAlign: 'center'}}>
          {_.number}{' '}
        </Text>
        <Text
          variant="bodyLarge"
          style={{color: theme.colors.onPrimary, textAlign: 'center'}}>
          سيد علي محمد شاھ سنائي
        </Text>
        <Text
          variant="headlineMedium"
          style={{color: theme.colors.onPrimary, textAlign: 'center'}}>
          {_.title}{' '}
        </Text>
      </View>
      <Text
        variant="bodyLarge"
        style={{color: theme.colors.onSurface, textAlign: 'center', margin:4}}>
        {_.data}
      </Text>
    </View>
  );

  return (
    <View style={styles.container} >
    {/* <Topbar methods={{open,setOpen}} /> */}
      <FlatList
         ref={flatListRef}
        showsVerticalScrollIndicator={false}
        style={{paddingVertical:4, backgroundColor: theme.colors.surface}}
        data={poetry}
        renderItem={({item}) => <Item _={item} />}
        keyExtractor={item => item.number}
        onScroll={handleScroll} // Update active letter while scrolling normally
        scrollEventThrottle={16} // To ensure real-time updates

        getItemLayout={(data, index) => (
          { length: 500, offset: 500 * index, index }
        )} // Optimization for smooth scrolling
      />

        {/* Alphabet Overlay */}
        <Animated.View style={[styles.letterOverlay, { opacity: overlayOpacity }]}>
          <Text style={styles.overlayText}>{activeLetter}</Text>
        </Animated.View>

        {/* Alphabet Index for fast scrolling */}
        <View style={[styles.alphabetContainer,{backgroundColor:theme.colors.primary}]} {...panResponder.panHandlers}>
          {alphabet.map((letter, index) => (
            <TouchableOpacity style={{backgroundColor: letter == activeLetter ? theme.colors.onPrimary: undefined,borderRadius:100}} key={index} onPress={() => scrollToSection(letter)}>
              <Text style={[styles.letter,{color:theme.colors.onPrimary}, letter == activeLetter && {fontWeight:'bold',color:theme.colors.primary}]}>
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  contactItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 100, // Set a fixed height for each contact for smooth scrolling
    justifyContent: 'center',
  },
  alphabetContainer: {
    position: 'absolute',
    right: 0,
    //top: 50,
    height: '100%',
    paddingHorizontal:4,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#f0f0f0',
    //backgroundColor:theme.colors.surface,
  },
  letter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 16,
    //color: '#007AFF',
  },
  activeLetter: {
    color: 'green',
    fontWeight: 'bold',
  },
  letterOverlay: {
    position: 'absolute',
    top: height / 2 - 40,  // Center the overlay vertically
    left: width / 2 - 40,  // Center the overlay horizontally
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 32,
    color: '#fff',
  },
});

export default HomeScreen;

//<ICONS.Entypo name="rocket" size={64} color="black" />
// <TouchableOpacity onPress={()=>props.navigation.navigate('test')} style={{width:250,height:50,borderRadius:10,backgroundColor:'yellow',alignItems:'center',justifyContent:'center'}} >
//<Text>Click Me</Text>
//</TouchableOpacity> */}
//{/* <View style={{ padding: 20, alignItems: 'center', backgroundColor: theme.colors.primary}}>
//--</View> */}
// {/* <Text variant="displayLarge">علي نبي حيدر</Text> */}
// {/* <Text variant="displayMedium">علي نبي حيدر</Text> */}
// {/* <Text variant="displaySmall">علي نبي حيدر</Text> */}
// <Text variant="headlineSmall">علي نبي حيدر</Text>
// <Text variant="headlineSmall">علي نبي حيدر</Text>