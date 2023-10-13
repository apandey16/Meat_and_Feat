import { Dimensions, StyleSheet, PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const ViewEventStyles = StyleSheet.create({
    outerContainer: {
        flexDirection: "column", 
        backgroundColor: '#8EA7E9', margin: 10, 
        minWidth: "90%", 
        maxHeight: "80%", 
        bottom: '2%'
    },
    innerContainer: {
        margin: 10, 
        backgroundColor: '#E5E0FF'
    },
    eventNameContainerStyling: {
        flex: 2/3, 
        alignSelf: "center", 
        margin: 10, 
        backgroundColor: '#FFF2F2', 
        minWidth: '95%'
    },
    eventNameTextStyling: {
        textAlign: 'center', 
        fontSize: getFontSize(35)
    },
    imageContainerStyling: {
        flex: 2, 
        alignSelf: "center"
    },
    imageStyling: {
        backgroundColor: '#FFF2F2', 
        minWidth: '95%', 
        maxWidth: '100%', 
        maxHeight: '100%'
    },
    pngStyling: {
        width: 100, 
        height: 300, 
        resizeMode: 'contain', 
        alignSelf: 'center', 
        bottom: '20%'
    },
    descriptionContainerStyling: {
        flex: 3, 
        backgroundColor: '#FFF2F2', 
        margin: 10
    },
    descriptionTextStyling: {
        marginBottom: 10, 
        fontSize: getFontSize(20)
    }
});

export default ViewEventStyles;