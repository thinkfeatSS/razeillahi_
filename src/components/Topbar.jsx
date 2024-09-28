import React, { useState } from 'react';
import { Appbar, Text, useTheme,Menu,TextInput, Button } from 'react-native-paper';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useMyTheme } from '../context/ThemeContext';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Topbar = (props) => {
  // Varibles start
  const poet = ["سيد علي محمد شاھ سنائي","سيد اجاز علي شاھ سنائي","سيد اياز علي شاھ سنائي"]
  const theme = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);
  const {isDarkTheme, toggleTheme} = useMyTheme()
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  var open = props.methods.open;
  var setOpen = props.methods.setOpen;

  // Varibles end
  
  // Functions start
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const toggleSearchBar = () => {setSearchVisible(!searchVisible);setSearchQuery(''); // Reset search query when search is toggled
  };
  const onChangeSearch = query => setSearchQuery(query);
  // Functions start

  return (
    <>
      {/* Make sure the status bar uses the same color as the Appbar */}
      <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
        <Appbar.Header  style={{ backgroundColor: theme.colors.primary, width: '100%', paddingHorizontal:8}}>
          {searchVisible ? <>
            <TextInput style={{ flex: 1, backgroundColor: theme.colors.primary}} textColor={theme.colors.onPrimary} placeholder="Search..." placeholderTextColor={theme.colors.onPrimary} value={searchQuery} onChangeText={onChangeSearch} underlineColor={theme.colors.onPrimary} autoFocus={true} selectionColor={theme.colors.onPrimary} right={<TextInput.Icon color={theme.colors.onPrimary}  icon="close" onPress={toggleSearchBar} />}/>
          </>:<>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action color={theme.colors.onPrimary} icon={MORE_ICON} 
        //onPress={openMenu} 
        onPress={()=>setOpen(!open)} 
        />}>
          <Button>test</Button>
          {/* {poet.map((_,i)=>(<Menu.Item key={i} titleStyle={{ color: theme.colors.poetColor }} onPress={() => {}} title={_} />))} */}
      </Menu>
          <Appbar.Action color={theme.colors.onPrimary} icon="magnify" onPress={toggleSearchBar} />
          <Appbar.Action color={theme.colors.onPrimary} icon={theme.dark?"weather-sunny":"weather-night"} onPress={() => toggleTheme(!isDarkTheme)} />
          <Appbar.Content title="رازالاھي"  titleStyle={{ color: theme.colors.onPrimary }} style={{alignItems:"flex-end"}}/>
          
          </> }
        </Appbar.Header>

        {/* Menu component */}
      </SafeAreaView>
    </>
  );
};


export default Topbar;
