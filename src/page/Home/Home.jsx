import React from 'react';
import Cosmetic from '../../components/Home/Cosmetic/Cosmetic';
import Homes from '../../components/Home/Homes';
import Home_doctor from '../../components/Home/Home_doctor/Index';
import Implantat from '../../components/Home/Implantat/Index';
import Off_page from '../../components/Home/Off/Index';
import Price from '../../components/Home/Price/Index'
import Hands from '../../components/Home/Hand/Index'
import Practic from '../../components/Home/Practic/Index';
export default function Home() {
    return (
        <div>
            <Homes />
            <Cosmetic />
            <Home_doctor />
            <Implantat />
            <Off_page />
            <Price />
            <Hands />
            <Practic />
        </div>
    )
}
