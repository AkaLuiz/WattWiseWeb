import image from '../image.png'
import { Link } from 'react-router-dom';



function TelaInicial() {

    return (
        <div>
            <div style={{ background: "#2B2B31", height: 66, width: "100%", boxShadow: "0px 4px 4px 0px black" }}>

                <Link to="/registrarProduto" style={{
                    borderRadius: 6,
                    border: "solid",
                    borderColor: "#FFC55E",
                    background: "#FFC55E",
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "1%",
                    fontFamily: "Bebas Neue",
                    fontSize: 36,
                    boxShadow: "0px 4px 4px 0px black"
                }
                }>ENTRAR SEM CADASTRO</Link>

                <Link to="/logar" style={{
                    borderRadius: 6,
                    border: "solid",
                    borderColor: "#FFC55E",
                    background: "#FFC55E",
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Bebas Neue",
                    fontSize: 36,
                    boxShadow: "0px 4px 4px 0px black",
                    marginLeft: "67%",
                }
                }>LOGIN/CADASTRO</Link>
            </div>

            <center>
                <img src={image} style={{
                    width: 100,
                    height: 100,
                    marginTop: "10%",
                }}></img>

                <p style={{
                    width: 870,
                    color: "#F0F0F0",
                    textAlign: "center",
                    fontFamily: "Bebas Neue",
                    marginTop: "2%",
                    fontSize: 36
                }}
                >Você sempre quis saber quanto gasta com energia e ter um controle dos seus <a style={{ color: "#FFC55E" }}>custos?</a> Agora você <a style={{ color: "#FFC55E" }}>pode!</a> a partir de agora você só precisa de seguir as instruções desse <a style={{ color: "#FFC55E" }}>maravilhoso</a> site e logo logo você terá uma boa estimativa de quanto gasta com sua energia em casa.</p>

                <Link to="/registrarProduto" style={{
                    borderRadius: 9,
                    border: "solid",
                    borderColor: "#45B4E5",
                    background: "#45B4E5",
                    textDecoration: "none",
                    color: "white",
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontFamily: "Bebas Neue",
                    fontSize: 36,
                    boxShadow: "0px 4px 4px 0px black"
                }}>COMEÇAR AGORA!</Link>
            </center>
        </div>
    );
}

export default TelaInicial;