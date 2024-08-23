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
            nome: ,
            preço: ,
            modelo: ,
            ano: ,
            image: ,
        {
            nome: 'Land Rover - Range Rover Sport First Edition 3.0 - 2023',
            preço: 'R$1200.000',
            modelo: 'SUV',
            ano: 2023,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/df103b452b4a44d7b9e493b6241d15b7_1674577918465.jpg',
        },
            nome: ,
            preço: ,
            modelo: ,
            ano: ,
            image: ,
        {
            nome: ,
            preço: ,
            modelo: ,
            ano: ,
            image: ,
        },
            nome: ,
            preço: ,
            modelo: ,
            ano: ,
            image: ,
        {
            nome: ,
            preço: ,
            modelo: ,
            ano: ,
            image: ,
        },
            nome: ,
            preço: ,
            modelo: ,
            ano: ,
            image: ,
        {
            nome: ,
            preço: ,
            modelo: ,
            ano: ,
            image: ,
        },

    ])
}



















export default function Home (){
    return(
        <>
         <Header/>
          <h1>produtos</h1>
        </>
    )
}