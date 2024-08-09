<script>
import { RouterLink } from 'vue-router';

export default {

};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-danger">
        <div class="row-col-2 container px-5">
            <a class="col navbar-brand" @click="() => { $router.push('/') }"><img src="/src/assets/img/pokemon-logo.png" width="100px"></a>
            <button class="col-2 my-nav navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item my-auto">
                        <a class="my-nav nav-link" href="#">最新消息</a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="my-nav nav-link" href="#">寶可夢百科</a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="my-nav nav-link" href="#">訓練師指南</a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="my-nav nav-link" href="#">商城</a>
                    </li>
                    <li class="nav-item">
                        <a class="my-nav nav-link" @click="() => { $router.push('/step1') }" role="button">
                            <i class="bi bi-cart" style="font-size: 20px;"></i>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="my-nav my-dropdown-after nav-link dropdown-toggle" href="./shopping-login.html"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle" style="font-size: 20px;"></i>
                        </a>
                        <ul id="my-dropdown-menu" class="dropdown-menu">
                            <li><a class="dropdown-item" @click="() => { $router.push('/login') }">登入</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.my-dropdown-after::after {
    display: none;
}

.my-nav {
    color: #FFD700;
    font-weight: bold;
}

.my-nav:hover {
    color: var(--bs-link-hover-color);
}

#my-dropdown-menu {
    left: -130px;
}
</style>
