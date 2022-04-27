import { StyleSheet, Text, View } from 'react-native'
import React,{useRef} from 'react'
import Loading from '../../components/Loading'
import Toast from 'react-native-toast-message'
import AddRestaurantForm from '../../components/Restaurant/AddRestaurantForm'
export default function AddRestaurant() {
    const toastRef = useRef()
  return (
    <View>
      <AddRestaurantForm toastRef={toastRef}/>
    </View>
  )
}

const styles = StyleSheet.create({})