import React from "react"
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import TelaPadrao from './src/componenentes/TelaPadrao'
import Rotas from "./src/Rotas";

export default function App() {
  return <TelaPadrao>
    <Rotas />
  </TelaPadrao>
}