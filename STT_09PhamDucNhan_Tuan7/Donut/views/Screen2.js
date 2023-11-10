import React, { useState, useReducer } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                quantity: state.quantity + 1,
                total: (state.quantity + 1) * state.cost,
            };
        case 'DECREMENT':
            return {
                ...state,
                quantity: Math.max(state.quantity - 1, 1),
                total: Math.max((state.quantity - 1) * state.cost, state.cost),
            };
        default:
            return state;
    }
};
export default function App({ route, navigation }) {
    const cost = route?.params?.price;

    const init = {
        quantity: 1,
        total: cost,
        cost: cost,
    };
    const [state, dispatch] = useReducer(reducer, init)

    console.log(state.total);
    console.log(state.quantity);
    console.log(state.cost);
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
            <View style={{ width: '100%', height: "50%", justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: route.params.img }}
                    style={{ width: '100%', height: "100%" }}
                ></Image>
            </View>
            <View style={{ width: '100%', height: '50%', justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>{route.params.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: 500, color: 'gray' }}>{route.params.title}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>${state.total}.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text>Delevery in</Text>
                        <Text style={{ fontSize: 20, fontWeight: 700 }}>30 min</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                        <Pressable
                            onPress={() => {
                                dispatch({ type: 'DECREMENT' });
                            }}>
                            <MinusSquareOutlined style={{
                                backgroundColor: '#F1B000',
                                color: '#fff',
                            }} />
                        </Pressable>
                        <Text style={{ fontSize: 20, fontWeight: 700, paddingLeft: 15, paddingRight: 15 }}>{state.quantity}</Text>
                        <Pressable
                            onPress={() => {
                                dispatch({ type: 'INCREMENT' });
                            }}
                        >
                            <PlusSquareOutlined style={{
                                backgroundColor: '#F1B000',
                                color: '#fff',
                            }} />
                        </Pressable>
                    </View>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>
                    Restaurants info
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>
                    {route.params.desc}
                </Text>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Screen1')
                    }}
                    style={{ width: '100%', height: 60, backgroundColor: '#F1B000', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: 700 }}>Add to cart</Text>
                </Pressable>
            </View>
        </View>

    );
}