import { Request, Response } from "express";
import path from 'path';
// import axios from "axios";
// import qs from "qs";
import dotenv from "dotenv";

dotenv.config();

// let arrToken: any[] = [];

// export const teste = async (req: Request, res: Response) => {
//   let data = qs.stringify({
//     grant_type: "authorization_code",
//     client_id: process.env.APP_ID,
//     client_secret: process.env.SECRET_KEYS,
//     code: process.env.TG_TOKEN,
//     redirect_uri: "https://www.mercadopolo.com/",
//     code_verifier: "66285964abf5c20001d118c8-1392627052",
//   });

//   let config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: "https://api.mercadolibre.com/oauth/token",
//     headers: {
//       accept: "application/json",
//       "content-type": "application/x-www-form-urlencoded",
//     },
//     data: data,
//   };

//   try {
//     const response = await axios.request(config);
//     const data = response.data.refresh_token;
//     arrToken.push(data);
//     res.send(data); 
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// export const refresh = async (req: Request, res: Response) => {

//   let dataRefresh = qs.stringify({
//     grant_type: "refresh_token",
//     client_id: process.env.APP_ID,
//     client_secret: process.env.SECRET_KEYS,
//     refresh_token: arrToken[0],
//     redirect_uri: "https://www.mercadopolo.com/",
//   });

//   let configRefresh = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: "https://api.mercadolibre.com/oauth/token",
//     headers: {
//       accept: "application/json",
//       "content-type": "application/x-www-form-urlencoded",
//     },
//     data: dataRefresh,
//   };

//   try {
//     const response = await axios.request(configRefresh);
//     const data = response.data;
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//     res.send(error); 
//   }
// };


export const produtos = async (req: Request, res: Response) => {
  const nome = 'Searchprice'

  return res.send(nome)
}

export const imagem = async (req: Request, res: Response) => {
  const imagePath = path.join(__dirname, 'imagens', 'template.png');
  return res.sendFile(imagePath)
}