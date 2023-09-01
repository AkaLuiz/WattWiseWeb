import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default ({ vetor, selecionar }) => {
    return (
        <div>
            <Swiper
                spaceBetween={-450}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
            >

                {
                    vetor.map((obj, indice) => (

                        <SwiperSlide  >
                            <form key={indice}
                                style={{
                                    position: "relative",
                                    width: 315,
                                    height: 345,
                                    borderRadius: 27,
                                    background: "#2B2B31",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                    marginLeft: "2%",
                                    marginBottom: "5%"
                                }}>

                                <center>

                                    <input type="text" placeholder="PRODUTO" value={obj.nome}
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
                                        }} required>
                                    </input>

                                    <input type="number" placeholder="WATTS" value={obj.watts}
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
                                            color: "#B4B4C4"
                                        }} required>
                                    </input>

                                    <input type="number" placeholder="HORAS/DIA" value={obj.horasDia}
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
                                            color: "#B4B4C4"
                                        }} required>
                                    </input>

                                    <input type="number" placeholder="DIAS" value={obj.dias}
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
                                            color: "#B4B4C4"
                                        }} required>
                                    </input>

                                    <input type='button' onClick={() => { selecionar(indice) }}
                                        style={{
                                            borderRadius: 10,
                                            borderColor: "#E5CB45",
                                            background: "#E5CB45",
                                            textDecoration: "none",
                                            color: "white",
                                            fontFamily: "Bebas Neue",
                                            fontSize: 40,
                                            boxShadow: "0px 4px 4px 0px black",
                                            color: "black",
                                            outline: 0,
                                            border: '0 none',

                                        }} value='ALTERAR'
                                    ></input>

                                </center>
                            </form>
                            
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    );
};