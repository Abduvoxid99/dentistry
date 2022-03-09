import React from 'react'
import { Container, Home_page, Text, Img, Text_one, Icon, Text_two, Text_three, Button, Button_footer_text, Icon_Text } from './main'
import doctor from '../../../img/Icon/home-doctor.jpg';
import { Link } from 'react-router-dom';
export default function Home_doctor() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Img src={doctor} />
                    <Text>
                        <Text_one>
                            Nega aynan bizni tanlashingiz kerak
                        </Text_one>
                        <Text_two>
                            Sizga o'ziga xos tabassumni beradigan tish shifokorini qidiryapsizmi?
                        </Text_two>
                        <Text_three>
                            <Icon></Icon>
                            <Icon_Text>Stomatologik tekshiruvlar;</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>Gigiena muolajalari;</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>Kronlar, qoplamalar va ko'priklar;</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>Tish implantatsiyasini tiklash;</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>Ildiz kanallarini davolash;</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>Professional tishlarni oqartirish.</Icon_Text>

                        </Text_three>
                        <Link style={{color:'white'}} to='/doctors' exact><Button>Jamoamiz bilan tanishish..</Button></Link>
                        </Text>
                    {/* <After src={home_animation} /> */}
                </Container>
            </Home_page>
        </div>
    )
}
