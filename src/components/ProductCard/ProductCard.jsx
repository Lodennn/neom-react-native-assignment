import {Image, Text, View, StyleSheet} from 'react-native';
import Tag from '../Tag/Tag';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Image
        source={{uri: product.images[0]}}
        style={{width: '100%', height: 140, marginVertical: 15}}
      />
      <View style={styles.tags}>
        <Tag title={'PRICE'} value={product.price} />
        <Tag title={'RATING'} value={product.rating} />
        <Tag title={'STOCK'} value={product.stock} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: 20,
    padding: 10,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  brand: {
    fontSize: 12,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  title: {
    marginTop: 5,
    letterSpacing: 3,
    color: '#888',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
});

export default ProductCard;
