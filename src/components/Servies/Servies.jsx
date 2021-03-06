import React from 'react'
import { Container, Home_page, Text, Img, Text_one, Text_two, Text_three, Button, Button_footer_text } from './main';
import services from '../../img/Icon/services.jpg';
import { Link } from 'react-router-dom';

export default function Servies_page() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Text>
                        <Text_one>
                            Includes free consultation*
                        </Text_one>
                        <Text_two>
                            Our services will help you forget about dental problems
                        </Text_two>
                        <Text_three>
                            Dr. Simmons and her team of Oral Surgeons and Periodontists are committed to providing you with the highest quality of implants and crowns.
                        </Text_three>

                        <Link to='/contact'><Button>Contact</Button></Link>

                    </Text>
                    <Img src={services} />
                </Container>
            </Home_page>
        </div>
    )
}
