import React from 'react';
import { View, Text, Image } from 'react-native';
import { HeartOutlined } from '@ant-design/icons';
import { Pressable } from 'react-native';


export default function App({route,navigation}) {
    return (
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{
                width: '100%',
                height: '50%',
                padding: 10,
                backgroundColor: '#f8e6e7',
            }}>
                <Image source={route.params.img}
                    resizeMode='contain'
                    style={{
                        width: '100%',
                        height: '100%'
                    }}>
                </Image>
            </View>
            <View style={{ width: '100%', height: '50%' ,justifyContent:'space-around'}}>
                <Text style={{
                    fontSize: 35,
                    fontWeight: '500'
                }}>
                    {route.params.name}
                </Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{ fontSize: 30, fontWeight: 500, color: 'gray', paddingRight: 30 }}>
                        15% OFF | 350$
                    </Text>
                    <Text style={{ textDecorationLine: 'line-through', fontSize: 30, fontWeight: 700 }}>
                        {route.params.price}$
                    </Text>
                </View>
                <Text style={{ fontSize: 26, fontWeight: 700 }}>
                    Description
                </Text>
                <Text style={{ fontSize: 22, color: 'gray', fontWeight: 500 }}>
                    {route.params.description}
                </Text>
                <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
                    <HeartOutlined style={{fontSize:50}}/>
                    <Pressable 
                    onPress={()=> {
                        navigation.navigate('Screen2')
                    }}
                    style={{width:'80%',backgroundColor:'#E94141',height:55,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:24,color:'#fff',fontWeight:600}}>
                            Add to cart
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}