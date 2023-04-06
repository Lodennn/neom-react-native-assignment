import {Image, Text, View, StyleSheet} from 'react-native';

const Tag = props => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagTitle}>{props.title}</Text>
      <Text style={styles.tagValue}>{props.value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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

export default Tag;
