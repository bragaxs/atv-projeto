import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListaProdutos from "../Components/ListadeProdutos";

export default function Produtos(){
    const [produtos, setProdutos] = useState([
        {
            nome: 'Cadillac - Escalade ESV 6.2 Flex - 2022',
            preço: 'R$1900.000',
            modelo: 'SUV',
            ano: 2022,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/609c041bb0984d4d9fbdfdde49006d46_1724246900521.jpg'
        },
        {
            nome: 'Tesla - Model X Plaid - 2023',
            preço: 'R$1300.000',
            modelo: 'Eletrico,',
            ano: 2023,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/b6ab8f3ff3644fc7b6f3f0de377dd801_1658174177804.jpg'
        },
        {
            nome: 'Porsche - 911 Carrera 4S Cabrio - 2021',
            preço: 'R$1400.000',
            modelo: 'Esportivo',
            ano: 2022,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/2301512e576944b08cc8ba6c63b055db_1716474344985.jpg'
        },
        {
            nome: 'Porsche - Cayenne S 4.0 V8 - 2024', 
            preço: 'R$1300.000',
            modelo:'Esportivo',
            ano: 2024,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/6863dba1eb974df8ab3579a1ee1e7abe_1715454174173.jpg'
        },
        {
            nome: 'Porsche - 911 Carrera Cabriolet 3.0 - 2022',
            preço: 'R$1250.000',
            modelo: 'Esportivo',
            ano: 2022,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/4aef97bd0a4c492293f5b3d4216c3340_1718824899157.jpg'
        },
        {
            nome: 'Lamborghini - Huracan Evo Coupe V10 - 2022',
            preço: 'R$3000.000',
            modelo:'Esportivo',
            ano: 2022,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/cb2edbfecbe3463eb65b3bf9e594e081_1722864848431.jpg'
        },
        {
            nome: 'Ferrari - 296 GTB 3.0 V6 Hibrido - 2024',
            preço: 'R$4000.000',
            modelo: 'Esportivo',
            ano: 2024,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/50689baba6614083ac5f720574a0507a_1715004007193.jpg'
        },
        {
            nome: 'Mercedes-Benz - Amg GT C Roadster 7G - 2020',
            preço: 'R$1850.990',
            modelo: 'Esportivo',
            ano: 2020,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/69f532b4481a485ca3d80e499f646bcf_1719511326592.jpg'
        },
        {
            nome: 'Chevrolet - Corvette LT2 Conversivel 6.2 V8 série 70 anos - 2023',
            preço: 'R$1800.000',
            modelo: 'Esportivo',
            ano: 2023,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/123c3059925340b480e798704c7da867_1675268206522.jpeg'
        },
        {
            nome: 'Lamborghini - Gallardo Spyder LP 560-4 5.2 V10 - 2009',
            preço: 'R$1190.000',
            modelo: 'Esportivo',
            ano: 2009,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/ec6206c6979742df8b68f2e72c65831b_1703866152153.jpg',
        },
        {
            nome: 'Audi - R8 5.2 V10 COUPE - 2015',
            preço: 'R$900.000',
            modelo: 'Esportivo',
            ano: 2015,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/100dfcdf6dd0412196dd2b06647adb47_1708428556830.jpg',
        },
        {
            nome: 'Land Rover - Range Rover Sport First Edition 3.0 - 2023',
            preço: 'R$1200.000',
            modelo: 'SUV',
            ano: 2023,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/df103b452b4a44d7b9e493b6241d15b7_1674577918465.jpg',
        },
        {
            nome: 'Porsche - Macan S - 2024',
            preço: 'R$1200.000',
            modelo: 'SUV',
            ano: '2024',
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/c4ff4991355f4e19b1ef3189dc9569ab_1645214670094.jpg',
        },
        {
            nome: 'Chrysler - Pacifica Pinnacle AWD 3.6 Hibrido - 2024',
            preço: 'R$800.000',
            modelo: 'SUV',
            ano: 2024,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/b78eaa2398654e0d8f3890d8c5239383_1661347727125.jpg',
        },
        {
            nome: 'Porsche - Taycan 4S - 202',
            preço: 'R$800.000',
            modelo: 'Esportivo',
            ano: 2022,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/d9dbd8b0b47645b3b6f9523f164b6e36_1698318073331.jpg',
        },
        {
            nome: 'Mercedes-Benz - S 63 L AMG 5.5 V8 - 2016',
            preço: 'R$790.990',
            modelo: 'Esportivo',
            ano: 2016,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/78ea8efc3df54343ad74fa787f981923_1719493725493.jpg',
        },
        {
            nome: 'GMC - Hummer H1 6.5 - 1987',
            preço: 'R$800.000',
            modelo: 'SUV de Combate',
            ano: 1987,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/e185110d7e6e45bea4a618efac00d4b5_1711477632757.jpg',
        },
        {
            nome: 'Audi - R8 Spider V10 - 2012',
            preço: 'R$750.000',
            modelo: 'Esportivo',
            ano: 2015,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/a9184e9ac2cc4c44a95b131ce7631598_1711050499421.jpg',
        },

    ])
    return (
        <>
            <Header />
            <div className="ofertas-container">
                <h1>Produtos</h1>
                <ListarProdutos props={produtos} />
            </div>
            <Footer />
        </>
    );
}



















