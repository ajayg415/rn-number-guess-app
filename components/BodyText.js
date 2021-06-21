import React from 'react';
import {Text, Stylesheet, StyleSheet} from 'react-native'

const BodyText = ({children}) => {
    return <Text style={styles.body}>{children}</Text>
}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'ubuntu'
    }
})

export default BodyText