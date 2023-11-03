import { StyleSheet,View } from "react-native";
const Row =({children})=>{
    return(
        <View style={styles.container}>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"blue"
    }
})

export default Row;