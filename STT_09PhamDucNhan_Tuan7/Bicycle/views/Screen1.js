import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

export default function App({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', padding: 10 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>
                    A premium online store for
                </Text>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>
                    sporter and their stylish choice
                </Text>
            </View>
            <View style={{ width: '100%', height: '390px', backgroundColor: '#f8e6e7', justifyContent: 'center', alignItems: 'center', borderRadius: 40 }}>
                <Image
                    resizeMode='contain'
                    style={{ width: '90%', height: '80%' }} source={require('../assets/xe1.png')} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>
                    POWER BIKE
                </Text>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>
                    SHOP
                </Text>
            </View>
            <Pressable 
            onPress={()=>{
                navigation.navigate('Screen2');
            }}
            style={{ backgroundColor: '#E94141', width: '90%', height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#fff'
                }}>
                    Get Started
                </Text>
            </Pressable>
        </View>
    );
}