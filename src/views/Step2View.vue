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
                        style="width: 25%;">
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
            <h5 class="m-4 text-style"> 付款方式 </h5>

            <div class="d-flex flex-column m-4">
                <div class="d-flex justify-content-between mx-2">
                    <form class="py-2">
                        <input type="radio" id="credit-card" name="pay" value="信用卡付款">
                        <label for="credit-card" class="mb-2"> 信用卡付款 </label>
                        <br>
                        <input type="radio" id="atm" name="pay" value="網路 ATM">
                        <label for="atm" class="mb-2"> 網路 ATM </label>
                        <br>
                        <input type="radio" id="code" name="pay" value="超商代碼">
                        <label for="code" class="mb-2"> 超商代碼 </label>
                    </form>
                </div>
            </div>

            <div class="border-top m-4"></div>
            <h5 class="m-4 text-style"> 運送方式 </h5>

            <div class="d-flex flex-column m-4">
                <div class="d-flex justify-content-between mx-2">
                    <form class="py-2">
                        <input type="radio" id="t-cat" name="delivery" value="黑貓宅配">
                        <label for="t-cat" class="mb-2"> 黑貓宅配 </label>
                        <br>
                        <input type="radio" id="store" name="delivery" value="超商店到店">
                        <label for="store" class="mb-2"> 超商店到店 </label>
                    </form>
                </div>
            </div>

            <div class="border-top m-4"></div>

            <div class="row row-cols-2 d-flex justify-content-end me-3">
                <div class="col-md-3 d-flex flex-column">
                    <div class="d-flex justify-content-between">
                        <span> 數量： </span>
                        <span> 3 </span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span> 小計： </span>
                        <span> $1600 </span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span> 運費： </span>
                        <span> $60 </span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span> 總計： </span>
                        <span> $1660 </span>
                    </div>
                </div>
            </div>

            <div class="border-top m-4"></div>

            <div class="row d-flex justify-content-between m-4 row-gap-3">
                <div class="col-12 col-sm-4 col-lg-3">
                    <a id="btn-left" class="d-flex justify-content-center rounded-2 px-0 px-sm-3 py-2" @click="() => { $router.push('/step1') }">
                        <i class="bi bi-arrow-left me-2"></i> 上一步
                    </a>
                </div>
                <div class="col col-sm-4 col-lg-3">
                    <a id="btn-right" class="d-flex justify-content-center rounded-2 px-0 px-sm-3 py-2 bg-danger" @click="() => { $router.push('/step3') }"> 下一步 </a>
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