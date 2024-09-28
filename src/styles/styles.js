import { StyleSheet } from 'react-native';
import { configureFonts, MD3DarkTheme, MD3LightTheme, Surface } from 'react-native-paper';

// Global styles for components
export const globalStyles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

const typography = {
  headlineMedium: {
    "fontFamily":'Sarem',
    "fontSize": 28,
    "fontWeight": "400",
    "letterSpacing": 0,
    "lineHeight": 38
  },
  headlineSmall: {

    "fontSize": 24,
    "fontWeight": "400",
    "letterSpacing": 0,
    "lineHeight": 32
  },
  titleLarge: {
      "fontSize": 22,
      "fontWeight": "400",
      "letterSpacing": 0,
      "lineHeight": 28
    },
}

// Apply the light theme with font configurations
export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // primary: '#600F0C',
    // onPrimary : "#F1E5E4",
    // poetColor : "#600F0C",
    // outline : "#600F0C",
    // surfaceVariant: "600F0C",
    // onSurfaceVariant : "#600F0C",
    // "error": "rgba(179, 38, 30, 1)",
    // "errorContainer": "rgba(249, 222, 220, 1)",
    "inverseOnSurface": "rgba(244, 239, 244, 1)",
    "inversePrimary": "rgba(208, 188, 255, 1)",
    "inverseSurface": "rgba(49, 48, 51, 1)",
    "onBackground": "rgba(28, 27, 31, 1)",
    "onError": "rgba(255, 255, 255, 1)",
    "onErrorContainer": "rgba(65, 14, 11, 1)",
    "onPrimary": "rgba(255, 255, 255, 1)",
    "onPrimaryContainer": "rgba(33, 0, 93, 1)",
    "onSecondary": "rgba(255, 255, 255, 1)",
    "onSecondaryContainer": "rgba(29, 25, 43, 1)",
    "onSurface": "rgba(28, 27, 31, 1)",
    "onSurfaceDisabled": "rgba(28, 27, 31, 0.38)",
    "onSurfaceVariant": "rgba(73, 69, 79, 1)",
    "onTertiary": "rgba(255, 255, 255, 1)",
    "onTertiaryContainer": "rgba(49, 17, 29, 1)",
    "outline": "rgba(121, 116, 126, 1)",
    "outlineVariant": "rgba(202, 196, 208, 1)",
    "primary": "rgba(103, 80, 164, 1)",
    "primaryContainer": "rgba(234, 221, 255, 1)",
    "scrim": "rgba(0, 0, 0, 1)",
    "secondary": "rgba(98, 91, 113, 1)",
    "secondaryContainer": "rgba(232, 222, 248, 1)",
    "shadow": "rgba(0, 0, 0, 1)",
    "surface": "rgba(255, 251, 254, 1)",
    "surfaceDisabled": "rgba(28, 27, 31, 0.12)",
    "surfaceVariant": "rgba(231, 224, 236, 1)",
    "tertiary": "rgba(125, 82, 96, 1)",
    "tertiaryContainer": "rgba(255, 216, 228, 1)",
    "text": "#600F0C"
  },
  
};

// Apply the dark theme with font configurations
export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#600F0C',
    onPrimary: '#F1E5E4',
    // outline : "#000000",
    // poetColor : "#F1E5E4",
    // onSurfaceVariant : "white",
    Surface : "#600F0C"
  },
};
