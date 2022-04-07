import { StyleSheet } from "react-native";
import react from "react";

const theme = {
    accent1: "blue",
    accent2: "green",

    bgcolor1: "#263238",

    textSmall: 12,
    textMedium: 16,
    textLarge: 24,
    textBold: "bold",

    borderColor: "purple",
    borderRadius: 6,

    marginSmall: 10,
    marginMedium: 20,
    marginLarge: 30,
    marginXl: 40
} 

export const gs = StyleSheet.create({
  
    wrapper: {
        flex: 1,
    }, 
    container: {
        margin: 10,
    },
    title: {
        color: theme.accent1,
        fontSize: theme.textLarge
    },
    bgcolor1: {
        backgroundColor: theme.bgcolor1,
    },
    ms: {
        marginTop: theme.marginSmall,
        marginBottom: theme.marginSmall
    },
    mm: {
        marginTop: theme.marginMedium,
        marginBottom: theme.marginMedium
    },
    ml: {
        marginTop: theme.marginLarge,
        marginBottom: theme.marginLarge
    },
    mx: {
        marginTop: theme.marginXl,
        marginBottom: theme.marginXl
    },
});
