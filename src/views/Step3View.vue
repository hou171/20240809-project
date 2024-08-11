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
            userData: {
                name: '',
                phone: '',
                email: '',
                city: '',
                postalCode: '',
                address: '',
            },
            shopItems: [],
        }
    },
    mounted() {
        const jsonData = sessionStorage.getItem('shopping-cart');
        if (jsonData) {
            const shopData = JSON.parse(jsonData);
            this.methods = shopData.methods || {};
            this.shopItems = shopData.shopItems || [];
        }
    },
    methods: {
        setData() {
            if (!this.userData.name || !this.userData.phone || !this.userData.email ||
                !this.userData.city || !this.userData.postalCode || !this.userData.address) {
                alert('請填寫所有資料');
                return;
            }
            this.shopData.methods = this.methods;
            this.shopData.userData = this.userData;
            this.shopData.shopItems = this.shopItems;
            sessionStorage.setItem('shopping-cart', JSON.stringify(this.shopData));
            this.$router.push('/step4');
        },
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
                        style="width: 25%;">
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"> 4 </div>
                    <span class="mt-3 text-center my-text"> 完成訂單 </span>
                </div>
            </div>

            <div class="border-top m-4"></div>
            <h5 class="m-4 text-style"> 寄送資料 </h5>

            <div class="d-flex flex-column m-4">
                <div class="d-flex justify-content-between mx-2">
                    <form class="py-2">
                        <label for="name">姓名：</label>
                        <br>
                        <input v-model="userData.name" type="text" id="name" name="name" class="mb-2"
                            placeholder="被小智放生24年的比雕" value="被小智放生24年的比雕">
                        <br>
                        <label for="phone">電話：</label>
                        <br>
                        <input v-model="userData.phone" type="text" id="phone" name="phone" class="mb-2"
                            placeholder="0912345678" value="電話">
                        <br>
                        <label for="email">Email：</label>
                        <br>
                        <input v-model="userData.email" type="text" id="email" name="email" class="mb-2"
                            placeholder="@gmail.com" value="Email">
                        <br>
                        <label for="address">地址：</label>
                        <br>
                        <input v-model="userData.city" type="text" id="address" name="address" class="mb-1"
                            placeholder="城市" value="城市">
                        <input v-model="userData.postalCode" type="text" id="address" name="address" class="mb-1"
                            placeholder="郵遞區號" value="郵遞區號">
                        <br>
                        <input v-model="userData.address" type="text" id="address" name="address" placeholder="地址"
                            value="地址">
                    </form>
                </div>
            </div>

            <div class="border-top m-4"></div>

            <div class="row row-cols-2 d-flex justify-content-end me-3">
                <OrderSummary :shopItems="shopItems" />
            </div>

            <div class="border-top m-4"></div>

            <div class="row d-flex justify-content-between m-4 row-gap-3">
                <div class="col-12 col-sm-4 col-lg-3">
                    <a id="btn-left" class="d-flex justify-content-center rounded-2 px-0 px-sm-3 py-2"
                        @click="() => { $router.push('/step2') }">
                        <i class="bi bi-arrow-left me-2"></i> 上一步
                    </a>
                </div>
                <div class="col col-sm-4 col-lg-3">
                    <a id="btn-right" class="d-flex justify-content-center rounded-2 px-0 px-sm-3 py-2 bg-danger"
                        @click="setData"> 前往付款 </a>
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