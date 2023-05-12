// export const initialState = {

//     data: []
// };

// const getData = async ( state, action ) => {
//     let res = await fetch( "http://localhost:5003/books" )
//     // res = await res.json()
//     return res
// }

// export const reducer = async ( state, action ) => {
//     switch ( action.type )
//     {
//         case "all":
//         //  fetch( "http://localhost:5003/books" ).then( res => res.json()).then(res=>disp)



//         case 'search':
//             let res = await fetch( 'http://localhost:5003/get/all', {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//                 , body: JSON.stringify(
//                     {
//                         key: action.payload
//                     }
//                 )
//             } )
//             res = await res.json()
//             return res
//         default:
//             return state;
//     }
// };