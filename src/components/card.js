import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';

const CustomCard=()=> {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxPress = () => {
        setChecked(!isChecked);
    };


    return (
        <View style={styles.cardContainer}>


            <View style={styles.iconSection}>
                <View style={styles.iconBackground}></View>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM2 8V18H18V8H2ZM4 12H9V16H4V12Z" fill="#4A3780"/>
                </svg>
            </View>

            <View style={styles.titleSection} >

                <Text style={styles.title}>Enter Title</Text>
                <Text style={styles.time}>Enter time</Text>

            </View>


            <View style={styles.checkboxSection}>

                <TouchableOpacity onPress={handleCheckboxPress}>
                    <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
                        {isChecked && <Text style={styles.checkmark}>✔</Text>}
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    cardContainer:{
        flexDirection:"row",
        width:344,
        height:80,
        padding:16,
        backgroundColor:"#fff"
        },

    iconSection:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    iconBackground:{
        width:48,
        height:48,
        backgroundColor:"#E7E2F3",
        position:"absolute",
        borderRadius:50,
        zIndex:-1
    },


    titleSection:{
        marginLeft:12,
        flex:4,
        flexDirection:"column"
    },

    title:{
        fontWeight:600,
        fontSize:16,
        color:"#1B1B1D"
    },

    time:{
        fontWeight:500,
        fontSize:14,
        color:"#1B1B1D",
        opacity:0.7
    },



    checkboxSection:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },





    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1.3,
        borderColor: '#4A3780',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:3
    },
    checkedCheckbox: {
        backgroundColor: '#4A3780',
    },
    checkmark: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },

});

export default CustomCard;