import React, {useState,useEffect} from "react";
import {View, Text, StyleSheet} from "react-native"
import {Icon} from 'react-native-elements' 
import {firebaseApp} from '../../utils/firebase'
import firebase from "firebase/app";
import {useNavigation} from '@react-navigation/native'
import Toast from "react-native-toast-message"
export default function Restaurants(props){
    const navigation = useNavigation()
    
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo)=>{
            setUser(userInfo)
        })
    }, [])
    
    return(
        <View style={styles.viewBody}>
            <Text>Restaurants</Text>
            {user && (
            <Icon
                reverse
                type="material-community"
                name='plus'
                color='#00a680'
                containerStyle={styles.btnContainer}
                onPress={()=> navigation.navigate('add-restaurant')}
            />
            )}
        </View>
    )
}

const styles= StyleSheet.create({
    viewBody:{
        flex:1,
        backgroundColor: '#fff',

    },
    btnContainer:{
        position:'absolute',
        bottom: 10,
        right: 10,
        shadowColor:'black',
        shadowOffset:{width: 2, height:2},
        shadowOpacity: 0.5
    }
})