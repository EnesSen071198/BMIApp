import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f8ff', // Daha şık bir arka plan rengi
  },
  input: {
    height: 40,
    borderColor: '#4682b4', // Daha modern bir mavi ton
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 25, // Yuvarlak köşeler
    backgroundColor: '#ffffff', // Beyaz arka plan
    width: '100%',
    shadowColor: '#000', // Gölge ekleyerek öne çıkarma
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: '#4682b4', // Daha modern bir mavi ton
    padding: 12,
    borderRadius: 25, // Yuvarlak köşeler
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000', // Gölge ekleyerek butonu öne çıkarma
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#4682b4',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#4682b4',
  },
  error: {
    color: '#ff4500', // Hata mesajını daha belirgin yapmak için turuncu renk
    fontSize: 16,
    marginTop: 10,
  },
  table: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  tableTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    backgroundColor: '#f0f8ff',
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tableText: {
    fontSize: 16,
    color: '#333',
  },
  underweight: {
    color: 'red',
  },
  normal: {
    color: 'green',
  },
  overweight: {
    color: 'orange',
  },
  obesity: {
    color: 'red',
  },
  defaultText: {
    color: 'black',
  },
});

export default styles;
