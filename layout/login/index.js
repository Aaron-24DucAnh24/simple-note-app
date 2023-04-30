import React, { useState, useCallback } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from "react-native"
import styles from "./style"
import AuthenInput from "../../component/authenInput"
import AuthenButton from "../../component/authenButton"
import API from "../../api/index"
import { useFocusEffect } from "@react-navigation/native"

export default function Login({navigation}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useFocusEffect(
        useCallback(() => {
            setPassword('')
            setUsername('')
        }, [])
    )

    async function handleLogin() {
        if(!username || !password)
            Alert.alert("Thiếu thông tin đăng nhập", "", [{text: 'OK', type: 'cancel'}])
        else {
            const ret = await API.login(username, password)
            if(ret) {
                setPassword('')
                setUsername('')
                navigation.navigate('main', {name: ret})
            }
            else{
                Alert.alert("Thông tin đăng nhập không chính xác", "", [{text: 'OK', type: 'cancel'}])
                setUsername('')
                setPassword('')
            }
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Đăng nhập</Text>
            </View>
            
            <SafeAreaView style={styles.inputsContainer}>
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
            </SafeAreaView>

            <AuthenButton
                name={'Đăng nhập'}
                onClick={handleLogin}
            />

            <TouchableOpacity 
                style={styles.signupContainer}
                onPress={()=>navigation.navigate('signup')}
            >
                <Text style={styles.signupText}>
                    Bạn chưa có tài khoản?
                </Text>
            </TouchableOpacity>

        </View>
    )
}