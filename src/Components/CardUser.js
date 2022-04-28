import react from 'react';
import { Text, View, Image } from 'react-native';
import { useUser } from '../hooks/useUser';
import { gs } from '../inc/Global';

export const CardUser = (props) => {

    const {
        user: { name },
      } = useUser();

    return (
        <View style={gs.container}>
            <View style={[gs.containerColor, gs.borderRadius, gs.ps]}>
                <Image source={{uri: "https://randomuser.me/api/portraits/women/67.jpg"}} style={{height: 50, width: 50, borderRadius: 100}}/>
                <View>
                    <Text style={gs.textColor1}>{name}</Text>
                    <View>
                        <Text style={gs.textColor1}>Recent results:</Text>
                    </View>
                </View>
            </View>    
        </View>
    );
}