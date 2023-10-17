import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import axios from 'axios';
import ExpandingBox from '../../components/readMore';
import Icon from 'react-native-vector-icons'

const SLIDERWIDTH = Dimensions.get('window').width;

interface Product {
  id: number;
  title: string;
  category: { id: number; name: string; image: string };
  price: number;
  description: string;
  image: string[];
}


export default function App() {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products/63');
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerReturn}></TouchableOpacity>
        <Text style={styles.headerText}>Details</Text>
        <Text></Text>
        
      </View>

      <ScrollView>
        {product && (
          <View style={styles.contentProduct}>
            <View style={styles.contentProductTop}>
              <View style={styles.contentProductTopImagem}>

              <ScrollView horizontal={true}>
                {product && product.image && product.image.length > 0 && (
                <Image source={{ uri: product.image[0] }}/>
                )}
                </ScrollView>

              </View>
              <View style={styles.contentProductTopText}>
                <View style={styles.contentProductTopTextContainer}>
                  <Text style={styles.contentProductTopTextName}>{product.title}</Text>
                  <Text style={styles.contentProductTopTextCategory}>{product.category.name}</Text>
                </View>
                <Text style={styles.contentProductTopTextPrice}>${product.price}</Text>
              </View>
            </View>

            <View style={styles.contentProductBottom}>
              <Text style={styles.contentProductBottomDescription}>{product.description}</Text>
              <TouchableOpacity style={styles.contentProductBottomShipping}>
                <Text>Shipping Info</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contentProductBottomSuport}>
              <ExpandingBox title="Suport" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. " />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.footer}>
            <View style={styles.footerText}>
          <Text style={styles.footerTitle}>You can also like this</Text>
          <Text style={styles.footerCounter}>12 items</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Add other products you want to display here */}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}




const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    header:{
        paddingTop:45,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    headerText:{
        paddingTop:10,
        paddingBottom:12,
        fontSize:18,
        lineHeight:22,
    },
    headerReturn:{
        
    },
    contentProduct:{
        alignContent:"center",
        justifyContent:"center",
        height:843,
    },
    contentProductTop:{
        flexDirection:"column",
        justifyContent:"center",

    },
    contentProductTopImagem:{
        justifyContent:"center",
        alignItems:"center",
        height:413,
        width:SLIDERWIDTH,
        padding:0,
        
    },
    contentProductTopText:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop: 64,
        paddingBottom: 40,
        paddingLeft:16,
        paddingRight:16
    },
    contentProductTopTextContainer:{
        flexDirection:"column"

    },
    contentProductTopTextName:{
        fontSize:24,
        lineHeight:28.8
    },
    contentProductTopTextCategory:{
        fontSize: 11,
        color:"#9B9B9B"
    },
    contentProductTopTextPrice:{
        fontSize: 24,
    },
    contentProductBottom:{
      
        alignContent:"center",
        justifyContent:"center",
    },
    contentProductBottomDescription:{
        fontSize:14,
        paddingBottom:16,
        paddingLeft:16,
        paddingRight:16,
        lineHeight:21
    },
    contentProductBottomShipping:{
        justifyContent:"center",
        alignItems:"flex-start",
        height:58,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBottomColor: "#B6B6B6",
        borderTopColor: "#B6B6B6",
        backgroundColor:"#FFF",
        fontSize:16,
        paddingLeft:16,
        lineHeight:21.79,
        paddingRight:16

    },
    contentProductBottomSuport:{
        justifyContent:"center",
        alignItems:"flex-start",
        lineHeight:21.79,
        borderBottomWidth:1,
        borderBottomColor: "#B6B6B6",
        borderTopColor: "#B6B6B6",
        backgroundColor:"#FFF",
        fontSize:16,
        paddingLeft:16,
        paddingRight:16,
        minHeight:58
    },
    footer:{
        alignContent:"center",
        justifyContent:"center",
        height:410,
        paddingLeft:16,
        paddingRight:16
    },
    footerText:{
        flexDirection:"row",
        justifyContent:"space-between",
        lineHeight:22
    },
    footerCounter:{
        fontSize:11,
        color:"#9B9B9B"
    },
    footerTitle:{
    fontSize:18,
    paddingLeft:16
    },
});