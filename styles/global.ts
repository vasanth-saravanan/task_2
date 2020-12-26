import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  layout: {
    padding: 20,
    backgroundColor : "#fcad03",
    height : "100%"
  },
  backgroundContainer: {
    height : "100%",
    width : "100%",
    backgroundColor: "#fcad03"
  },
  topContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fcad03",
    alignItems : 'center',
  },
  innerContainer: {
    backgroundColor: "#fff",
    position: 'relative',
    marginBottom : '15%',
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    padding : "10%",
  },
  greet : {
    color : "#fff",
    fontSize : 25,
    fontWeight : 'bold',
    marginTop : "25%",
  },
  input: {
    borderRadius: 5,
    borderColor: '#fcad03',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  primaryButton: {
    backgroundColor: '#fcad03',
    borderRadius: 5,
    marginBottom: 20,
    height: 40,
    justifyContent: 'center'

  },
  secondaryButton: {
    backgroundColor: '#74b9ff',
    borderRadius: 5,
    marginBottom: 20,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    paddingBottom: 10
  },
  contentText : {
    fontSize : 18,
    color : "#fff",
    fontWeight : 'bold'
  },
  astroidCard: {
    padding: 20,
    elevation: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    // justifyContent: 'center',
    textAlign: 'left',
    // alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
})

export default styles