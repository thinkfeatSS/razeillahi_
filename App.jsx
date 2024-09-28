import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react';
import AppNavigatior from './src/route';
import AnimatedFlatList from './testing2';
import BootSplash from "react-native-bootsplash";
import { BottomNavigation,jumpTo, useTheme } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import Test from './src/screens/test';
import testTwo from './src/screens/testTwo';
import testThree from './src/screens/testThree';
import Topbar from './src/components/Topbar';

import { Drawer } from 'react-native-drawer-layout';
import { Drawer as DrawerPaper } from 'react-native-paper';


const App = () => {

  const [open, setOpen] = useState(false);
  const [active, setActive] = React.useState('');


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'bell-outline'},
    { key: 'test', title: 'Test Two', focusedIcon: 'bell-outline' },
    { key: 'test2', title: 'Test Three', focusedIcon: 'bell-outline' },
    { key: 'test3', title: 'Test Four', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    test: Test,
    test2: testTwo,
    test3: testThree,
  });

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  
  const theme = useTheme()
    return (

    //<AppNavigatior />
    //<AnimatedFlatList />

    <>
    <Drawer
    // theme={{ colors: theme.colors.primary } }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <DrawerPaper.Section title="Thinkfeat" theme={theme.colors.primary}>
        <DrawerPaper.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => {setActive('first');setOpen(false);}}
        />
        <DrawerPaper.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => {setActive('second');setOpen(false);}}
        />
      </DrawerPaper.Section>;
      }}
    >
    <>
    <Topbar methods={{open,setOpen}} />
     <BottomNavigation
     navigationState={{ index, routes }}
     onIndexChange={setIndex}
     renderScene={renderScene}
      activeColor="red"
    />
    </>
    </Drawer>
    </>
  );
};

export default App;

// <>
// <Topbar />
// <Icon name="rocket" size={30} color="#900" />
// {/* <Icon className="fab fa-yarn" size={38} colors="000000"></Icon> */}
// {/* <Icon name="youtube" size={38} colors="000000" /> */}
//   <View style={{ padding: 20, alignItems: 'center', backgroundColor: theme.colors.surface}}>
//     <Switch
//       value={isDarkTheme}
//       onValueChange={() => setIsDarkTheme(!isDarkTheme)}
//       />
//   </View>
//     <HomeScreen />
//   <View >

//  <AppNavigatior />
// </View>
//   </>    