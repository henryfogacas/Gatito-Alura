import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import TelaPadrao from "../../componenentes/TelaPadrao";

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
        quantidade: 2,
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose de vacina antirrábica. Seu gato precisa de uma por ano",
        quantidade: 3,
    }
]

export default function Carrinho() {
    return <TelaPadrao>
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </TelaPadrao>
}