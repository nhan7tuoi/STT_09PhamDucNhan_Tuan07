
import { StyleSheet, Image, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { ArrowLeftOutlined, ShoppingCartOutlined,RollbackOutlined,HomeOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const data = [
  { id: '1', name: 'Ca nấu lẩu', price: '150.000đ', shop: 'DUC NHAN STORE', img: 'ca_nau_lau.png' },
  { id: '2', name: '1Kg Khô Gà Bơ Tỏi', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'ga_bo_toi.png' },
  { id: '3', name: 'Đồ Chơi Dạng Mô Hình', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'do_choi_dang_mo_hinh.png' },
  { id: '4', name: 'Lãnh Đạo Đơn Giản', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'lanh_dao_gian_don.png' },
  { id: '5', name: 'Xe Cần Cẩu Đa Năng', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'xa_can_cau.png' },
  { id: '6', name: 'Hiểu Lòng Trẻ Con', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'hieu_long_con_tre.png' },
  { id: '7', name: 'Chảo chống dính', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'xa_can_cau.png' },
  { id: '8', name: 'Chảo chống dính', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'xa_can_cau.png' },
  { id: '9', name: 'Chảo chống dính', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'xa_can_cau.png' },
  { id: '10', name: 'Chảo chống dính', price: '200.000đ', shop: 'DUC NHAN STORE', img: 'xa_can_cau.png' },
];

export default function App() {
  const renderItems = ({ item }) => (
    <View style={{borderBottomWidth:1}}>
      <View style={{ width: '100%', height: 90, flexDirection: 'row' ,padding:5}}>
        <View style={{ width: '25%', height: 90 }}>
          <Image style={{ width: 74, height: 74 }} source={require('../assets/' + item.img)} />
        </View>
        <View style={{ width: '45%', height: 90,justifyContent:'space-evenly'}}>
          <Text numberOfLines={1}  style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 14, fontWeight: '500' }}>Giá: {item.price}</Text>
          <Text>Shop:{item.shop} </Text>
        </View>
        <View style={{ width: '30%', height: 90, justifyContent: 'center',alignItems:'center' }}>
          <Button style={{ width: 80,height: 40,backgroundColor:'#F31111',color:'#fff',fontSize:18}}>Chat</Button>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 50, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity>
          <ArrowLeftOutlined style={{ fontSize: 24 ,color:'#fff',paddingLeft:20}} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>Chat</Text>
        <TouchableOpacity>
          <ShoppingCartOutlined style={{ fontSize: 24 ,color:'#fff',paddingRight:20}} />
        </TouchableOpacity>
      </View>
      <View style={{width:'100%',borderBottomColor:'#000',height:60,borderBottomWidth:1,backgroundColor:'#c4c4c4'}}>
        <Text style={{fontWeight:700,padding:10}}>
          Bạn có thắc mắc với sản phẩm vừa xem? Hãy chat với chúng tôi để được tư vấn và hỗ trợ tốt nhất.
        </Text>
      </View>
      <View style={{ width: '100%',height:600 }}>
      <ScrollView style={{ width: '100%',height:600 }}>
        <FlatList
          data={data}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      </View>
      <View style={{ width: '100%', height: 50, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity>
          <MenuUnfoldOutlined style={{ fontSize: 24 ,color:'#fff',paddingLeft:20}} />
        </TouchableOpacity>
        <HomeOutlined style={{ fontSize: 24 ,color:'#fff'}}/>
        <TouchableOpacity>
          <RollbackOutlined style={{ fontSize: 24 ,color:'#fff',paddingRight:20}} />
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
    justifyContent: 'center',
    width: 390,
    height: 844,
  },
});
