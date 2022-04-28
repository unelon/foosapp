import react, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useUser } from '../hooks/useUser';
import { gs } from '../inc/Global';

export const CardUser = (props) => {

    const [resultColor, setResultColor] = useState(gs.textColor1)
    console.log(resultColor)

    const results = ["W","L","W","L","L"];

    const {
        user: { name },
      } = useUser();

    return (
        <View>
            <View style={[gs.borderRadius, gs.psBot, gs.psTop, style.wrapper]}>
                <Image source={{uri: "https://randomuser.me/api/portraits/women/67.jpg"}} style={{height: 50, width: 50, borderRadius: 100}}/>
                <View style={style.rightContent}>
                    <Text style={[gs.textColor1, gs.textbold, gs.textmd]}>{name}</Text>
                    <View style={style.info}>
                        <View>
                            <Text style={gs.textColor1}>Results:</Text>
                        </View>
                        <View style={style.results}>
                            {(results).map((result => (
                                <View style={[style.result, gs.bgcolor3, gs.borderRadius]}>
                                    <Text style={resultColor}>
                                        {result}
                                    </Text>
                                </View>
                            )))}
                        </View>
                    </View>
                </View>
            </View>    
        </View>
    );
}

const style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContent: {
        marginLeft: 10,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
    results: {
        display: 'flex',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 10
    },
    result: {
        padding: 4, 
        width: 25, 
        height: 25,
        marginRight: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});