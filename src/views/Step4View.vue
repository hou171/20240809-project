<script>
import OrderSummary from '@/components/OrderSummary.vue';

export default {
    components: {
        OrderSummary,
    },
    data() {
        return {
            shopData: {},
            methods: {},
            userData: {},
            shopItems: [],
        };
    },
    mounted() {
        const jsonData = sessionStorage.getItem('shopping-cart');
        if (jsonData) {
            const shopData = JSON.parse(jsonData);
            this.shopData = shopData.shopData || {};
            this.methods = shopData.methods || {};
            this.userData = shopData.userData || {};
            this.shopItems = shopData.shopItems || [];
        }
    },
}
</script>

<template>
    <main class="container py-5 d-flex">
        <div class="container my-bg">
            <h2 class="m-4"> 購物車 </h2>

            <div class="container d-flex justify-content-around px-5">
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"
                        style="background-color: #0D6EFD; color: white;"> 1 </div>
                    <span class="mt-3 text-center my-text"> 確認購物車 </span>
                </div>

                <div class="my-progress progress" style="height: 10px; width: 100%;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        style="width: 100%;">
                    </div>
                </div>

                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"
                        style="background-color: #0D6EFD; color: white;"> 2 </div>
                    <span class="mt-3 text-center my-text"> 付款與運送方式 </span>
                </div>

                <div class="my-progress progress" style="height: 10px; width: 100%;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        style="width: 100%;">
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"
                        style="background-color: #0D6EFD; color: white;"> 3 </div>
                    <span class="mt-3 text-center my-text"> 填寫資料 </span>
                </div>

                <div class="my-progress progress" style="height: 10px; width: 100%;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        style="width: 100%;">
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"
                        style="background-color: #0D6EFD; color: white;"> 4 </div>
                    <span class="mt-3 text-center my-text"> 完成訂單 </span>
                </div>
            </div>

            <div class="border-top m-4"></div>
            <h2 class="d-flex justify-content-center m-4"> 訂單成立 </h2>
            <h5 class="m-4 text-style"> 訂單明細 </h5>

            <div class="d-flex flex-column m-4">
                <div class="d-flex justify-content-between mx-2" v-for="shopItem in shopItems"
                :key="shopItem.number">
                    <div class="d-flex align-items-center py-2">
                        <img class="my-product-img" :src="shopItem.photo" :alt="shopItem.name">
                        <span class="d-flex flex-column ms-2">
                            <span> {{ shopItem.name }} </span>
                            <span style="font-size: 12px;"> {{ shopItem.number }} </span>
                        </span>
                    </div>
                    <div class="d-flex align-items-center">
                        <div id="product1-count" class="d-flex align-items-center mx-3">
                            x{{ shopItem.quantity }}
                        </div>

                        <div id="product1-price" class="d-flex align-items-center ms-3">
                            ${{ shopItem.subtotal }}
                        </div>
                    </div>
                </div>

                <div class="border-top m-2"></div>
            </div>

            <h5 class="m-4 text-style"> 寄送資料 </h5>

            <div class="row d-flex mx-3">
                <div class="col-md-5 d-flex flex-column">
                    <div class="d-flex mb-1">
                        <span class="me-1"> 姓名： </span>
                        <span> {{ userData.name }} </span>
                    </div>
                    <div class="d-flex mb-1">
                        <span class="me-1"> 電話： </span>
                        <span> {{ userData.phone }} </span>
                    </div>
                    <div class="d-flex mb-1">
                        <span class="me-1"> Email： </span>
                        <span> {{ userData.email }} </span>
                    </div>
                    <div class="d-flex">
                        <span class="me-1"> 取貨地址： </span>
                        <span v-if="methods.deliver === '黑貓宅配'"> {{ userData.postalCode }} {{ userData.city }} {{ userData.address }} </span>
                        <span v-else> {{ methods.deliver }} </span>
                    </div>
                </div>
            </div>

            <div class="border-top m-4"></div>

            <div class="row row-cols-2 d-flex justify-content-end me-3">
                <OrderSummary :shopItems="shopItems" />
            </div>

            <div class="border-top m-4"></div>

            <div class="row d-flex justify-content-end m-4 row-gap-3">
                <div class="col col-sm-4 col-lg-3">
                    <a id="btn-right" class="d-flex justify-content-center rounded-2 px-0 px-sm-3 py-2 bg-danger"
                        @click="() => { $router.push('/') }"> 返回首頁 </a>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.text-style {
    font-size: 24px;
}

.my-nav:hover {
    color: var(--bs-link-hover-color);
}

#my-dropdown-menu {
    left: -130px;
}

main {
    width: 100%;
    color: #333333;
    font-weight: normal;
}

.my-bg {
    background-color: #FF9D96;
    box-shadow: 0px 5px 10px gray;
}

.my-circle-bg {
    width: 50px;
    height: 50px;
    background-color: white;
}

.my-progress {
    margin: 20px 0px;
}

.my-text {
    white-space: nowrap;
}

.my-product-img {
    width: 50px;
    height: 50px;
}

#btn-right {
    color: #FFD700;
    text-decoration: none;
}

#btn-left {
    color: #333333;
    border: 2px solid white;
    text-decoration: none;
}

@media (max-width:992px) {
    .my-circle-bg {
        width: 30px;
        height: 30px;
    }

    .my-progress {
        margin: 10px 0px;
    }
}

@media (max-width:768px) {
    .my-text {
        white-space: wrap;
    }
}
</style>