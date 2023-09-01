import image from '../image.png';


function escolherTarifa({ vetor, botao, calcular, valores }) {
    return (
        <div>
            <div style={{ background: "#2B2B31", height: 66, width: "100%", boxShadow: "0px 4px 4px 0px black" }}></div>

            <center>
                <img src={image} style={{
                    width: 100,
                    height: 100,
                    marginTop: "5%",
                }}></img>

                {
                    botao
                        ?
                        <form style={{
                            display: "grid",
                            justifyContent: "center",
                            alignContent: "space-between",
                            width: 433,
                            height: 200,
                            padding: 10,
                            marginTop: "2%",
                            borderRadius: 27,
                            background: "#2B2B31",
                            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                            marginBottom: "5%"
                        }}>
                            <label
                                style={{
                                    fontFamily: "Bebas Neue",
                                    fontSize: 40,
                                    color: "#B4B4C4",
                                }}>TARIFA
                            </label>
                                
                            <input type='number' id='tarifa'
                                style={{
                                    textAlign: "center",
                                    borderRadius: 7,
                                    background: "#4F4F58",
                                    outline: 0,
                                    border: '0 none',
                                    width: 275,
                                    height: 52,
                                    fontFamily: "Bebas Neue",
                                    fontSize: 24,
                                    color: "#B4B4C4",
                                }} required></input>

                            <center>
                                <input type='button' onClick={calcular}
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
                                        margin: 40
                                    }} value='ADICIONAR'
                                ></input>

                            </center>
                        </form>
                        :
                        <div>
                            <table className='table table-dark table-striped'
                                style={{
                                    fontFamily: "Bebas Neue",
                                    fontSize: 24,
                                    marginTop: "2%",
                                    width: 945,
                                    borderRadius: 15,
                                    textAlign: "center",
                                    overflow: "hidden",
                                    border: "solid  1px",
                                    borderRadius: 25,
                                }}>
                                <thead>
                                    <tr>
                                        <th>ITEM</th>
                                        <th>PRODUTO</th>
                                        <th>CONSUMO</th>
                                        <th>HORAS DE USO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        vetor.map((obj, indice) => (


                                            <tr key={indice}>
                                                <td>{indice + 1}</td>
                                                <td>{obj.nome}</td>
                                                <td>{obj.watts * obj.horasDia * obj.dias / 1000} KWH</td>
                                                <td>{obj.horasDia * obj.dias} H</td>
                                            </tr>


                                        ))

                                    }



                                </tbody>
                            </table>

                            <div style={{display:"flex", justifyContent:"space-around"}}>
                            <p id='valor'
                            style={{
                                borderRadius: 10,
                                borderColor: "#45B4E5",
                                background: "#45B4E5",
                                textDecoration: "none",
                                fontFamily: "Bebas Neue",
                                fontSize: 40,
                                padding: "0px 5px 0px 5px",
                                boxShadow: "0px 4px 4px 0px black",
                                color: "black",
                                width: "fit-content"
                            }}>Consumo: {valores.kwh} KWH
                            </p>
                            <p
                                style={{
                                    borderRadius: 10,
                                    borderColor: "#45B4E5",
                                    background: "#45B4E5",
                                    textDecoration: "none",
                                    fontFamily: "Bebas Neue",
                                    fontSize: 40,
                                    padding: "0px 5px 0px 5px",
                                    boxShadow: "0px 4px 4px 0px black",
                                    color: "black",
                                    width: "fit-content"
                                }}>R$: {valores.valor.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</p>
                            </div>
                        </div>

                        
                }
                    
                        
                    


            </center>
        </div >
    )

}

export default escolherTarifa;
