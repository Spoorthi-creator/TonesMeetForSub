// import { StyleSheet, Text, View,FlatList,ScrollView,TouchableOpacity ,ActivityIndicator,Image,ImageBackground,SafeAreaView,StatusBar,Platform,} from 'react-native'
// import React ,{useEffect,useState}from 'react'
// import firebase from 'firebase';
// import db from '../config';
// import { TextInput } from 'react-native-gesture-handler';
// import filter from 'lodash.filter';
// export default function UserScreen({ navigation }) {
//   const id=firebase.auth().currentUser.email;
//     const [userC,setUserC]=useState([])
//     const [isLoading, setIsLoading]=useState(false)
//     const[fullData,setFullData]=useState([])
//     const[searchQuery,setSearchQuery]=useState("")
//     const[error,setError]=useState(null)


//    // let id=firebase.auth().currentUser.uid;
//    useEffect(()=>{
//     setIsLoading(true)
//     getUsers();
//   },[])


   


//    if(isLoading){
//     return(
//       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <ActivityIndicator size={'large'} color='#5500dc'></ActivityIndicator>
//       </View>
//     )
//    }


//     const getUsers= async()=>{
//                await db.collection('users')
//                .where('email', '!=', id)
//                .onSnapshot((snapshot) => {
//                 var allU = [];
//                  snapshot.docs.map((doc) => {
                 
//                    var user = doc.data();
//                    console.log(user)
//                    allU.push(user)
                 
//                  });
             
//                 setFullData(allU)
//                 setUserC(allU)
//                 setIsLoading(false)
//                });
//              }
//              const emptylist=()=>{
//                 return(
//                   <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',}}>
//               <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}} > No tasks at the moment</Text>
//               </View>
//                 )
//               }


//               const handleSearch=(query)=>{
//                 setSearchQuery(query)
//                // const formattedQuery=query.toLowerCase();
//                const formattedQuery=query;
//                 const filteredData=filter(fullData,(user)=>{
//                   return contains (user,formattedQuery)
//                 });
//                 console.log("Filterd data", filteredData)
//                 setUserC(filteredData)
//                }


//                const contains=({name,email},query)=>{
// if(email.includes(query)||name.includes(query)){
//   console.log("Email there", email.includes(query))
//   return true;
// }
// else{
//   return false;
// }
//                }


//               const renderItem = ({item}) => {
//                 return(
//                   <TouchableOpacity style={{backgroundColor:'#242424',width:'90%',alignSelf:'center',borderRadius:20,flex:1,margin:3}} onPress={()=>{
//                     navigation.navigate('ChatDetailScreen',{data:item,id:id})
//                   }}>
//                     <View style = {{
//                       backgroundColor:'#656565',borderRadius:10,padding:10,width:'100%',marginTop:10}}>
//                         <ScrollView>
//                         <Text style = {{
//                             fontSize : 15,
//                             marginLeft : 5,
//                             color:'white',
//                         }}>Name : {item.name}</Text>
//                         <Text style = {{
//                             fontSize : 15,
//                             marginLeft : 5,
//                             color:'white'
//                         }}>Email : {item.email}</Text>
                        
                       
                         
                       
//                         </ScrollView>
//                     </View>
//                 </TouchableOpacity>
//                 )
//               }
//   return (
//     <View style={{flex:1}}>
//     <ImageBackground
//     style={{  resizeMode: 'cover', width: '100%', height: '100%' }}
//     source={require('../assets/also_good.jpg')}
//     >
//     <SafeAreaView style={styles.droidSafeArea} />
     
//       <View style={styles.appTitle}>
//             <View style={styles.appIcon}>
//               <Image
//                 source={require('../assets/snack-icon.png')}
//                 style={styles.iconImage}></Image>
//             </View>
//           </View>
      
   
// <Text style={{margin:3, textAlign:'center',fontSize:25,}}>Lets Chat!</Text>

//       <TextInput
//       placeholder='Search'
//       placeholderTextColor={'black'}
//       clearButtonMode='always'
//       autoCapitalize='none'
//       autoCorrect={false}
//       value={searchQuery}
//       onChangeText={(query)=>handleSearch(query)}
//       style={{paddingHorizontal:20,paddingVertical:10,borderRadius:10,borderWidth:1,margin:20,
//       borderColor:'black',color:'white',}}>


//       </TextInput>
//       <FlatList
//                          ListEmptyComponent={emptylist}
//                          scrollEnabled = {true}
//                         data = {userC}
//                         renderItem={renderItem}
//                         keyExtractor={(item, index)=>index.toString()}
//                         style={{
//                           marginBottom:20,
//                          // marginTop:30
//                         }}
//                           />
                        
//     </ImageBackground>
//     </View> 
//   )
// }




// const styles = StyleSheet.create({appTitle: {
  

//   backgroundColor: 'black',
// },
// appIcon: {
//   justifyContent: 'center',
//   alignItems: 'center',
// },iconImage: {
//   marginTop: 5,
//   width: 40,
//   height: 40,
//   resizeMode: 'contain',
//   alignSelf: 'center',
// },droidSafeArea: {
//   marginTop:
//     Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
// },})


import { StyleSheet, Text, View,FlatList,ScrollView,TouchableOpacity ,ActivityIndicator,StatusBar,Platform,ImageBackground,SafeAreaView,Image,Dimensions} from 'react-native'
import React ,{useEffect,useState}from 'react'
import firebase from 'firebase';
import db from '../config';
import { TextInput } from 'react-native-gesture-handler';
import filter from 'lodash.filter';
const  width  = Dimensions.get('window').width;
import { Feather } from '@expo/vector-icons';
export default function UserScreen({ navigation }) {
  const id=firebase.auth().currentUser.email;
    const [userC,setUserC]=useState([])
    const [isLoading, setIsLoading]=useState(false)
    const[fullData,setFullData]=useState([])
    const[searchQuery,setSearchQuery]=useState("")
    const[error,setError]=useState(null)

   // const id=firebase.auth().currentUser.uid;
   useEffect(()=>{
    setIsLoading(true)
    getUsers();
  },[])

   

   if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'} color='black'></ActivityIndicator>
      </View>
    )
   }
 

    const getUsers= async()=>{
               await db.collection("users").where("email", "!=", id).onSnapshot((snapshot) => {
                var allU = [];
                 snapshot.docs.map((doc) => {
                  
                   var user = doc.data();
                   console.log(user)
                   allU.push(user)
                 
                 });
             
                setFullData(allU)
                setUserC(allU)
                setIsLoading(false)
               });
             }
             const emptylist=()=>{
                return(
                  <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',}}>
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}} > No users at the moment</Text>
              </View>
                ) 
              }

              const handleSearch=(query)=>{
                setSearchQuery(query)
               // const formattedQuery=query.toLowerCase();
               const formattedQuery=query;
                const filteredData=filter(fullData,(user)=>{
                  return contains (user,formattedQuery)
                });
                console.log("Filterd data", filteredData)
                setUserC(filteredData)
               }

               const contains=({name,email},query)=>{
if(email.includes(query)||name.includes(query)){
  console.log("Email there", email.includes(query))
  return true;
}
else{
  return false;
}
               }
              

              const renderItem = ({item}) => {
                return(
                  <TouchableOpacity style={{backgroundColor:'#242424',width:'90%',alignSelf:'center',borderRadius:20,flex:1,margin:3}} onPress={()=>{
                    navigation.navigate('ChatDetailScreen',{data:item,id:id})
                  }}>
                     <View style = {{ backgroundColor:'#656565',borderRadius:10,padding:10,width:'100%',marginTop:10}}>
                        <ScrollView>
                        <Text style = {{
                            fontSize : 15,
                            marginLeft : 5,
                            color:'white'
                        }}>Email : {item.email}</Text>
                        
                         
                       
                        </ScrollView>
                    </View>
                </TouchableOpacity>
                )
              }
            
              
  return (
    <View style={{flex:1}}>
     <ImageBackground
     style={{  resizeMode: 'cover', width: '100%', height: '100%' }}
     source={require('../assets/also_good.jpg')}
     >
     <SafeAreaView style={styles.droidSafeArea} />
     
       <View style={styles.appTitle}>
       <TouchableOpacity onPress={navigation.openDrawer}>
         
         <Feather name="menu" size={30} color="white" style={{margin:5}}/>
         </TouchableOpacity>
             <View style={styles.appIcon}>
               <Image
                 source={require('../assets/snack-icon.png')}
                 style={styles.iconImage}></Image>
             </View>
           </View>
      
   
 <Text style={{margin:3, textAlign:'center',fontSize:25,marginTop:20}}>Lets Chat!</Text>

       <TextInput
       placeholder='Search'
       placeholderTextColor={'black'}
       clearButtonMode='always'
       autoCapitalize='none'
       autoCorrect={false}
       value={searchQuery}
       onChangeText={(query)=>handleSearch(query)}
       style={{paddingHorizontal:20,paddingVertical:10,borderRadius:10,borderWidth:1,margin:20,
       borderColor:'black',color:'white',}}>


      </TextInput>
       <FlatList
                          ListEmptyComponent={emptylist}
                          scrollEnabled = {true}
                         data = {userC}
                         renderItem={renderItem}
                         keyExtractor={(item, index)=>index.toString()}
                         style={{
                           marginBottom:20,
                          // marginTop:30
                         }}
                           />
                        
     </ImageBackground>
     </View> 
  )
}


const styles = StyleSheet.create({
  appTitle: {
       backgroundColor: 'black',
       flexDirection:'row',
     },
     appIcon: {
       justifyContent: 'center',
       alignItems: 'center',
     },iconImage: {
       marginTop: 5,
       width: 40,
       height: 40,
       resizeMode: 'contain',
       alignSelf: 'center',
       marginLeft:width/3.2,
     },droidSafeArea: {
       marginTop:
         Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
     },
})


// import React, { Component ,useEffect,useState,FlatList} from 'react';
// import { Text, View } from 'react-native';
// import firebase from 'firebase';
// import db from '../config';

// export default function ChatScreen() {
   
//          const [userC,setUserC]=useState([])
      
//   //  const [user, setUser]=useState([]);
//   useEffect(()=>{
//     getUsers();
//   },[])
//    // this.getUsers()
   
//     const getUsers= async()=>{
//        await db.collection('users')
//        .where('email', '!=', firebase.auth().currentUser.email)
//        .onSnapshot((snapshot) => {
//          snapshot.docs.map((doc) => {
//            var allU = [];
//            var user = doc.data();
//            console.log(user)
//            allU.push(user)
         
//          });
//         // this.setState({userC:allU});
//         setUserC(allU)
//        });
//     }
   
//     const emptylist=()=>{
//        return(
//          <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',}}>
//      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}} > No contacts at the moment</Text>
//      </View>
//        ) 
//      }
   
//       renderItem = ({item}) => {
//        return(
//          <View style={{backgroundColor:'#e75480',width:'90%',marginLeft:30,marginRight:13,borderRadius:20,flex:1}}>
//            <View style = {{ 
//              backgroundColor:'#f9ccca',borderRadius:10,marginLeft:20,padding:10,width:'95%',marginTop:10}}>
//                <ScrollView>
//                <Text style = {{
//                    fontSize : RFValue(15),
//                    marginLeft : RFValue(5)
//                }}>Email : {item.email}</Text>
//                {/* <Text style = {{
//                    fontSize : RFValue(15),
//                    marginLeft : RFValue(5)
//                }}>Time : {item.time}:{item.min} </Text>
//                <Text style = {{
//                    alignSelf : "center",
//                    fontSize : RFValue(23)
//                }}>{item.task}</Text>
//                  <Pressable style={{alignSelf:'flex-end',marginRight:10}} onPress={()=>handleDelete(item.id)}>
//                       <MaterialCommunityIcons name="delete-empty" size={22} color="red" />
//                       </Pressable>
//                */}
//                </ScrollView>
//            </View>
//        </View>
//        )
//      }

//         return (
//             <View
//                 style={{
//                     flex: 1,
//                     justifyContent: "center",
//                     alignItems: "center"
//                 }}>
//                 <View style={{width:'100%',height:60,backgroundColor:'white',elevation:5,justifyContent:'center',alignItems:'center'}}>

//                     <Text style={{color:'blue',fontSize:20}}>Chat Feature</Text>

//                     <FlatList 
//                          ListEmptyComponent={emptylist()}
//                          scrollEnabled = {true}
//                         data = {userC}
//                         renderItem={renderItem}
//                         keyExtractor={(item, index)=>index.toString()}
//                         style={{
//                           marginBottom:20,
//                          // marginTop:30
//                         }}
//                           />
              
//                 </View>
//             </View>
//         )
                    
// }
