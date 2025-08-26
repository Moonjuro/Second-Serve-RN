import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import HomePage from '../components/HomePage';

export default function Index() 
{
    // Initialize State
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <View>
            <Header />
            <HomePage />
        </View>
    );
}