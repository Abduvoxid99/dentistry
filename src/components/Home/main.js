import styled from "styled-components";
import { PhoneCall } from '@styled-icons/feather/PhoneCall';

export const Home_page = styled.div`
    padding-top: 100px;
    background: linear-gradient(to right, rgb(210,234,255),rgb(218,206,255));
    `
export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    justify-content: space-between;
    @media (max-width:1400px) {
        grid-template-columns: 100%;
        justify-items: center;
        text-align: center;
    }
    @media (max-width:372px) {
        width: 90%;
    }
    `
export const Text = styled.div`
    padding: 150px 0;
    color: rgb(25,49,57);
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width:1200px){
        padding:50px;
    }
    `
export const Text_p = styled.p`
    font-size: 60px;
    line-height: 0.97;
    @media (max-width:1200px){
        font-size: 60px;
    }
    @media (max-width:900px) {
        font-size: 50px;
    }
    @media (max-width:600px) {
        font-size: 40px;
    }
    @media (max-width:500px) {
        font-size: 30px;
    }
    `
export const Smile_text = styled.p`
     font-size: 20px;
    @media (max-width:600px) {
        font-size: 18px;
    }
    @media (max-width:500px) {
        font-size: 15px;
    }
`
export const Img = styled.img`
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    z-index: 5;
    width: 100%;
    border-radius: 30% 20% 70% 40% ;
      @media (min-width:1400px) {
        max-height: 550px;
      }
`
export const Img_item = styled.div`
    margin-bottom: -30px;
    margin-top: 70px;
    width: 100%;
    position: relative;
    display: flex;
    z-index: 3;
`

export const Call = styled.a`
    text-decoration: none;
    background:linear-gradient(to right, white 50%,rgb(63,213,211));
    padding: 20px;
    border-radius: 25px;
    @media(max-width:425px){
        padding:10px;
    }
`
export const Icon = styled(PhoneCall)`
    color:blue;
    width: 20px;
    padding:2px;
    border:2px solid rgb(169,142,237);
    border-radius:50%;
    margin-right: 10px;
    /* display:inline-block; */
`
export const Icon_text = styled.p`
    color:rgb(169,142,237);
    font-size: 15px;
    display:inline;
    font-weight: 800;
`
