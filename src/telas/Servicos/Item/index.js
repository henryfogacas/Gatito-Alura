import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Botao from "../../../componenentes/Botao";
import CampoInteiro from "../../../componenentes/CampoInteiro";
import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
    const [quantidade, setQuantidade] = useState(1)
    const [total, setTotal] = useState(preco)
    const [expandir, setExpandir] = useState(false)

    const atualizaQuantintadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade)
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    }

    const inverteExpandir = () => {
        setExpandir(!expandir)
        atualizaQuantintadeTotal(1)
    }

    return <>
        <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(preco)}</Text>
        </TouchableOpacity>
        {expandir &&
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade:</Text>
                        <CampoInteiro valor={quantidade} estilos={estilos.quantidade} acao={atualizaQuantintadeTotal} />
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Total:</Text>
                        <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)}</Text>
                    </View>
                </View>
                <Botao valor="Adicionar ao carrinho" acao={() => { }} />
            </View>
        }
        <View style={estilos.divisor} />
    </>
}