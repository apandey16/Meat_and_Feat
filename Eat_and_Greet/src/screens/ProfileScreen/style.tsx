import { StyleSheet } from 'react-native';

const ProfileStyles = StyleSheet.create({
    InnerContainer: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor:'#8EA7E9', 
        margin: 10, 
        minWidth: "93.5%",
      },
      TopContainer: {
        flex: 1, 
        flexDirection: 'row', 
        margin: 5, 
        padding: 5
      },
      EditButtonsContainer: {
        height: 30, 
        minWidth: 'auto',
        width:80, 
        backgroundColor: '#E5E0FF', 
        borderRadius: 10, 
        alignSelf: 'flex-start', 
        shadowOffset: { width: 2, height: 2 }, 
        shadowColor: '#000',
        shadowOpacity: 0.5,
      },
      EditButtonText: {
        textAlign: 'center',
        lineHeight: 30
      },
      TopRightDivider: {
        flexDirection: 'column', 
        minWidth: '70%'
      },
      SmallMargin: {
        marginLeft: 10
      },
      TopRightSideTop: {
        flex: 1, 
        flexDirection: 'row', 
        minWidth: "70%"
      },
      FriendText: {
        textAlign: 'center', 
        color: 'white', 
        shadowOffset: { width: 2, height: 2 }, 
        shadowColor: '#000',
        shadowOpacity: 0.5
      },
      DescriptionContainer: {
        flex: 2.5, 
        margin : 5
      },
      DescriptionContainerOuter: {
        flex: 1, 
        backgroundColor:'#E5E0FF', 
        margin: 10, 
        width: "80%", 
        alignSelf: 'center', 
        borderRadius: 10
      },
      DescriptionContainerInner: {
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor:'#FFF2F2', 
        margin: 10, 
        width: "90%", 
        alignSelf: 'center', 
        borderRadius: 10
      },
      InterestContainer: {
        flex: 4, 
        flexDirection: 'column', 
        margin: 5, 
        backgroundColor: '#8EA7E9'
      },
      BottomMargin: {
        marginBottom: 10
      },
      SmallPadding: {
        padding: 5
      }
});

export default ProfileStyles;