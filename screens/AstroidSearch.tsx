import React, { useState } from 'react'
import { View, TextInput ,SafeAreaView ,ScrollView,Text, StatusBar, KeyboardAvoidingView} from 'react-native'
import Button from '../components/Button'
import styles from '../styles/global'
import { SearchAstroid, StartRandomSearch } from '../redux/actions/astroidAction'
import { connect } from 'react-redux'


type Props = {
  SearchAstroid: Function
  StartRandomSearch: Function
  navigation: {
    navigate: Function
  }
}


const AstroidSearch = (props: Props) => {

  const [id, setId] = useState('')

  const handleChange = (value: string) => {
    setId(value)
  }

  const handleSubmit = () => {
    console.log(id)
    props.SearchAstroid(id)
    props.navigation.navigate('Astroid')
  }
  const handleRandom = () => {
    props.StartRandomSearch()
    props.navigation.navigate('Astroid')
  }

  return (
    <ScrollView style={styles.backgroundContainer}>
      <StatusBar backgroundColor={"#fc9d03"}/>
    <View style={styles.topContainer}>
      <Text style={styles.greet}>WELCOME</Text>
      <View style={styles.innerContainer}>
    <TextInput style={styles.input} placeholder={"Enter Asteroid ID"} onChangeText={(value: string) => handleChange(value)} value={id} />
      <Button style={styles.primaryButton} title='Submit' onPress={() => handleSubmit()} disabled={id.length === 0} />
      <Button style={styles.secondaryButton} title='Random Asteroid' onPress={() => handleRandom()} disabled={false} />
    </View>
    </View>
    </ScrollView>
  )
}
export default connect(null , {SearchAstroid, StartRandomSearch})(AstroidSearch)