import {Link} from "react-router-dom";

export default function Header(){
return(
    <header className="header">
        <nav>
            <ul>
    <Link to="/">
        <h1 className="estilização-paginas">Home</h1></Link> 
    <Link to="/produtos"> <h1 className="estilização-paginas">Produtos</h1></Link> 
    <Link to="/ofertas"><h1 className="estilização-paginas">Ofertas</h1></Link> 
        </ul>
    </nav>
    </header>
)
} 