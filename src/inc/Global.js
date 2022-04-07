import { StyleSheet } from "react-native";
import react from "react";

const theme = {
    accent1: "#00C695",
    accent2: "green",

    textColor1: "#fff",
    textColor2: "blue",

    bgcolor1: "#171F23",

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
    textsm: {
        fontSize: theme.textSmall
    },
    textmd: {
        fontSize: theme.textMedium
    },
    textbold: {
        fontWeight: theme.textBold
    },
    textxl: {
        fontSize: theme.text
    },
    bgcolor1: {
        backgroundColor: theme.bgcolor1,
    },
    textColor1: {
        color: theme.textColor1,
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
    buttonPrimary: {
        backgroundColor: theme.accent1,
        color: theme.textColor1,
    },
    buttonSecondary: {
        backgroundColor: theme.accent2,
        color: theme.textColor1,
        },
    button: {
        padding: 20,
        width: "100%",
        borderRadius: theme.borderRadius
    },
    
});
