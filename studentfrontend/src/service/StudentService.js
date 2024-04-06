import httpClient from '../http-common';


const getAllStudent = () =>
{
   return httpClient.get("/getAll"); 
}

const createStudent= data=>
{
   return httpClient.post("/add", data);
}

export default {getAllStudent, createStudent};