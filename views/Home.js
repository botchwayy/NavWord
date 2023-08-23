import React from 'react'
import { SafeAreaView, View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View><Text style={styles.heading1}>NavWord</Text></View>
            <View><Text style={styles.heading2}>Select any of the following and generate a list of word associates.</Text></View>
            <View style={styles.tagContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Starts")} style={styles.background}><Text style={styles.label}>Starts With </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Ends")} style={styles.bg2}><Text style={styles.label}>Ends With </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Rhymes")} style={styles.bg3}><Text style={styles.label}>Rhymes With </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Related")} style={styles.bg4}><Text style={styles.label}>Related To </Text></TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
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
        fontSize: 45,
        fontStyle: "italic",
        color: "#017371",
        fontWeight: "600",
        textAlign: 'center',
        textDecorationStyle: "dashed"
    },
    heading2: {
        fontSize: 27,
        textAlign: "justify",
        paddingTop: 23,
        paddingBottom: 5
    },
    label: {
        fontSize: 30,
        color: "#000000",
        fontWeight: '700',
        textAlign: "center",
    },
    background: {
        backgroundColor: "#7fffd4",
        paddingHorizontal: 15,
        paddingVertical: 35,
        borderRadius: 18,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderColor: "#000000",
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.1,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 15
    },
    bg2: {
        backgroundColor: "#dcdcdc",
        paddingHorizontal: 15,
        paddingVertical: 35,
        borderRadius: 18,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderColor: "#000000",
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.1,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 15
    },
    bg3: {
        backgroundColor: "#ffe4c4",
        paddingHorizontal: 15,
        paddingVertical: 35,
        borderRadius: 18,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderColor: "#000000",
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.1,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 15
    },
    bg4: {
        backgroundColor: "#017371",
        paddingHorizontal: 15,
        paddingVertical: 35,
        borderRadius: 18,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderColor: "#000000",
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.1,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 15
    },
    tagContainer: {
        padding: 10
    }
})

export default Home