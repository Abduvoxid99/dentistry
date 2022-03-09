import React from 'react'
import { Container, Home_page,Text_p, Smile_text, Text,Img, Img_item, Icon, Icon_text, Call } from './main'
import home_page from '../../img/homeImg.jpg';

export default function Homes() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Text>
                        <Text_p>
                            Denstistry klinikasiga xush kelibsiz !
                        </Text_p>
                        <Smile_text>
                            Sog'lom hayot - sog'lom raqobat
                        </Smile_text>
                        <div style={{marginTop: '50px'}}>
                            <Call href='tel'>
                                <Icon></Icon>
                                <Icon_text><a href="tel:+998915006644">91 500 66 44</a></Icon_text>
                            </Call>
                        </div>
                    </Text>
                    <Img_item>
                    <Img src={home_page} />
                    </Img_item>

                </Container>
            </Home_page>
        </div>
    )
}
