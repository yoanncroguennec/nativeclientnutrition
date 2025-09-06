import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@/app/(auth)/login/container_App/navigators/customDrawerRootNavigator/CustomDrawerRootNavigator';

type NavigationProp = StackNavigationProp<RootStackParamList>;

function useTypeSafeNavigation() {
  const navigation = useNavigation<NavigationProp>();

  return navigation;
}

export default useTypeSafeNavigation;
