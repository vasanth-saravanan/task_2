import React from 'react'
import AstroidCard from '../components/AstroidCard'
import { Text, View } from 'react-native'
import styles from '../styles/global'
import { connect } from 'react-redux'
import {Astroid} from '../types/types'

type Props = {
  astroid: Astroid
}

const AstroidView = (props: Props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.contentText}>Name</Text>
      <AstroidCard >
      <Text style={styles.text}>
        {props.astroid.astroid.name}
      </Text>
      </AstroidCard>
      <Text style={styles.contentText}>Nasa jpl url</Text>
      <AstroidCard>
      <Text style={styles.text}>
        {props.astroid.astroid.nasa_jpl_url}
      </Text>
      </AstroidCard>
      <Text style={styles.contentText}>Hazardous</Text>
      <AstroidCard >
      <Text style={styles.text}>
        {props.astroid.astroid.is_potentially_hazardous_asteroid? 'YES' : 'NO'}
      </Text>
      </AstroidCard>
    </View>
  )
}
const mapStateToProps = (state: {astroidState:Astroid}) => ({
  astroid: state.astroidState
})
export default connect(mapStateToProps)(AstroidView)