<script>
import CountBtn from '@/components/CountBtn.vue';
import PokeBall from '@/assets/img/poke-ball.png';
import GreatBall from '@/assets/img/great-ball.png';
import UltraBall from '@/assets/img/ultra-ball.png';
import OrderSummary from '@/components/OrderSummary.vue';

export default {
    components: {
        CountBtn,
        OrderSummary,
    },
    data() {
        return {
            shopData: {
                shopItems: [
                    { number: '#00001', name: '寶貝球', price: 300, quantity: 1, subtotal: 300, photo: PokeBall },
                    { number: '#00002', name: '超級球', price: 500, quantity: 1, subtotal: 500, photo: GreatBall },
                    { number: '#00003', name: '高級球', price: 800, quantity: 1, subtotal: 800, photo: UltraBall },
                ],
                methods: {},
                userData: {},
            }
        };
    },
    computed: {
        totalPrice() {
            const total = this.shopData.shopItems.reduce((acc, item) => {
                item.subtotal = item.price * item.quantity;
                acc += item.subtotal;
                return acc;
            }, 0);
            return total;
        }
    },
    methods: {
        updateSubtotals() {
            this.shopData.shopItems.forEach(item => {
                item.subtotal = item.price * item.quantity;
            });
        },
        setData() {
            this.updateSubtotals();

            const totalQuantity = this.shopData.shopItems.reduce((acc, item) => acc + item.quantity, 0);
            const subtotal = this.totalPrice;
            const shoppingFee = 60;
            const total = subtotal + shoppingFee;

            this.shopData.summary = {
                totalQuantity,
                subtotal,
                shoppingFee,
                total,
            };
            const jsonData = JSON.stringify(this.shopData);
            sessionStorage.setItem('shopping-cart', jsonData);
            this.$router.push('/step2');
        }
    }
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
                        style="width: 25%;">
                    </div>
                </div>

                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"> 2 </div>
                    <span class="mt-3 text-center my-text"> 付款與運送方式 </span>
                </div>

                <div class="my-progress progress" style="height: 10px; width: 100%;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar">
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"> 3 </div>
                    <span class="mt-3 text-center my-text"> 填寫資料 </span>
                </div>

                <div class="my-progress progress" style="height: 10px; width: 100%;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar">
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="my-circle-bg rounded-circle d-flex justify-content-center align-items-center"> 4 </div>
                    <span class="mt-3 text-center my-text"> 完成訂單 </span>
                </div>
            </div>

            <div class="border-top m-4"></div>
            <h5 class="m-4 text-style"> 訂單明細 </h5>

            <div class="d-flex flex-column m-4">
                <div class="d-flex justify-content-between mx-2" v-for="shopItem in shopData.shopItems"
                    :key="shopItem.number">
                    <div class="d-flex align-items-center py-2">
                        <img class="my-product-img" :src="shopItem.photo" :alt="shopItem.name">
                        <span class="d-flex flex-column ms-2">
                            <span> {{ shopItem.name }} </span>
                            <span style="font-size: 12px;"> {{ shopItem.number }} </span>
                        </span>
                    </div>
                    <div class="d-flex align-items-center">
                        <CountBtn @calc="(count) => {
                            shopItem.quantity = count;
                            this.updateSubtotals();
                        }" />
                        <div class="d-inline-block" style="width: 80px;">
                            <span class="text-end d-block">${{ shopItem.subtotal }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-top m-4"></div>

            <div class="row row-cols-2 d-flex justify-content-end me-3">
                <OrderSummary :shopItems="shopData.shopItems" />
            </div>

            <div class="border-top m-4"></div>

            <div class="row d-flex justify-content-between m-4 row-gap-3">
                <div class="col-12 col-sm-4 col-lg-3">
                    <a id="btn-left" class="d-flex justify-content-center rounded-2 px-0 px-sm-3 py-2"
                        @click="() => { $router.push('/') }">
                        <i class="bi bi-arrow-left me-2"></i> 返回購物
                    </a>
                </div>
                <div class="col col-sm-4 col-lg-3">
                    <a id="btn-right" class="d-flex justify-content-center rounded-2 px-0 px-sm-3 py-2 bg-danger"
                        @click="setData"> 下一步 </a>
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