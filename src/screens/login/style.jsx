import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 25,
    height: 25,  
    marginTop: 10
  },
  buttonHeader:{
    borderColor:'black',
    height:22,
    width:22,
    borderRadius:50,
    borderWidth:2,
  },
   ButtonText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
    borderRadius: 20,
    width :20,
    textAlign:'center',
  },
  Title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#000',
    alignItems:'center',
    marginBottom: 20
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 14,
    fontWeight:'500',
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  //bloco de inserir
  inputContainer: {
    width: '100%',
    backgroundColor: '#f2f2f6',
    borderRadius: 10,
  
  },
  countrySelect: {
    padding: 12,
    fontSize: 16,
    color: '#389b70',
    fontWeight:'500',
    borderBottomWidth: 0.5,
    borderBottomColor: '#c6c6c8',
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  countryCode: {
    fontSize: 14,
    fontWeight:'500',
    color: '#000',
    marginRight: 10,
  },
  input: {
    color:'#515151',
    fontWeight:'500',
    flex: 1,
    height: 44,
    fontSize: 16,
    paddingLeft:5
  },
  //botao de avançar
  containerButtonNext:{ 
    width:'100%',
    borderRadius:10,
    paddingHorizontal:20,
  },
  nextButtonText: {
    fontSize: 16,
    width:'100%',
    color: '#c0c0c0',
    fontWeight: '700',
    backgroundColor: '#f2f2f6',
    padding:12,
    alignItems:'center',
    borderRadius: 10,
    textAlign:'center',
    marginTop:10,
  },
  //separador "ou "
  containerSeparador: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop:20,   
    marginHorizontal: 20, 
  },
  line: {
    flex: 1,                 
    height: 1.5,
    backgroundColor: '#c0c0c0',
  },
  text: {
    paddingHorizontal: 10, 
    fontSize: 14,
    color: '#c0c0c0',   
    fontWeight: '600',
  },
  //login com insta
 buttonContainer: {
    flexDirection: 'row',       
    alignItems: 'center',        
    backgroundColor: '#f2f2f7',  
    borderWidth: 1,
    borderColor: '#e5e5ea',      
    borderRadius: 16,            
    paddingHorizontal: 16,
    marginHorizontal: 20, 
    marginVertical:-20       
    
  },
  avatarContainer: {
    position: 'relative',        
    width: 65,
    height: 65,
    marginLeft:2,
  },
  avatarImage: {
    width: '80%',
    height: '80%',
    borderRadius: 24,            
    overflow: 'hidden',
    marginVertical: 5,       
  }, 
  textContainer: {
    flex: 1,                     
    marginLeft: 2,              
  },
  topText: {
    fontSize: 13,
    color: '#8e8e93',            
    marginBottom: 2,
  },
  usernameText: {
    fontSize: 16,
    color: '#000000',            
    fontWeight: 'bold',          
  },
  arrowIcon: {
    fontSize: 14,
    color: '#8e8e93',
    fontWeight: 'bold',
  },
});