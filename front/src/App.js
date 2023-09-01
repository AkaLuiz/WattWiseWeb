import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TelaInicial from './pages/telaInicial/index';
import RegistrarProduto from './pages/registrarProduto/index';
import Logar from './pages/logar/index';
import Cadastrar from './pages/cadastrar/index';
import Tarifar from './pages/escolherTarifa/index';

function App() {
  //Objeto produto
  const produto = {
    codigo: 0,
    nome: '',
    watts: null,
    horasDias: null,
    dias: null,
  }

    //Guardar tarifa e valores
    const Guardar = {
      valor: null,
      kwh:null
    }

  //Use state
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [btnTable, setBtnTable] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);
  const [guardar, setGuardar] = useState([Guardar]);

  //UseEffect
  useEffect(() => {
    fetch('http://localhost:8090/listar')
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  //UseEffectUsuario
  useEffect(() => {
    fetch('http://localhost:8090/listar/usuarios')
      .then(retorno => retorno.json())
      .then(retorno_convertido => setUsuarios(retorno_convertido));
  }, []);

  //dados do formulario
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8090/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setProdutos([...produtos, retorno_convertido]);
          alert('Produto cadastrado com sucesso!');
          limparFormulario();
        }
      })
  }

  //remover produto
  const remover = () => {
    fetch('http://localhost:8090/remover/' + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        //mensagem
        alert(retorno_convertido.mensagem);

        //cópia do vetor de produtos
        let vetorTemp = [...produtos];

        //indice
        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });

        //remover produto do vetor temp
        vetorTemp.splice(indice, 1);

        //atualizar o vetor de produtos
        setProdutos(vetorTemp);

        //limpar formulario
        limparFormulario();

      })
  }

  //Alterar produto
  const alterar = () => {
    fetch('http://localhost:8090/alterar', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {

          //mensagem
          alert('Produto alterado com sucesso!');

          //cópia do vetor de produtos
          let vetorTemp = [...produtos];

          //indice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          //alterar produto do vetor temp
          vetorTemp[indice] = objProduto;

          //atualizar o vetor de produtos
          setProdutos(vetorTemp);

          //limpar formulario
          limparFormulario();
        }
      })
  }

  //Limpar formulario
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  //selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }



  //calcular
  const calcular = () => {
    let kwh = 0;         
    produtos.map((obj) => {
      kwh = (obj.watts * obj.horasDia * obj.dias / 1000) + kwh;
    }
    )
    let tarifa = document.getElementById("tarifa").value;
    let valor = kwh * tarifa;
    setBtnTable(false);
    setGuardar({valor:valor,kwh:kwh});
  }



  //Retorno
  return (
    <Router>
      <Routes>
        <Route path='/inicio' element={<TelaInicial />} />
        <Route path='/logar' element={<Logar />} />
        <Route path='/registrarProduto' element={<RegistrarProduto obj={objProduto} cancelar={limparFormulario} botao={btnCadastrar} vetor={produtos} cadastrar={cadastrar} remover={remover} alterar={alterar} eventoTeclado={aoDigitar} selecionar={selecionarProduto} />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/tarifar' element={<Tarifar vetor={produtos} botao={btnTable} calcular={calcular} valores={guardar}/>} />
      </Routes>
    </Router>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

export default App;
