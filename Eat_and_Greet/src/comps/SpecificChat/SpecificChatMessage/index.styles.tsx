import { StyleSheet, PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const localStyles = StyleSheet.create({
    SentMessageOuterContainer: {
        paddingBottom: 10,
        paddingRight: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    SentMessageInnerContainer: {
        backgroundColor: '#CFFFBE',
        borderRadius: 10,
        maxWidth: '80%',
    },
    RecievedMessageOuterContainer: {
        paddingBottom: 10,
        paddingLeft: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    RecievedMessageInnerContainer: {
        backgroundColor: '#D5D5D5',
        borderRadius: 10,
        maxWidth: '80%',
    },
    MessageText: {
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: getFontSize(12),
        padding:5,
        textAlign:'left', 
        position: 'relative',
    },
    TimeStampText: {
        alignSelf: 'flex-end',
        fontFamily: 'Courier New',
        fontStyle: 'italic',
        fontSize: getFontSize(8),
        padding:5,
        textAlign:'left', 
        position: 'relative',
    }, 
});
      
export default localStyles;