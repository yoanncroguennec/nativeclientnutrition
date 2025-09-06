import { StyleSheet } from 'react-native'

export const getStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#111' : '#fff',
      padding: 16,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme === 'dark' ? '#fff' : '#000',
    },
    text: {
      color: theme === 'dark' ? '#eee' : '#333',
      marginBottom: 4,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 8,
      marginRight: 10,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#222' : '#f9f9f9',
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
    },
  })

// import { StyleSheet } from "react-native";

// export const stylesHistoryScreen = (theme: "light" | "dark") =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: theme === "dark" ? "#121212" : "#FFFFFF",
//       padding: 16,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: "bold",
//       color: theme === "dark" ? "#FFFFFF" : "#000000",
//       marginBottom: 12,
//     },
//     item: {
//       backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F5F5",
//       borderRadius: 8,
//       padding: 12,
//       marginBottom: 12,
//     },
//     text: {
//       color: theme === "dark" ? "#FFFFFF" : "#000000",
//     },
//     image: {
//       width: "100%",
//       height: 150,
//       borderRadius: 8,
//       marginTop: 8,
//     },
// })

// // export default stylesHistoryScreen;
