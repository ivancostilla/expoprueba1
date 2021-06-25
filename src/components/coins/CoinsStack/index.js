import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from "../CoinsScreen";

const Stack = createStackNavigator();

const CoinStack = () => {
    return (
        <>
        <Stack.navigator>
            <Stack.Screen name="Coins" component={CoinsScreen} />
        </Stack.navigator>
        </>
    )
}

export default CoinStack;