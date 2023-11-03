import { TouchableOpacity,Text,StyleSheet , Dimensions} from "react-native";

export default function Button({onPress, text, size, theme}){

    const buttonStyle=[styles.button];
    const textStyle=[styles.text];

    if(theme==="secondary"){
        buttonStyle.push(styles.buttonSecondary)
        textStyle.push(styles.textSecondary)
    }else if(theme==="accent"){
        buttonStyle.push(styles.buttonAccent)
    }

    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )

}

const screen=Dimensions.get("window")
const buttonWidth=screen.width/4;

const styles=StyleSheet.create({
    button:{
        height:Math.floor(buttonWidth-30),
        width:buttonWidth,
        backgroundColor:"#017598",
        alignItems:"center",
        justifyContent:"center",
        margin:3,
        flex:1,
        borderColor:"black",
        elevation:5,
        borderRadius:5
    },
    text:{
        color:"white",
        fontSize:25
    },
    textSecondary:{
        color:"white"
    },
    buttonSecondary:{
        backgroundColor:"#8692F7"
    },
    buttonAccent:{
        backgroundColor:"orange"
    }
})