import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Sample contacts data
const contacts = [
  { id: '1', name: 'Alice Anderson', phone: '123-456-7890' },
  { id: '2', name: 'Bob Brown', phone: '098-765-4321' },
  { id: '3', name: 'Charlie Chaplin', phone: '555-123-4567' },
  { id: '4', name: 'David Dorsey', phone: '555-555-5555' },
  { id: '5', name: 'Edward Elric', phone: '555-111-2222' },
  { id: '6', name: 'Frank Foster', phone: '333-222-1111' },
];

// ContactItem component to display individual contact
const ContactItem = ({ name, phone }) => (
  <View style={styles.contactItem}>
    <Icon name="user" size={30} color="#4CAF50" style={styles.icon} />
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  </View>
);

// LetterSidebar component for filtering by the first letter
const LetterSidebar = ({ onLetterSelect }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <View style={styles.sidebar}>
      {letters.map((letter) => (
        <TouchableOpacity key={letter} onPress={() => onLetterSelect(letter)}>
          <Text style={styles.sidebarLetter}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// ContactList component to display filtered contacts
const TestScreen = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Filter contacts by the selected letter
  const filteredContacts = selectedLetter
    ? contacts.filter((contact) =>
        contact.name.toUpperCase().startsWith(selectedLetter)
      )
    : contacts;

  return (
    <View style={styles.container}>
      {/* Letter Sidebar */}
      <LetterSidebar onLetterSelect={setSelectedLetter} />

      {/* Contact List */}
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem name={item.name} phone={item.phone} />}
        ListEmptyComponent={
          <Text style={styles.noContactsText}>No contacts found for "{selectedLetter}"</Text>
        }
      />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
  },
  sidebar: {
    width: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sidebarLetter: {
    fontSize: 16,
    color: '#333',
    padding: 5,
    marginVertical: 3,
    fontWeight: 'bold',
  },
  contactItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    color: '#555',
  },
  noContactsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#999',
  },
});
