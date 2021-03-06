import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        height: "100%",
    },
    textInput: {
        fontSize: 20,
        color: "black",
        marginBottom: 20,
    },
    row: {
      flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    },
    iconContainer: {
        backgroundColor: "#e7e7e7",
        padding: 7,
        borderRadius: 13,
        marginRight: 15,
    },
    locationText: {
        fontWeight: "400",
    },
});

export default styles;
