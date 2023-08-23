import React from 'react'
import { useState, useEffect } from 'react'
import { View, ScrollView, Text, StatusBar, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const StartsWith = () => {
    
    const navigation = useNavigation()
    const [words, setWords] = useState([])
    const [max, setMax] = useState('12')
    const [startsWith, setStartsWith] = useState("he")

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.datamuse.com/words?sp=${NavWord}*&max=${max}`);
            const data = response.data;
            setWords(data);
          } catch (err) {
            console.log(err.message);
          }
        };
        
        fetchData(); 
    
    }, []);

    const handleWords = async () => {
        try {
            const response = await axios.get(`https://api.datamuse.com/words?sp=${startsWith}*&max=${max}`)
            const data = await response.data
            setWords(data)
        } catch (err) {
            console.log(err.message)
        }
    }

  return (
    <View style={styles.container}>
        <View><Text onPress={() => navigation.navigate()} style={styles.heading1}>NavWord</Text></View>
        <View style={styles.rowContainer}>
            <View style={styles.filterContainer}>
                <Text style={styles.label}>Starts With</Text>
                <TextInput style={styles.input} placeholder='he' value={startsWith} onChangeText={text => setStartsWith(text)}/>
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.label}>Max Words</Text>
                <TextInput style={styles.input} placeholder='12' value={max} onChangeText={text => setMax(text)}/>
            </View>
        </View>
        <TouchableOpacity onPress={() => handleWords()} style={styles.btnCont}><Text style={styles.btnText}>Filter</Text></TouchableOpacity>
        <View style={styles.flatlist}>
        <FlatList
            data={words}
            renderItem={({item}) => <Text style={{ fontSize: 19, fontWeight: "400", color: "#454545" }}>{`\u2022 ${item.word}`}</Text>}
            keyExtractor={(item) => item.word}
            numColumns={1}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS=== "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: "#eeeeee"
    },
    heading1: {
        textAlign: 'center',
        fontSize: 45,
        fontWeight: "600",
        fontStyle: "italic",
        color: "#017371",
        textDecorationStyle: "dashed"
    },
    rowContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    label: {
        fontSize: 25,
        fontWeight: "600",
        color: "#454545"
    },
    input: {
        backgroundColor: "ffffff",
        paddingLeft: 8,
        fontSize: 23,
        borderColor: "#000",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderRadius: 0,
        height: 50,
        width: 120
    },
    filterContainer: {
        backgroundColor: "#7fffd4",
        alignItems: "center",
        borderColor: "#7fffd4",
        padding: 15,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderLeftWidth: 4,
        borderRadius: 13

    },
    btnCont: {
        backgroundColor: "#7fffd4",
        marginVertical: 20,
        borderRadius: 13,
        paddingVertical: 37,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.1,
        shadowRadius: 3.05,
        elevation: 4
    },
    btnText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 30
    },
    flatlist: {
        marginTop: 20,
        height: 430,
        borderColor: "#7fffd4",
        padding: 10,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderLeftWidth: 4,
        borderRadius: 10,
    }
})


export default StartsWith