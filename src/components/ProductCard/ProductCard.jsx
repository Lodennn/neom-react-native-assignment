import {Image, Text, View, StyleSheet} from 'react-native';

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
        <View style={styles.tag}>
          <Text style={styles.tagTitle}>PRICE</Text>
          <Text style={styles.tagValue}>{product.price}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTitle}>RATING</Text>
          <Text style={styles.tagValue}>{product.rating}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagTitle}>STOCK</Text>
          <Text style={styles.tagValue}>{product.stock}</Text>
        </View>
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
  tag: {
    backgroundColor: '#F88',
    padding: 10,
    paddingVertical: 5,
    color: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  tagTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProductCard;
