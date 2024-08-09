<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="bg-danger">
        <div class="container text-center px-2 py-4 py-md-5">
            <div class="row">
                <div class="col-md-3 mb-5">
                    <a @click="() => { $router.push('/') }"><img src="/src/assets/img/pokemon-logo.png" width="100%"></a>
                    <ul class="nav flex-column my-3">
                        <li>探索寶可夢世界，捕捉更多的神奇寶可夢！</li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md mb-3">
                    <h5 class="fw-bold" style="font-size: 20px;">寶可夢類別</h5>
                    <ul class="nav flex-column">
                        <a href="#" class="my-nav nav-item nav-link mb-2">草系寶可夢</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">火系寶可夢</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">水系寶可夢</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">電系寶可夢</a>
                    </ul>
                </div>
                <div class="col-sm-6 col-md mb-3">
                    <h5 class="fw-bold" style="font-size: 20px;">遊戲攻略</h5>
                    <ul class="nav flex-column">
                        <a href="#" class="my-nav nav-item nav-link mb-2">捕捉技巧</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">訓練方法</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">對戰策略</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">神獸指南</a>
                    </ul>
                </div>
                <div class="col-sm-6 col-md mb-3">
                    <h5 class="fw-bold" style="font-size: 20px;">社群活動</h5>
                    <ul class="nav flex-column">
                        <a href="#" class="my-nav nav-item nav-link mb-2">寶可夢活動</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">官方比賽</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">粉絲見面會</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">線上討論區</a>
                    </ul>
                </div>
                <div class="col-sm-6 col-md mb-3">
                    <h5 class="fw-bold" style="font-size: 20px;">支持與幫助</h5>
                    <ul class="nav flex-column">
                        <a href="#" class="my-nav nav-item nav-link mb-2">常見問題</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">聯絡我們</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">隱私政策</a>
                        <a href="#" class="my-nav nav-item nav-link mb-2">服務條款</a>
                    </ul>
                </div>
            </div>
        </div>

        <div class="my-footer-nav footer-nav bg-danger py-4 d-flex justify-content-center">
            <div class="row-col-2 container d-flex justify-content-between px-5">
                <div class="col-8 footer-nav-left d-flex">
                    <i class="bi bi-c-circle me-2" style="font-size: 14px;"></i>
                    <span style="font-size: 14px;"> 2024 Pokemon Company, Inc. 版權所有。
                    </span>
                </div>
                <div class="col-4 footer-nav-right d-flex justify-content-end">
                    <ul class="nav">
                        <a href="#" class="my-nav nav-item ms-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="my-nav nav-item ms-3"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="my-nav nav-item ms-3"><i class="bi bi-instagram"></i></a>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.my-dropdown-after::after {
    display: none;
}

.my-nav {
    color: #FFD700;
    font-weight: bold;
}

footer {
    color: #FFD700;
    font-weight: bold;
}

.my-nav:hover {
    color: var(--bs-link-hover-color);
}
</style>