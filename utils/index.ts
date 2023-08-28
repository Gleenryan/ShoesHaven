import { Card } from "@/components";

const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

// export const getShoes = async () => {
//     sneaks.getMostPopular(5, function (err:string, products:string) {

//         for (let i = 0; i < products.length; i++) {



//             Card(products[i]);
//         }



//     })

// }