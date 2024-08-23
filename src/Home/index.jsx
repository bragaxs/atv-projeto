import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";
import ListadeProdutos from "../Components/ListadeProdutos";
import Footer from "../Components/Footer";
export default function Home(){
    const [produtos, setProdutos] = useState([
        {
            nome: "Dodge - Challenger",
            preço: "R$999.999",
            modelo: "Esportivo",
            ano: 2023,
            image: "https://bocamafrapremium.com.br/wp-content/uploads/2024/08/fa58a44b856341ea9530a523b03af43d_1715341127712.jpg",
            marca: 'Dodge',
            condicao: 'Novo'
        },
        {
            nome: "Porsche - 911 Carrera S 3.0",
            preço: "R$1090.000",
            modelo: "Esportivo",
            ano: 2022,
            image: "https://bocamafrapremium.com.br/wp-content/uploads/2024/08/81b6b48911a74b3e89f8b90bd5c3f79a_1721916127087-1024x768.jpg",
            marca: 'Porsche',
            condicao: 'Novo'
        },
        {
            nome: "Lamborghini - Urus LP-650 ",
            preço: "R$3979.000",
            modelo: "Esportivo",
            ano: 2021,
            image: "https://bocamafrapremium.com.br/wp-content/uploads/2024/08/97d9e12c3f8843cca9a524a7a0f61316_1721135448613-1024x768.jpg",
            marca: 'Lamborghini',
            condicao: 'Novo'
        },
        {
            nome: "Mclaren - 540C Coupe",
            preço: "R$2399.990",
            modelo: "Esportivo",
            ano: 2020,
            image: "https://bocamafrapremium.com.br/wp-content/uploads/2024/08/809b0082b3f94a6da8417806ea31ad43_1720893445594-1024x768.jpg",
            marca: 'Mclaren',
            condicao: 'Novo'
        },
        {
            nome: "Mercedes-Benz - Amg GT ",
            preço: "R$1849.990",
            modelo: "Esportivo",
            ano: 2020,
            image: "https://bocamafrapremium.com.br/wp-content/uploads/2024/08/69f532b4481a485ca3d80e499f646bcf_1719511326592.jpg",
            marca: 'Mercedes-Benz',
            condicao: 'Usado'
        }
])

return (
    <> 
        <Header className="header-home"/>
        <Carousel className="custom-carousel"
            infiniteloop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
        >
            <div>
                <img src="https://bocamafrapremium.com.br/wp-content/uploads/2024/05/ref1_Boca_Mafra_Premium_Banner_Site_2024_Porsche911Azul.jpg" alt="Porsche" />
            </div>
            <div>
                <img src="https://bocamafrapremium.com.br/wp-content/uploads/2024/08/ref1_Boca_Mafra_Premium_Banner_site_2024_Lamborghini-HuracanEvo.jpg" alt="Lamborghini" />
            </div>
            <div>
                <img src="https://bocamafrapremium.com.br/wp-content/uploads/2024/05/ref1_Boca_Mafra_Premium_Banner_Site_2024_MaseratiMC20_Branca.jpg" alt="Maserati" />
            </div>
            <div>
                <img src="https://bocamafrapremium.com.br/wp-content/uploads/2024/08/ref1_Boca_Mafra_Premium_Banner_Site_2024_Consorcio_Atualizado-1.jpg"/>
            </div>
            <div>
                <img src="https://bocamafrapremium.com.br/wp-content/uploads/2024/08/ref1_Boca_Mafra_Premium_Banner_Site_2024_McLaren540c.jpg"/>
            </div>
                <img src="https://bocamafrapremium.com.br/wp-content/uploads/2024/02/ref1_Boca_Mafra_Premium_Banner_Site_2024_Rolls-RoycePrancheta-1.jpg"/>
                
        </Carousel>
        <ListadeProdutos produtos={produtos} />
        <Footer />
    </>
);
}