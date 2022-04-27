import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Icon, Button } from 'react-native-elements'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'
export default function AddRestaurantForm(props) {
    const {toastRef} = props
    const navigation = useNavigation()
  return (
    <View style={styles.formContainer}>            
            <Input
                placeholder="Nombre del restaurante"
                containerStyle={styles.inputForm}              
                
            />
            <Input
                placeholder="Direccion"
                containerStyle={styles.inputForm}                           
            />
            <Button
                title='Crear Restaurante'
                containerStyle={styles.btnCointainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
        </View>
  )
}
const onSubmit = () => {
    console.log('prueba')
} 
const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30
    },
    inputForm:{
        width: '100%',
        marginTop: 20
    },
    btnCointainerLogin:{
        marginTop:20,
        width: '95%',
        
    },
    btnLogin:{
        backgroundColor: '#00a680'
    },
    iconRight:{
        color: '#c1c1c1'
    },
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20
    }

})