import axios from 'axios';
import { defineStore } from 'pinia'

export interface Product{
    id?: number,
    name: string,
    image: string,
    price: number,
    category: string,
    review: string,
    status: string,
    description:string,
}

interface ProductStore{
  products: Array<Product>,
    one:Product,
    visible: boolean,
}

function initState(): ProductStore{
  return {
    products: [],
    one:{
    name:"",
    image:"",
    price: 0,
    category:"",
    review: "",
    status: "",
    description:"",},
    visible: false,
  }

}
export const productStore = defineStore('productStore', {
  state: () => {
    return initState()
  },
  actions: {
    fetchData(){
      axios
      .get(`https://64930abe428c3d2035d13828.mockapi.io/crud`)
      .then((response) => {this.products = response.data})
    },
    async create(one:Product) {
          console.log(one);
        await axios
        .post(`https://64930abe428c3d2035d13828.mockapi.io/crud`, one )
        .then( (response) => console.log(response))
        .catch(function (error) {
          console.log(error);
        });  
    },
      
    async delete(id: number){
       await axios.delete(`https://64930abe428c3d2035d13828.mockapi.io/crud/${id}`)
            .catch((error) => console.log(error));

    },
    async update(one:Product){
      await axios.put(`https://64930abe428c3d2035d13828.mockapi.io/crud/${one.id}`,one)
        .catch((error) => console.log(error));
    }
  },
})