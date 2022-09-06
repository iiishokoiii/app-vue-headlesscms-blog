import axios from "axios"
const KEY = '3908e4bd9b5c44ce8c7d218b3da3aff3710c'; //microCMS上でAPI KEYを確認して変更
export const microCmsClient = async (path) => {
 const response = await axios
 .get(
  `https://iiitestblog.microcms.io/api/v1/${path}`,
 { headers: {'X-MICROCMS-API-KEY': KEY} }
 )
 .then(response => response.data)
 return response
} 