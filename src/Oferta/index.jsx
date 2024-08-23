import Header from "../Components/Header";
import React, {useState} from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ListarProdutos from '../Components/ListarProdutos';
 
export default function Ofertas(){
    const [produtos, setProdutos] = useState([
        {
            nome: 'Mercedes-Benz - Mercedes S 680 Maybach V12 6.0 Biturbo - 2022',
            preço: 'R$5000.000',
            modelo: 'Esportivo',
            ano: 2022,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/2d092aa40d57494dbc72167c0e41d650_1705778128279.jpg'
        },
        {
            nome: 'Porsche - Cayenne Turbo 4.0 V8 Blindado - 2023',
            preço: 'R$1300.000',
            modelo: 'Esportivo',
            ano: 2023,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/57b08a59044846b9a0a3e13fae1f54ea_1675082016341.jpg'
        },
        {
            nome: 'Porsche - Cayenne Turbo 4.0 V8 BLINDADA N3 BSS - 2019',
            preço:'R$800.000',
            modelo: 'Esportivo,',
            ano: 2019,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/0d940e4effec48869c85ee5a656d922f_1678121801684.jpg'
        },
        {
            nome: 'BMW - X4 M Competition BLINDADA - 2020',
            preço: 'R$570.000',
            modelo: 'SUV',
            ano: 2020,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/acd4cd67213644149f9b72e37dd89f17_1722977496101.jpg'
        },
        {
            nome: 'Mercedes-Benz - A 45 Amg 2.0 “BLINDADO“ - 2018',
            preço: 'R$300.000',
            modelo: 'Esportivo',
            ano: 2018,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/1a69d798ebe941018b622b6109e94e81_1723139528140.jpg'
        },

        {
            nome: 'Volkswagen - Amarok Highline Extreme 3.0 - 2021',
            preço: 'R$300.000',
            modelo: 'SUV',
            ano: 2021,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/acb4163a2627448d86f322013096fbc3_1718717000657.jpg'
        },
        {
            nome: 'Kawasaki - Ninja H2 - 2016',
            preço: 'R$300.000',
            modelo: 'Moto Esportiva',
            ano: 2016,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/518780c8cdd14572ad273b648df0cb22_1700825906268.jpg'
        },
        {
            nome: 'BMW - GS-1200cc Triple Black - 2018',
            preço: 'R$85.900',
            modelo: 'Esportiva',
            ano: 2018,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/55a35a10e077433c8058599dbec3ed24_1704196081275.jpg'
        },
        {
            nome: 'Harley Davidson - Fat Bob FX/FB 1745cc - 2019',
            preço: 'R$82.000',
            modelo: 'Esportiva',
            ano: 2019,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/82f07381a12242baa2cb257b4bca569f_1713899407646.jpg'
        },
        {
            nome: 'Suzuki - Burgman 650 Executive - 2019',
            preço: 'R$60.900',
            modelo: 'Moto Executivo',
            ano: 2019,
            image: 'https://bocamafrapremium.com.br/wp-content/uploads/2024/08/9ec11e536e3546c0bbf209cd3604d70a_1718981097632.jpg'
        },
        
    ])
}