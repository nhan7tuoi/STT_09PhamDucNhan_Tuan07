import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, Image, FlatList } from "react-native";
import { SearchOutlined } from '@ant-design/icons';

const data = [
    {
        id: '1', img: require('../assets/yellow.png'), name: 'Yellow Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '10'
    },
    {
        id: '2', img: require('../assets/red.png'), name: 'Red Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '20'
    },
    {
        id: '3', img: require('../assets/green.png'), name: 'Green Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '30'
    },
    {
        id: '4', img: require('../assets/pink.png'), name: 'Pink Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '40'
    },
    {
        id: '5', img: require('../assets/yellow.png'), name: 'Yellow Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '10'
    },
    {
        id: '6', img: require('../assets/red.png'), name: 'Red Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '20'
    },
    {
        id: '7', img: require('../assets/green.png'), name: 'Green Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '30'
    },
    {
        id: '8', img: require('../assets/pink.png'), name: 'Pink Donut', title: 'Spicy tasty donut family', desc: 'Order a Large Pizza but the size is the equivalent of a medium small from other places at the same price range.', price: '40'
    }
]

export default function App({ navigation }) {
    const [selectedButton, setSelectedButton] = useState('Donut');

    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (text) => {
        const filteredProducts = data.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        console.log(filteredProducts);
        setFilteredData(filteredProducts);
    };


    const renderItems = ({ item }) => (
        <View style={{ marginBottom: 20, width: '100%', height: 120, padding: 5, flexDirection: 'row', backgroundColor: '#F4DDDD' }}>
            <View style={{ width: '35%', height: 115 }}>
                <Image
                    style={{ width: '100%', height: '95%' }}
                    resizeMode="contain"
                    source={item.img}></Image>
            </View>
            <View style={{ width: '50%', height: 115, justifyContent: 'space-around', paddingLeft: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 700 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: 400 }}>{item.title}</Text>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>${item.price}.00</Text>
            </View>
            <View style={{ width: '15%', height: 115, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Screen2',item)
                    }}
                    style={{ borderTopStartRadius: 50, borderRadius: 10, width: 45, height: 45, backgroundColor: '#F1B000', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 45, fontWeight: 400, color: '#fff' }}>+</Text>
                </Pressable>
            </View>
        </View>
    );
    return (
        <View style={{ padding: 10, flex: 1 }}>
            <View style={{ height: '30%', width: '100%', justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>Welcome, Jala!</Text>
                <Text style={{ fontSize: 24, fontWeight: 700 }}>Choice you Best food</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput 
                    onChangeText={
                        (text)=>{handleSearch(text)}
                    }
                    style={{ width: '80%', height: 60, fontSize: 20, borderWidth: 1, borderColor: 'red', paddingLeft: 20 }} placeholder="Search food">
                    </TextInput>
                    <Pressable style={{ width: 60, height: 60, backgroundColor: '#F1B000', justifyContent: 'center', alignItems: 'center' }}>
                        <SearchOutlined style={{
                            fontSize: 40, color: '#fff'
                        }} />
                    </Pressable>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable 
                    style={[{ borderRadius: 5,  height: 35, width: 100, borderWidth: 1, alignItems: "center", justifyContent: 'center' },
                    {backgroundColor : selectedButton === 'Donut' ? '#F1B000' : '#fff'}
                    ]}
                    onPress={()=>{
                        setSelectedButton('Donut')
                        setFilteredData(data)
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Donut</Text>
                    </Pressable>
                    <Pressable 
                    style={[{ borderRadius: 5,  height: 35, width: 100, borderWidth: 1, alignItems: "center", justifyContent: 'center' },
                    {backgroundColor : selectedButton === 'Pink Donut' ? '#F1B000' : '#fff'}
                    ]}
                    onPress={()=>{
                        setSelectedButton('Pink Donut')
                        handleSearch('Pink Donut')
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Pink Donut</Text>
                    </Pressable>
                    <Pressable 
                    style={[{ borderRadius: 5,  height: 35, width: 100, borderWidth: 1, alignItems: "center", justifyContent: 'center' },
                    {backgroundColor : selectedButton === 'Green Donut' ? '#F1B000' : '#fff'}
                    ]}
                    onPress={()=>{
                        setSelectedButton('Green Donut')
                        handleSearch('Green Donut')
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>Green Donut</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ height: '70%', width: '100%' }}>
                <ScrollView style={{ width: '100%' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        data={filteredData}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </ScrollView>
            </View>
        </View>

    );
}