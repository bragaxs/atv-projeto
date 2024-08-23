import { useState } from "react";
export default function ListaProdutos({ listaProdutos }) {
    return(
        <div>
            {listaProdutos.map((produto)=>
            <div>
                <p className="nome.css">{produto.nome}</p>
                <p className="produto.css">{produto.preço}</p>
                <p className="modelo.css">{produto.modelo}</p>
                <p className="tamanho.css">{produto.tamanho}</p>
                <p className="imagem.css">{produto.image}</p>
            </div>)}
            <button className="comprar.css">Comprar</button>
        </div>
    )
}


