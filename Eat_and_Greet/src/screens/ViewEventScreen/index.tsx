import { Image, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Toolbar } from '../../comps/Toolbar/toolbar';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import styles from '../../style';
import localstyles from './style';

function ViewEventScreen() {

    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <View style={localstyles.outerContainer}>
            <View style={localstyles.innerContainer}>
              <View style={localstyles.eventNameContainerStyling}>
                <Text style={localstyles.eventNameTextStyling}> Cameron's Birthday</Text>
              </View>
              <View style={localstyles.imageContainerStyling}>
                <View style={localstyles.imageStyling}>
                  {/* Eventually will want to switch this to a box that an image will fill, no clue how to do that */}
                  <TouchableOpacity>
                    <Image style={localstyles.pngStyling}source={require('../../../assets/images/uploadImage.png')}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={localstyles.descriptionContainerStyling}>
                <Text style={localstyles.descriptionTextStyling}>Date/Time: 10/10 10:10 </Text>
                <Text style={localstyles.descriptionTextStyling}>Host Name: Cameron Morrow </Text>
                <Text style={localstyles.descriptionTextStyling}>Spots Filled: 1/4 </Text>
                <Text style={localstyles.descriptionTextStyling}>Description: This is Cameron's Birthday Party please attend it!! </Text>
              </View>
            </View>
          </View>
        <RoundedButton name='Join Event' width={'80%'}/>
        </View>
        <Toolbar />
      </View>
    );
}

export default ViewEventScreen;