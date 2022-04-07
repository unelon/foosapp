import { StyleSheet } from "react-native";
import react from "react";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const theme = {
    accent1: "#00C695",
    accent2: "green",

    textColor1: "#fff",
    textColor2: "blue",
    textColor3: "#c4c4c4",

    bgcolor1: "#171F23",
    bgcolor2: "#212D33",

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
    bgcolor2: {
        backgroundColor: theme.bgcolor2,
    },
    borderRadius: {
        borderRadius: theme.borderRadius,
    },
    textColor1: {
        color: theme.textColor1,
    },
    textColor2: {
        color: theme.textColor2
    },
    textColor3: {
        color: theme.textColor3
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
    textInput: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#506B7A"
    }
    
});
