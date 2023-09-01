import image from "../image.png";
import { Link } from 'react-router-dom';

function Logar(){

    return(
    <div>
        <div style={{background:"#2B2B31", height:66, width: "100%", boxShadow: "0px 4px 4px 0px black"}}></div>

        <center>
        <img src={image} style={{
            width:100,
            height: 100,
            marginTop: "3%",
        }}></img>

        <form style={{
            marginTop: "2%",
            width: 427,
            height: 427,
            borderRadius: 27,
            background: "#2B2B31",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"

        }}>
            <input type="text" placeholder="USUÁRIO" 
            style={{
                borderRadius:7,
                textAlign:"center",
                background:"#4F4F58",
                outline: 0,
                border: '0 none',
                width: 373,
                height: 52,
                marginTop: 70,
                marginBottom: 40,
                fontFamily: "Bebas Neue", 
                fontSize: 24,
                color: "#B4B4C4"
            }}
            required></input>
            
            <input type="text" placeholder="E-MAIL"
            style={{
                borderRadius:7,
                textAlign:"center",
                background:"#4F4F58",
                outline: 0,
                border: '0 none',
                width: 373,
                height: 52,
                marginBottom: 40,
                fontFamily: "Bebas Neue", 
                fontSize: 24,
                color: "#B4B4C4"
            }}
            required></input>

            <Link to="/registrarProduto" 
            style={{
                borderRadius: 10, 
                border: "solid", 
                borderColor: "#45B4E5",
                background: "#45B4E5", 
                textDecoration: "none", 
                color:"white", 
                paddingLeft:20,
                paddingRight:20,
                fontFamily: "Bebas Neue", 
                fontSize: 64,
                boxShadow: "0px 4px 4px 0px black",
                color: "#B4B4C4"
            }} >ENTRAR</Link>
            <br></br>
            <Link to="/cadastrar" 
            style={{
                color:"#45B4E5", 
                fontFamily: "Bebas Neue", 
                fontSize: 24,
            }}>AINDA NÃO POSSUI CONTA?</Link>
        </form>

        </center>
    </div>
    );
}

export default Logar;