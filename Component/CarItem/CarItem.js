import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles.js'
import StylesButton from "../styleButton/StylesButton.js"


const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image} />


            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}{" "}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StylesButton type="primary" content={"Custom Order"} onPress={() => {
                    console.warn("Custom Order was Pressed");
                }} />

                <StylesButton type="secondary" content={"Existing Inventory"} onPress={() => {
                    console.warn("Existing Inventory was Pressed");
                }}
                />
            </View>

        </View>
    )
}

export default CarItem