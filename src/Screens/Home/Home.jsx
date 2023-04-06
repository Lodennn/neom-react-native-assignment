import {Text, View, StyleSheet} from 'react-native';
import {useGetProductsQuery} from '../../store/apis';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper';

const Home = props => {
  const {data: productsData, productsQueryResponse} = useGetProductsQuery();
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Main Products</Text>
      </View>
      {productsData?.products ? (
        <ProductsWrapper data={productsData.products} />
      ) : (
        <Text>No data !</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  mainTitle: {
    fontSize: 30,
  },
});

export default Home;
