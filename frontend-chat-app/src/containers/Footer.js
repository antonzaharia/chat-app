import { Div, Text } from 'atomize'
import React from 'react'

export default function Footer() {
    return (
        <Div
        pos="fixed"
        bottom="10px"
        align="center"
        left={{ xs: '35%', lg: '46%' }}
        >
            <hr />
            <Text
            ><span>&#174;</span> 2020 Chat App </Text>
        </Div>
    )
}
