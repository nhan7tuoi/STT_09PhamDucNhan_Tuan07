import { StyleSheet, Image, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Rate } from 'antd';
import { ArrowLeftOutlined, ShoppingCartOutlined, MenuUnfoldOutlined, HomeOutlined, RollbackOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { TextInput } from 'react-native-paper';


const data = [
    { id: 1, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img1.png' },
    { id: 2, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img2.png' },
    { id: 3, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img3.png' },
    { id: 4, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img4.png' },
    { id: 5, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img5.png' },
    { id: 6, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img6.png' },
    { id: 7, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img1.png' },
    { id: 8, name: 'Cáp chuyển từ Cổng USB sang PS2 Phạm Đức Nhân 20019671', price: '20.000đ', img: 'img2.png' },
];
export default function App() {
    const renderItems = ({ item }) => (
        <View style={{ width: '50%', height: 220, padding: 10, justifyContent: 'space-around' }}>
            <Image style={{ width: 155, height: 90 }} source={require('../assets/' + item.img)} />
            <Text numberOfLines={2} style={{ fontSize: 16, fontWeight: 'bold' }}>
                {item.name}
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Rate disabled defaultValue={4} />
                <Text style={{ paddingLeft: 10 }}>(15)</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Giá: {item.price}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400', paddingLeft: 20 }}>-49%</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <ArrowLeftOutlined style={{ fontSize: 24, color: '#fff', paddingLeft: 20 }} />
                <TextInput
                    left={<TextInput.Icon icon="search-web" size={30} />}
                    style={{ width: 190, height: 40, backgroundColor: '#fff', borderRadius: 20, marginLeft: 20, borderRadius: 0 }} placeholder='Tìm kiếm'
                />
                <ShoppingCartOutlined style={{ fontSize: 24, color: '#fff', paddingLeft: 20 }} />
                <MenuFoldOutlined style={{ fontSize: 24, color: '#fff', paddingRight: 20 }} />
            </View>
            <View style={{width:'100%',height:655}}>
                <ScrollView style={{width:'100%',height:655}}>
                    <FlatList
                        data={data}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        contentContainerStyle={styles.gridContainer}
                    >
                    </FlatList>
                </ScrollView>
            </View>
            <View style={{ width: '100%', height: 50, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity>
                    <MenuUnfoldOutlined style={{ fontSize: 24, color: '#fff', paddingLeft: 20 }} />
                </TouchableOpacity>
                <HomeOutlined style={{ fontSize: 24, color: '#fff' }} />
                <TouchableOpacity>
                    <RollbackOutlined style={{ fontSize: 24, color: '#fff', paddingRight: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    gridContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
      },
});