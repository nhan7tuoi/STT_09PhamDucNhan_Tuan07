import React, {useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { HeartFilled,HeartOutlined } from '@ant-design/icons';

const data = [
    { id: 1, name: 'Pinarello Blue', price: 1800, img: require('../assets/xe1.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 2, name: 'Pina Mountain', price: 1700, img: require('../assets/xe2.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 3, name: 'Pina Bike', price: 1600, img: require('../assets/xe3.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 4, name: 'Pinarello Red', price: 1500, img: require('../assets/xe4.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 5, name: 'Pinarello Blue', price: 1400, img: require('../assets/xe1.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 6, name: 'Pina Mountain', price: 1300, img: require('../assets/xe2.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 7, name: 'Pina Bike', price: 1200, img: require('../assets/xe3.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 8, name: 'Pinarello Red', price: 1100, img: require('../assets/xe4.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' },
    { id: 8, name: 'Pina Mountain', price: 1100, img: require('../assets/xe4.png'), description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.' }
]

export default function App({navigation}) {
    const [selectedMenu, setSelectedMenu] = useState('ALL');
    const [filteredData, setFilteredData] = useState(data);
    const [isLiked, setIsLiked] = useState(true);


    const handleSearch = (text) => {
        const filteredProducts = data.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        console.log(filteredProducts);
        setFilteredData(filteredProducts);
    }
    const render = ({ item }) => (
        <Pressable 
        onPress={()=>{
            navigation.navigate('Screen3',item);
        }}
        style={{
            width: '45%',
            height: 200,
            backgroundColor: '#f8e6e7',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            shadowOffset: { width: 2, height: 6 },
            shadowOpacity: 0.3,
            marginBottom: 20, 
            marginRight: 32
        }}>
            <Pressable style={{
                top: 4,
                left: 4,
                position: 'absolute',
            }}>
            {isLiked ? (
                <HeartFilled
                style={{
                    fontSize: 24,
                    padding: 5,
                    color: 'red'
                }} />
            ):(
                <HeartOutlined
                style={{
                    fontSize: 24,
                    padding: 5,
                    color: 'black'
                }} />
            )}
            </Pressable>
            <Image resizeMode='contain' style={{ width: '80%', height: '70%' }} source={item.img} />
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>
                    {item.name}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, color: '#f7ba83', fontWeight: 'bold' }}>
                        $
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {item.price}
                    </Text>
                </View>
            </View>

        </Pressable>
    );
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ width: '100%', height: '20%', justifyContent: 'space-around' }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#E94141'
                }}>
                    The world’s Best Bike
                </Text>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable
                        onPress={() => {
                            setSelectedMenu('ALL');
                            setFilteredData(data);
                        }}
                        style={{ width: 100, height: 32, borderWidth: 1, borderColor: '#E94141', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={[{
                            fontSize: 17,
                            fontWeight: 500,
                            color: '#E94141'

                        }, { color: selectedMenu === 'ALL' ? '#E94141' : 'gray' }]}>
                            ALL
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setSelectedMenu('Pinarello');
                            handleSearch('Pinarello');
                        }}
                        style={{ width: 100, height: 32, borderWidth: 1, borderColor: '#E94141', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={[{
                            fontSize: 17,
                            fontWeight: 500,
                            color: 'gray'

                        }, { color: selectedMenu === 'Pinarello' ? '#E94141' : 'gray' }]}>
                            Pinarello
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setSelectedMenu('Mountain');
                            handleSearch('Mountain');
                        }}
                        style={{ width: 100, height: 32, borderWidth: 1, borderColor: '#E94141', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={[{
                            fontSize: 17,
                            fontWeight: 500,
                            color: 'gray'

                        }, { color: selectedMenu === 'Mountain' ? '#E94141' : 'gray' }]}>
                            Mountain
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ width: '100%', height: '80%' }}>
                <ScrollView style={{ width: '100%', height: '100%', padding: 10 }}>
                    <FlatList
                        data={filteredData}
                        renderItem={render}
                        keyExtractor={item => item.id}
                        numColumns={2}>
                    </FlatList>
                </ScrollView>
            </View>
        </View>
    );
}