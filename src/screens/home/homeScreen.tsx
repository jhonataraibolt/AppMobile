import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView
} from 'react-native';
import ChatItem from '../../components/chatItem';
import { DATA } from '../../data/data.js';
import { styles } from './style';

import iconeChats from '../../assents/iconeChats.jpeg';
import iconeComunit from '../../assents/iconeComunit.png';
import iconeLigacao from '../../assents/iconeLigacao.png';
import iconeStatus from '../../assents/iconeStatus.png';
import iconeCamera from '../../assents/iconeCamera.jpeg';
import iconeArquivadas from '../../assents/iconeArquivadas.jpeg';
import imagemPerfil from '../../assents/imagemPerfil.jpeg';
import iconeMeta from '../../assents/iconeMeta.jpeg';

export default function HomeScreen() {

  const [activeFilter, setActiveFilter] = useState('Todas');
  const filters = ['Todas', 'Não lidas 1', 'Favoritos', 'Grupos', '+'];

  const ListHeader = () => (
    <View>
      <TouchableOpacity style={styles.archivedItem}>
        <Image
          source={iconeArquivadas}
          style={styles.archivedIcon}
        />
        <Text style={styles.archivedText}>Arquivadas</Text>
        <Text style={styles.archivedCount}>10</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* header */}
      <View style={styles.topActions}>
        <TouchableOpacity>
          <Text style={styles.ButtonText}>...</Text>
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButtonCamera}>
            <Image
              source={iconeCamera}
              style={styles.iconeCamera}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtonMais}>
            <Text style={styles.unreadTextButtonMais}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Conversas</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pergunte a meta AI ou pesquise"
          placeholderTextColor="#8e8e93"
        />
      </View>

      {/* filtros */}
      <View style={styles.filtersWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.filterButtonActive
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={[
                styles.filterButtonText,
                activeFilter === filter && styles.filterButtonTextActive
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* conversas */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ChatItem item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ backgroundColor: '#fff' }}
      />

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={iconeStatus}
            style={styles.iconeImagem}
          />
          <Text style={styles.tabLabel}>Atualizações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={iconeLigacao}
            style={styles.iconeImagem}
          />
          <Text style={styles.tabLabel}>Ligações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={iconeComunit}
            style={styles.iconeImagem}
          />
          <Text style={styles.tabLabel}>Comunidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
          <Image
            source={iconeChats}
            style={styles.iconeImagem}
          />
          <Text style={styles.tabLabelActive}>Conversas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={imagemPerfil}
            style={styles.tabAvatar}
          />
          <Text style={styles.tabLabel}>Você</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.metaConteiner}>
        <TouchableOpacity style={styles.metaFloatingButton} activeOpacity={0.8}>
          <Image
            source={iconeMeta}
            style={styles.metaFloatingImage}
          />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

