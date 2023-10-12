import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    CornerButtonOutline: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#8EA7E9',
        borderRadius: 10,
        borderWidth: 2
    },
    ButtonText: {
        fontFamily: 'Courier New',
        fontSize:36,
        fontWeight:'bold'
    },
    HeaderText: {
        fontFamily: 'Courier New',
        fontSize:36,
        marginTop: 10,
        fontWeight:'bold',
        textAlign:'center',
    },
    Subheading: {
        fontFamily: 'Courier New',
        fontSize:24,
        fontWeight:'bold',
        alignSelf: 'center',
        textAlign:'center',
        marginTop: 10,
    },
    SubHeaderText: {
        fontFamily: 'Courier New',
        fontSize:24,
        fontWeight:'bold',
        margin: 5,
        marginLeft: 40,
        alignSelf: 'flex-start',
    },
    Text: {
        fontFamily: 'Courier New',
        fontSize:20,
        margin: 5,
        padding:10,
        alignSelf: 'center',
        textAlign:'center', 
        position: 'relative',
    }, 
    ScreenContainer: {
        flex: 1,
        backgroundColor: '#7286D3',
        alignItems: 'center',
        justifyContent: 'center',
      },
    OuterBox: {
        width: width - 25, 
        height: height - 185,
        margin: 10,
        backgroundColor: '#8EA7E9', 
        borderRadius: 10,
        alignItems: 'center',
    }, 
    InnerBox: {
        width: width - 65, 
        height: height - 210,
        margin: 10,
        backgroundColor: '#E5E0FF', 
        borderRadius: 10,
        alignItems: 'center',
    },
    ContentContainer: {
        flex: 1,
        backgroundColor: "#7286D3",
        alignItems: "center",
        justifyContent: "center",
      }
    });

    export const navHeaderStyles = StyleSheet.create({
        headerStyle: {
          backgroundColor: "#8EA7E9",
        },
        headerTitleStyle: {
          fontFamily: "Courier New",
          fontWeight: "bold",
          color: "black",
          fontSize: 20
        }
      });
      
export default style;
