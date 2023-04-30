import React, { useState, useCallback } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from "react-native"
import styles from "./style"
import AuthenInput from "../../component/authenInput"
import AuthenButton from "../../component/authenButton"
import API from '../../api/index'
import { useFocusEffect } from "@react-navigation/native"

export default function Login({navigation}) {

    const [name, setName]           = useState('')
    const [username, setUsername]   = useState('')
    const [password, setPassword]   = useState('')
    const [password2, setPassword2] = useState('')

    useFocusEffect(
        useCallback(() => {
            setName('')
            setPassword('')
            setPassword2('')
            setUsername('')
        }, [])
    )

    async function handleSignIn() {
        if(!name||!password||!password2||!username) {
            Alert.alert("Vui lòng nhập đủ thông tin", "", [{text: "OK", type: 'cancel'}])
            return
        }
        if(password != password2) {
            Alert.alert("Xác nhận lại mật khẩu", "", [{text: "OK", type: 'cancel'}])
            setPassword2('')
            return
        }

        const ret = await API.signIn(username, password, name)
        if(!ret) {
            Alert.alert("Tên đăng nhập đã tồn tại", "", [{text: "OK", type: 'cancel'}])
            setUsername('')
            return
        } else navigation.navigate('main', {name: ret})
    }

    return (
        <View style={styles.container}>

            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{'Đăng ký'}</Text>
            </View>
            
            <SafeAreaView style={styles.inputsContainer}>

                <AuthenInput
                    name={'Tên gọi'}
                    secure={false}
                    value={name}
                    setValue={setName}
                />

                <AuthenInput
                    name={'Tên đăng nhập'}
                    secure={false}
                    value={username}
                    setValue={setUsername}
                />

                <AuthenInput
                    name={'Mật khẩu'}
                    secure={true}
                    value={password}
                    setValue={setPassword}
                />

                <AuthenInput
                    name={'Xác nhận mật khẩu'}
                    secure={true}
                    value={password2}
                    setValue={setPassword2}
                />

            </SafeAreaView>

            <AuthenButton
                name={'Đăng ký'}
                onClick={handleSignIn}
            />

            <TouchableOpacity 
                style={styles.signupContainer}
                onPress={()=>navigation.navigate('login')}
            >
                <Text style={styles.signupText}>Bạn đã có tài khoản?</Text>
            </TouchableOpacity>

        </View>
    )
}