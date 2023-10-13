import { View, Text } from 'react-native';

import style from '../../../style';
import localStyles from './index.styles';
import ChooseImageButton from '../../ChooseImageButton/ChooseImageButton';

function SpecificChatHeader() {
    
    return (
      <View style={localStyles.HeaderContainer}>
        <View style={localStyles.HeaderImageContainer}>
            <ChooseImageButton />
        </View>
        <View style={localStyles.HeaderTextContainer}>
            <Text style={style.HeaderText}>Jimmy John</Text>
        </View>
      </View>
    );

}

export default SpecificChatHeader;