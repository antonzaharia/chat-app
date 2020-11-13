import { Div, Text } from 'atomize'
import React from 'react'

export default function Footer() {
    return (
        <Div
        pos="fixed"
        bottom="0px"
        align="center"
        minW="100%"
        >
            <Text
            ><span>&#174;</span> 2020 Chat App </Text>
        </Div>
    )
}
