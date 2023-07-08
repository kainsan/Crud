<template>
    <div
    class="surface-50 px-4 md:px-6 lg:px-8 border-1 surface-border border-x-none"
  >
    <div class="grid flex-wrap -mr-3 -ml-3 md:text-left">
      <div
        class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border"
      >
        <span class="text-900 text-xl block">Company</span>
        <ul class="list-none p-0">
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >About Peak</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Factories</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Careers</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Environmental Initiatives</a
            >
          </li>
        </ul>
      </div>
      <div
        class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none md:border-right-1 surface-border"
      >
        <span class="text-900 text-xl block">Account</span>
        <ul class="list-none p-0">
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Manage Account</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Saved Items</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >My Cart</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Wishlist</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Orders & Returns</a
            >
          </li>
        </ul>
      </div>
      <div
        class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 border-bottom-1 lg:border-y-none lg:border-right-1 surface-border"
      >
        <span class="text-900 text-xl block">Legal</span>
        <ul class="list-none p-0">
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Investor Relations</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Data Privacy</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Terms of Service</a
            >
          </li>
          <li>
            <a
              tabindex="0"
              class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
              >Legal Information</a
            >
          </li>
        </ul>
      </div>
      <div
        class="col-12 sm:col-6 md:col-4 lg:col-3 flex flex-column mt-2 py-4 px-4 mb-4 lg:mb-0"
      >
        <span class="text-900 text-xl block">Subscribe</span>
        <span class="text-500 block mt-4 line-height-3"
          >Join our community to receieve the latest updates and special
          promotions.</span
        >
        <div class="p-inputgroup mt-3 mx-auto lg:mx-0" style="max-width: 30rem">
          <Button
            icon="pi pi-envelope"
            class="text-500 surface-100 surface-border"
          ></Button>
          <InputText
            type="text"
            placeholder="Email"
            class="border-y-1 text-500 border-x-none surface-border"
          />
          <Button
            icon="pi pi-arrow-right"
            class="text-500 surface-100 surface-border"
          ></Button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="surface-section px-3 py-4 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center"
  >
    <div class="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0">
      <img src="#" class="w-3rem mr-3" alt="Amex" />
      <img src="#" class="w-3rem mr-3" alt="Apple Pay" />
      <img src="#" class="w-3rem mr-3" alt="Mastercard" />
      <img src="#" class="w-3rem mr-3" alt="Visa" />
      <img src="#" class="w-3rem" alt="PayPal" />
    </div>
    <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
      <a tabindex="0" class="cursor-pointer mr-3">
        <i
          class="pi pi-facebook surface-900 p-1 text-sm border-circle text-0"
        ></i>
      </a>
      <a tabindex="0" class="cursor-pointer mr-3">
        <i
          class="pi pi-twitter surface-900 p-1 text-sm border-circle text-0"
        ></i>
      </a>
      <a tabindex="0" class="cursor-pointer mr-3">
        <i
          class="pi pi-youtube surface-900 p-1 text-sm border-circle text-0"
        ></i>
      </a>
      <a tabindex="0" class="cursor-pointer">
        <i
          class="pi pi-google surface-900 p-1 text-sm border-circle text-0"
        ></i>
      </a>
    </div>
  </div>
</template>