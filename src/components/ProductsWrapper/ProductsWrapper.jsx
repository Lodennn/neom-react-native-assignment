import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import ProductCard from '../ProductCard/ProductCard';

const ProductsWrapper = props => {
  return (
    <FlatList
      style={styles.wrapper}
      data={props.data}
      renderItem={({item}) => {
        return <ProductCard product={item} />;
      }}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 60,
  },
});

export default ProductsWrapper;
