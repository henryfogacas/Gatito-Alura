import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Botao from "../Botao";
import CampoInteiro from "../CampoInteiro";
import estilos from './estilos'

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial, expandivel = false, editavel = true, textoBotao }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco * quantidadeInicial)

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        if (editavel) {
            setQuantidade(novaQuantidade);
            calculaTotal(novaQuantidade);
        }
    };

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    }

    const [expandir, setExpandir] = useState(false)

    const inverteExpandir = () => {
        if (expandivel) {
            setExpandir(!expandir);
            if (!expandir) {
                atualizaQuantidadeTotal(1);
            }
        }
    };

    return <>
        <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir} disabled={!expandivel}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(preco)}</Text>
        </TouchableOpacity>
        {(expandir || !expandivel) && (
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade:</Text>
                        {editavel ? (
                            <CampoInteiro valor={quantidade} estilos={estilos.quantidade} acao={atualizaQuantidadeTotal} />
                        ) : (
                            <Text style={estilos.quantidade}>{quantidade}</Text>
                        )}
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Total:</Text>
                        <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)}</Text>
                    </View>
                </View>
                <Botao valor={textoBotao} acao={() => { }} />
            </View>
        )}
        <View style={estilos.divisor} />
    </>
}