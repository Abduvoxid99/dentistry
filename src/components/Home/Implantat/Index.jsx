import React from 'react'
import {Container, Home_page, Text, Img, Text_one, Text_two, Text_three, Button, Button_footer_text} from './main'
import home_page from '../../../img/Icon/home-8.jpg';
import {Link} from 'react-router-dom';

export default function Implantat() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Text>
                        <Text_one>
                            Bepul maslahatni o'z ichiga oladi*
                        </Text_one>
                        <Text_two>
                            To'liq tish implantatsiyasini oling: 15% tejang
                        </Text_two>
                        <Text_three>
                            Doktor Simmons va uning og'iz bo'shlig'i jarrohlari va periodontologlari jamoasi sizga
                            implantlar va tojlarning eng yuqori sifatini taqdim etishga intiladi.
                        </Text_three>
                        <Link style={{color: 'white'}} to='/doctors' exact><Button>Batafsil..</Button></Link>

                    </Text>
                    <Img src={home_page}/>
                    {/* <After src={home_animation} /> */}
                </Container>
            </Home_page>
        </div>
    )
}
