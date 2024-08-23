import React from "react"
export default function ListadeProdutos ({produtos}){
    return (
        <div className="cards">
            {
            produtos.map((objeto) => (
                <div className="container" key={objeto.id}>
                    <img className="imagem" src={objeto.image}/>
                    <div className="conteudo">
                        <h1 className="destaque">{objeto.nome}</h1>
                        <p className="valor">{objeto.preço}</p>
                        <p className="marca">{objeto.marca}</p>
                        <p className="ano">{objeto.ano}</p>
                        <p className="condicao">{objeto.condicao}</p>
                    <button className="comprar">Comprar</button>
                    </div>
                </div>
            ))
        }
        </div>
    )
}



