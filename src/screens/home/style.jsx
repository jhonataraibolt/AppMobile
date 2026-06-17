import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 40,
  },
  ButtonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    backgroundColor: '#f6f5f3',
    borderRadius: 20,
    width: 25,
    height: 23,
    textAlign:'center',
      
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButtonCamera:{
    marginTop: -3,
    backgroundColor:'transparent',
  },
  iconButtonMais: {
    backgroundColor: '#2aa45c',
    borderRadius: 20,
    minWidth :26,
    height: 26,
    alignItems:'center',
    marginLeft: 20,
    marginTop: 3,
    
  },
  unreadTextButtonMais:{ 
    fontSize: 20, 
    color: '#fff', 
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 3,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  //barra pesquisa
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  searchInput: {
    backgroundColor: '#f6f5f3',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    fontSize: 16,
    marginVertical: 9,
  },
  //filtros
  filtersWrapper: {
    height: 45,
  },
  filtersContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#tranparent',
    borderWidth:2,
    borderColor:'#f6f5f3',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#d8fdd2', 
  },
  filterButtonText: {
    fontSize: 14,
    color: '#707070',
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#23582e', 
    fontWeight: '600',
  },
  //arquivadas
  archivedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  archivedIcon: {
    borderRadius: 50,
    width: 23,
    height: 23,
    marginHorizontal:15
  },
  archivedText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 14, 
    flex: 1,
    color: '#707070',
  },
  archivedCount: {
    marginRight: 16,
    color: '#707070',
    fontSize: 14,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#dadada',
    marginLeft: 82,
  },
  //barra inferior
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#dadada',
    backgroundColor: '#f7f7f7',
    paddingBottom: 5,
    paddingTop: 5,
    paddingHorizontal:5
  },
  iconeImagem: {
    width: 40,  
    height: 25,
    resizeMode: 'contain', 
  },
  iconeCamera:{
    borderRadius: 50,
    width: 27,
    height: 27,
    marginTop: 5,
  },
  tabItem: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    color: '#707070',
    marginTop: 1
  },
  tabLabelActive: {
    fontSize: 10,
    color: '#000',
    fontWeight: '400',
    marginTop: 4
  },
  tabAvatar: {
    width: 25,
    height: 25,
    borderRadius: 12, 
    marginBottom: 1,
    marginTop: 1,  
    borderWidth: 0.5,
    borderColor: '#707070',
  },
  //icone meta
  metaFloatingButton: {
    position: 'absolute', 
    bottom: 70,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 50,   
  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  metaFloatingImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius:50
  },
});