import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Post from './post';

export default function Feed() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Lucas_Silva',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png'
    },
    {
      id: '2',
      nome: 'lillil_ofc',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png'
    },
    {
      id: '3',
      nome: 'Jose_Augusto',
      descricao: 'Bora trabalhar Haha',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png'
    },
    {
      id: '4',
      nome: 'Gustavo_Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png'
    },
    {
      id: '5',
      nome: 'Guilhermegaleno_oficial',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png'
    }
  ])

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({ item }) =>
          <View style={{marginVertical: 10}}>
            <Post post={item} />
          </View >
        }
      />
    </View >
  )
}