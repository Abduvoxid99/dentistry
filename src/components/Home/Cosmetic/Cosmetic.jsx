import React from 'react'
import {Button, Card, Container, Img, Img_item, Item, Item_text, Text, Text_One, Text_Three, Text_Two} from './main'
import service1 from '../../../img/Icon/dental/af9a124a9d30f02aee99cf5ac86438b7.jpg'
import service2 from '../../../img/Icon/dental/dental.jpg'
import service3 from '../../../img/Icon/dental/Prosthetics.jpeg'

import {Link} from 'react-router-dom'

export default function Cosmetic() {
    return (
        <div>
            <Container>
                <Text_One>Dentistry Kinikasi</Text_One>
                <Text_Two>Umumiy stomatologiya</Text_Two>
                <Text_Three>Har kuni klinikamizda 20 dan ortiq bemorga professional xizmat ko'rsatiladi.</Text_Three>
                <Card>
                    <Item>
                        <Img_item one>
                            <Img src={service1}/>
                        </Img_item>
                        <Text>Umumiy stomatologiya</Text>
                        <Item_text>
                            Umumiy stomatologiya og'iz bo'shlig'i va maxillofasial sohaning keng ko'lamli kasalliklari
                            va kasalliklarini o'z ichiga oladi.
                        </Item_text>
                    </Item>
                    <Item>
                        <Img_item>
                            <Img src={service2}/>
                        </Img_item>
                        <Text>Kosmetik stomatologiya</Text>
                        <Item_text>
                            Sizning tabassumingiz boshqalarning siz haqingizda qoldiradigan birinchi taassurotidir va
                            siz uning yorqin, oq va sog'lom bo'lishini xohlayotganingizni anglatadi.
                        </Item_text>
                    </Item>
                    <Item>
                        <Img_item>
                            <Img src={service3}/>
                        </Img_item>
                        <Text>Qayta tiklovchi stomatologiya</Text>
                        <Item_text>
                            Biz sizning tabiiy tabassumingizni qaytarish uchun plomba, toj, ko'priklar va implantlarni
                            umumiy tiklash variantlari sifatida taklif qilamiz.
                        </Item_text>
                    </Item>
                </Card>
                <Link style={{color: 'white'}} to='/servies' exact><Button>View our Servise</Button></Link>
            </Container>
        </div>
    )
}
