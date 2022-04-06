import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { Avatar } from "react-native-elements"

export default function InfoUser(props){
    const{userInfo} = props
    const {photoURL, displayName, email} = userInfo
    console.log(photoURL)
    console.log(displayName)
    console.log(email)
    return(
        <View style={Styles.viewUserInfo}>
            <Avatar
                
                title="Irving"
                rounded
                size='large'
                containerStyle={Styles.userInfoAvatar}
                source={
                    photoURL ? {uri:photoURL} : require('../../../assets/img/avatar-default.jpg')
                }
            />
            <View>
                <Text style={Styles.displayName}>
                    {displayName ? displayName : 'Invitado'}
                </Text>
                <Text>
                    {email ? email : 'Entrada por SSO'}
                </Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    viewUserInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 'row',
        backgroundColor: '#f2f2f2',
        paddingTop: 30,
        paddingBottom: 30
    },
    userInfoAvatar:{
        marginTop: 20,
        backgroundColor: '#00a680'
    },
    displayName:{
        fontWeight: 'bold',
        paddingBottom: 5
    }
})