import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated
} from 'react-native';

const { height, width } = Dimensions.get('window');

// Sample contact data with 4-5 items for each alphabet
const contacts = [
    { key: 'A', name: 'A Aziz Soomro Jcd' },
    { key: 'A', name: 'A Baqi (Larkana)' },
    { key: 'A', name: 'A Basit (U)' },
    { key: 'A', name: 'A Ghani' },
    { key: 'A', name: 'A Ghafoor' },
    
    { key: 'B', name: 'Babar Khan' },
    { key: 'B', name: 'Bilal Sheikh' },
    { key: 'B', name: 'Bisma Zafar' },
    { key: 'B', name: 'Baqir Hussain' },
    { key: 'B', name: 'Benazir Fatima' },
  
    { key: 'C', name: 'Catherine Doe' },
    { key: 'C', name: 'Chris Evans' },
    { key: 'C', name: 'Cindy Lam' },
    { key: 'C', name: 'Charles Babbage' },
  
    { key: 'D', name: 'Daniel Smith' },
    { key: 'D', name: 'David Johnson' },
    { key: 'D', name: 'Diana Brown' },
    { key: 'D', name: 'Dexter King' },
  
    { key: 'E', name: 'Elon Musk' },
    { key: 'E', name: 'Emily Clarke' },
    { key: 'E', name: 'Ethan Hunt' },
    { key: 'E', name: 'Eva Green' },
  
    { key: 'F', name: 'Farah Ali' },
    { key: 'F', name: 'Faisal Khan' },
    { key: 'F', name: 'Feroze Khan' },
    { key: 'F', name: 'Fatima Begum' },
  
    { key: 'G', name: 'George Harrison' },
    { key: 'G', name: 'Grace Kelly' },
    { key: 'G', name: 'Gordon Freeman' },
    { key: 'G', name: 'Gabrielle Union' },
  
    { key: 'H', name: 'Harry Potter' },
    { key: 'H', name: 'Hassan Ali' },
    { key: 'H', name: 'Huma Shah' },
    { key: 'H', name: 'Henry Ford' },
  
    { key: 'I', name: 'Ian Wright' },
    { key: 'I', name: 'Isabel Jones' },
    { key: 'I', name: 'Imran Khan' },
  
    { key: 'J', name: 'Jack Sparrow' },
    { key: 'J', name: 'Jasmine Bhatia' },
    { key: 'J', name: 'John Cena' },
    { key: 'J', name: 'James Bond' },
  
    { key: 'K', name: 'Kevin Hart' },
    { key: 'K', name: 'Katherine Lee' },
    { key: 'K', name: 'Kareem Abdul' },
    { key: 'K', name: 'Kiran Ahmed' },
  
    { key: 'L', name: 'Liam Neeson' },
    { key: 'L', name: 'Linda Brown' },
    { key: 'L', name: 'Lara Croft' },
  
    { key: 'M', name: 'Michael Jackson' },
    { key: 'M', name: 'Mona Lisa' },
    { key: 'M', name: 'Mary Jane' },
    { key: 'M', name: 'Martha Stewart' },
  
    { key: 'N', name: 'Nancy Drew' },
    { key: 'N', name: 'Neil Armstrong' },
    { key: 'N', name: 'Nina Smith' },
    
    { key: 'O', name: 'Oprah Winfrey' },
    { key: 'O', name: 'Omar Sharif' },
    { key: 'O', name: 'Olivia Pope' },
  
    { key: 'P', name: 'Peter Parker' },
    { key: 'P', name: 'Paul McCartney' },
    { key: 'P', name: 'Priyanka Chopra' },
  
    { key: 'Q', name: 'Quentin Tarantino' },
    { key: 'Q', name: 'Queen Latifah' },
    { key: 'Q', name: 'Quincy Jones' },
  
    { key: 'R', name: 'Robert Downey' },
    { key: 'R', name: 'Rachel Green' },
    { key: 'R', name: 'Rita Ora' },
  
    { key: 'S', name: 'Steve Jobs' },
    { key: 'S', name: 'Selena Gomez' },
    { key: 'S', name: 'Sarah Connor' },
  
    { key: 'T', name: 'Tom Hanks' },
    { key: 'T', name: 'Taylor Swift' },
    { key: 'T', name: 'Tim Cook' },
  
    { key: 'U', name: 'Uma Thurman' },
    { key: 'U', name: 'Usher Raymond' },
    { key: 'U', name: 'Umer Farooq' },
  
    { key: 'V', name: 'Vin Diesel' },
    { key: 'V', name: 'Vera Wang' },
    { key: 'V', name: 'Victoria Beckham' },
  
    { key: 'W', name: 'Will Smith' },
    { key: 'W', name: 'Walt Disney' },
    { key: 'W', name: 'Warren Buffet' },
  
    { key: 'X', name: 'Xander Cage' },
    { key: 'X', name: 'Xavier Woods' },
  
    { key: 'Y', name: 'Yasmin Khan' },
    { key: 'Y', name: 'Yusuf Pathan' },
  
    { key: 'Z', name: 'Zayn Malik' },
    { key: 'Z', name: 'Zara Khan' },
  ];

// Alphabet list
const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export default function ContactList() {
  const flatListRef = useRef(null); // Reference to FlatList for scrolling
  const [activeLetter, setActiveLetter] = useState(''); // For showing the overlay letter
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  // Function to scroll to section
  const scrollToSection = (letter) => {
    const index = contacts.findIndex(contact => contact.key === letter);
    if (index !== -1) {
      flatListRef.current.scrollToIndex({ index, animated: true });
      setActiveLetter(letter); // Update active letter here
    }
  };

  // Detect current letter while scrolling normally
  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const index = Math.floor(yOffset / 100); // 100 is the height of each item
    if (index >= 0 && index < contacts.length) {
      const currentLetter = contacts[index].key;
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

  return (
    <View style={styles.container}>
      {/* FlatList for contacts */}
      <FlatList
        ref={flatListRef}
        data={contacts}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text>{item.name}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll} // Update active letter while scrolling normally
        scrollEventThrottle={16} // To ensure real-time updates
        getItemLayout={(data, index) => (
          { length: 100, offset: 100 * index, index }
        )} // Optimization for smooth scrolling
      />

      {/* Alphabet Overlay */}
      <Animated.View style={[styles.letterOverlay, { opacity: overlayOpacity }]}>
        <Text style={styles.overlayText}>{activeLetter}</Text>
      </Animated.View>

      {/* Alphabet Index for fast scrolling */}
      <View style={styles.alphabetContainer} {...panResponder.panHandlers}>
        {alphabet.map((letter, index) => (
          <TouchableOpacity key={index} onPress={() => scrollToSection(letter)}>
            <Text style={[styles.letter, letter === activeLetter && styles.activeLetter]}>
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

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
    right: 10,
    top: 50,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  letter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#007AFF',
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
