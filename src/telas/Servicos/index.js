import React, { useState } from "react";
import { FlatList } from "react-native";
import Item from "../../componenentes/Item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos",
        quantidade: 1,
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose de vacina V4. Seu gato precisa de duas",
        quantidade: 1,
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose de vacina antirrábica. Seu gato precisa de uma por ano",
        quantidade: 1,
    }
]

export default function Servicos() {
    return <>
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item {...item} expandivel={true} editavel={true} textoBotao="Adicionar ao carrinho" />}
            keyExtractor={({ id }) => String(id)}
        />
    </>
}