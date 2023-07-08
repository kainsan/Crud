<template>
      <span
        class="p-input-icon-right mt-5 mb-2 md:mt-0 md:mb-0 w-full lg:w-25rem">
        <i class="pi pi-search text-gray-400"></i>
        <input
          class="form-control"
          type="text"
          v-model="searchQuery"
          placeholder="Search"
        />
      </span>
  <div v-for="one in filteredResources" class="col-12">
    
    <div
      class="p-2 my-4 flex flex-column lg:flex-row justify-content-between align-items-center"
    >
      <div
        class="flex flex-column lg:flex-row justify-content-center align-items-center px-2"
      >
        <td>
          <checkbox
            v-model="selected"

            :value="one.id"
            @click="selectRow(one)"
          />
        </td>

        <img
          :src="one.image"
          alt="one"
          class="w-8rem h-8rem mr-3 flex-shrink-0"
        />
        <div class="flex flex-column my-auto text-center md:text-left">
          <span class="text-900 font-medium mb-3 mt-3 lg:mt-0">{{
            one.name
          }}</span>
          <span class="text-600 text-sm mb-3">{{ one.description }}</span>
          <a
            v-ripple
            tabindex="0"
            class="p-2 cursor-pointer w-9rem mx-auto lg:mx-0 border-round font-medium text-center border-1 border-primary text-primary transition-duration-150 p-ripple"
            >Buy Again <span class="font-light">{{ one.price }}$</span></a
          >
        </div>
      </div>
      <div class="flex align-items-center">
        <Button
          style="
            margin: 0 5px;
            border-radius: 2.5rem;
            background-color: rgb(79, 18, 192);
          "
          label="Edit"
          @click="handleClickEdit(one)"
        />
        
      </div>
    </div>
    <Divider class="w-full block lg:hidden surface-border"></Divider>
  </div>
  <div class="col-12 p-0 flex border-top-1 surface-border">
    <Button class="pi pi-folder mr-2 mb-2 md:mb-0" @click="handleClickAdd()"
      >Add</Button>
      <Button
          style="
            margin: 0 5px;
            border-radius: 2.5rem;
            background-color: rgb(151, 9, 9);
          "
          label="Delete"
          @click="delProduct()"
        ></Button>
  </div>
  <ProductDialog />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productStore, type Product } from "@/stores/product";
import { mapActions, mapState, mapWritableState } from "pinia";
import ProductDialog from "@/components/product/Dialog.vue";
export default defineComponent({
  components: { ProductDialog },
  data() {
    return {
      selected: []  as Array<number> ,
      searchQuery:'',
    };
  },
  computed: {
    ...mapState(productStore, ["products",]),
    ...mapWritableState(productStore, [
      "one",
      "visible",
      "checked",
    ]),
    filteredResources(){
      if(this.searchQuery){
      return this.products.filter((one)=>{
        return one.name.startsWith(this.searchQuery);
      })
      }else{
        return this.products;
      }
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(productStore, ["fetchData", "delete", "update", "create",]),
    selectRow(one:Product) {
      if(!one.id) return
    const index = this.selected.indexOf(one.id);

    if (index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(one.id);
    }
    console.log(this.selected);
    },
    handleClickEdit(abc:Product) {
      this.visible = true;
      this.one = abc; // khi bấm nút edit abc có tất cả giá trị của one
    },
    async delProduct() { 
       (this.selected.forEach( async (id) => { //lấy phần tử trong mảng selected
         await this.delete(id);
      }));
      await this.fetchData();
      this.selected = [];
    },
    // func handle click button edit
    handleClickAdd() {
      this.visible = true;
      this.one = {
            name:"",
            image:"",
            price: 0,
            category:"",
            review: "",
            status: "",
            description:"",};
    },
    
  },
});
</script>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  
  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
  
  nav a.router-link-exact-active {
    color: var(--color-text);
  }
  
  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
  
  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }
  
  nav a:first-of-type {
    border: 0;
  }
  
  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
  
    .logo {
      margin: 0 2rem 0 0;
    }
  
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  
    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
  
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
  
  /* Edit */
  .flex {
    display: flex;
  }
  
  .flex-wrap {
    flex-wrap: wrap;
  }
  
  .border-top-1 {
    border-top: 1px solid;
  }
  
  .surface-border {
    border-color: #ccc;
  }
  
  .pt-4 {
    padding-top: 1rem;
  }
  
  .bg-blue-50 {
    background-color: #eef2ff;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  
  .w-full {
    width: 100%;
  }
  
  .md\:w-4 {
    width: 1rem;
  }
  
  .rounded {
    border-radius: 0.25rem;
  }
  
  .text-700 {
    font-weight: 700;
  }
  
  .line-height-3 {
    line-height: 1.5;
  }
  
  .m-0 {
    margin: 0;
  }
  
  .p-5 {
    padding: 1.25rem;
  }
  
  .input-field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
  
  .input-field:focus {
    outline: none;
    border-color: blue;
  }
  </style>
