import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtHeader: {
    fontSize: hp('3%'),
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 15,
  },
  viewSepratorStyle: {
    height: 2,
    backgroundColor: 'gray',
    margin: 5,
  },
  viewContactList: {
    flexDirection: 'row',
    margin: 10,
  },
  viewNewGroup: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  newGroupContainer: {
    flexDirection: 'row',
    width: '30%',
  },
  txtNewGroup: {
    fontSize: 18,
    color: 'blue',
    //marginTop: 5,
    //marginLeft: 15,
  },

  viewModelNewGroup: {
    flex: 1,
    
  },
  newGroupTxt:{
     color:"white",
    fontWeight:'bold',
    fontSize: 20,
    //textDecorationLine: 'underline',
  },
  newModelHeaderContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelGroupNameContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width:500,
    height:75,
    marginTop:35,
    marginBottom:25,

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:70,
    height:70,
    marginRight:15,
    justifyContent: 'center'
  },
  newModelButtonContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  buttonContainer: {
    width:'40%',
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30,
    backgroundColor:'transparent',
    marginLeft:5,
    marginRight:5,
  },
  loginButton: {
    backgroundColor: "#fff000",  
  },
  loginText: {
    color: 'red',
    fontSize: 18,
  },
  newModelSaveContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  newModelCancelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  sepratorStyle: {
    height: 1,
    width: '90%',
    backgroundColor: '#DEDEDE',
  },
  imgContactList: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
  },
  txtContactList: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    marginLeft: 15,
  },
  txtPhoneNumber: {
    fontSize: 15,
    color: 'black',
    marginTop: 5,
    marginLeft: 15,
  },
  viewCheckMarkStyle: {
    width: 20,
    height: 20,
    margin: 15,
  },
  viewSelectedContactList: {
    margin: 10,
    alignItems: 'center',
    width: 70,
  },
  imgSelected: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imgCancelStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  txtSelectedContact: {
    fontSize: 15,
    color: 'black',
    marginTop: 15,
  },
  viewSearch: {
    backgroundColor: 'rgb(202,201,207)',
  },
  viewCloseStyle: {
    position: 'absolute',
    right: 0,
    width: 25,
    height: 25,
  },
  searchInput: {
    width: '96%',
    marginHorizontal: '2%',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 0,
    paddingVertical: 10,
    paddingLeft: 20,
    fontSize: 18,
  },
  nameContainer: {
    flexDirection: 'column',
    width: '60%',
  },
  loading: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.2,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
