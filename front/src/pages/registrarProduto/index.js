import image from '../image.png';
import { Link } from 'react-router-dom';
import Slider from './slider';

function RegistrarProduto({ vetor, alterar, cadastrar, remover, eventoTeclado, selecionar, botao, cancelar, obj }) {

    return (
        <div >
            <div style={{ background: "#2B2B31", height: 66, width: "100%", boxShadow: "0px 4px 4px 0px black" }}></div>
            <center>
                <img src={image} style={{
                    width: 100,
                    height: 100,
                    marginTop: "3%",
                }}></img>
            </center>


            <div >
                <form style={{
                    width: "95%",
                    padding: 10,
                    marginTop: "2%",
                    borderRadius: 27,
                    background: "#2B2B31",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    marginLeft: "2%",
                    marginBottom: "5%"
                }}>
                    <center>

                        <input type="text" placeholder="PRODUTO" onChange={eventoTeclado} name='nome' value={obj.nome}
                            style={{
                                borderRadius: 7,
                                background: "#4F4F58",
                                outline: 0,
                                border: '0 none',
                                width: 275,
                                height: 52,
                                marginTop: 30,
                                marginBottom: 15,
                                fontFamily: "Bebas Neue",
                                fontSize: 24,
                                color: "#B4B4C4",
                                marginRight: 5
                            }} required>
                        </input>

                        <input type="number" placeholder="WATTS" onChange={eventoTeclado} name='watts' value={obj.watts}
                            style={{
                                borderRadius: 7,
                                background: "#4F4F58",
                                outline: 0,
                                border: '0 none',
                                width: 275,
                                height: 52,
                                marginBottom: 15,
                                fontFamily: "Bebas Neue",
                                fontSize: 24,
                                color: "#B4B4C4",
                                marginRight: 5
                            }} required>
                        </input>

                        <input type="number" placeholder="HORAS/DIA" onChange={eventoTeclado} name='horasDia' value={obj.horasDia}
                            style={{
                                borderRadius: 7,
                                background: "#4F4F58",
                                outline: 0,
                                border: '0 none',
                                width: 275,
                                height: 52,
                                marginBottom: 15,
                                fontFamily: "Bebas Neue",
                                fontSize: 24,
                                color: "#B4B4C4",
                                marginRight: 5
                            }} required>
                        </input>

                        <input type="number" placeholder="DIAS" onChange={eventoTeclado} name='dias' value={obj.dias}
                            style={{
                                borderRadius: 7,
                                background: "#4F4F58",
                                outline: 0,
                                border: '0 none',
                                width: 275,
                                height: 52,
                                marginBottom: 15,
                                fontFamily: "Bebas Neue",
                                fontSize: 24,
                                color: "#B4B4C4",
                                marginRight: 5
                            }} required>
                        </input>

                        {
                            botao
                                ?
                                <input type='button' onClick={cadastrar}
                                    style={{
                                        borderRadius: 10,
                                        borderColor: "#45B4E5",
                                        background: "#45B4E5",
                                        textDecoration: "none",
                                        fontFamily: "Bebas Neue",
                                        fontSize: 40,
                                        boxShadow: "0px 4px 4px 0px black",
                                        color: "black",
                                        outline: 0,
                                        border: '0 none',

                                    }} value='ADICIONAR'
                                ></input>
                                :
                                <div>
                                    <input type='button' value='Alterar' onClick={alterar} className='btn btn-warning'></input>
                                    <input type='button' value='Remover' onClick={remover} className='btn btn-danger'></input>
                                    <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary'></input>
                                </div>
                        }

                    </center>
                </form>

                <Slider vetor={vetor} selecionar={selecionar} />
                
            </div>

            <center>
                <Link
                    style={{
                        borderRadius: 10,
                        borderColor: "#45B4E5",
                        background: "#45B4E5",
                        textDecoration: "none",
                        fontFamily: "Bebas Neue",
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontSize: 40,
                        boxShadow: "0px 4px 4px 0px black",
                        color: "black",
                        outline: 0,
                        border: '0 none'
                    }}
                    to="/tarifar">PRONTO?</Link>
            </center>



        </div>
    );
}
export default RegistrarProduto;
