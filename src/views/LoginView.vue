<template>
    <div class="row vh-100 w-100 mx-0">
        <!-- 左 -->
        <div class="my-img col-6 d-none d-md-block">
            <div class="row d-flex flex-column vh-100" style="background-color: rgba(0, 0, 0, 0.4);">
                <div class="col d-flex flex-column justify-content-center align-items-center px-0 w-100">
                    <h1 class="my-text">寶可夢商城</h1>
                    <p class="my-text">愉快的探索寶可夢世界吧！</p>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center px-0 w-100 column-gap-3 my-5">
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
        </div>
        <!-- 右 -->
        <div class="col col-md-6 m-0 px-0">
            <div class="row d-flex flex-column justify-content-center align-items-center vh-100 mx-0 px-5">
                <div class="col d-flex flex-column justify-content-center align-items-center">
                    <div class="my-logo my-1"></div>
                    <div class="d-flex justify-content-center my-1">
                        <a href="#"><i class="bi bi-facebook mx-2"></i></a>
                        <a href="#"><i class="bi bi-google mx-2"></i></a>
                    </div>
                    <div class="text d-flex justify-content-center my-1">或使用你的電子郵件</div>
                    <form action="./shopping.html" class="d-flex flex-column justify-content-center my-1 w-100">
                        <label for="email"></label>
                        <input type="email" id="email" name="email" class="my-3" placeholder="電子郵件" required>
                        <label for="password"></label>
                        <input type="password" id="password" name="password" class="my-3" placeholder="密碼" required>
                        <a href="#" class="text d-flex justify-content-end my-1">忘記密碼?</a>
                        <button type="submit" class="my-btn w-100 border border-0">登入</button>
                    </form>
                </div>
                <div
                    class="col-3 d-flex justify-content-center align-content-center px-0 w-100 column-gap-3 d-block d-md-none my-5">
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    color: #333333;
}

.my-img {
    background-image: url(../assets/img/poke-ball.gif);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.my-text {
    color: #FFD700;
    font-weight: bold;
}

.my-logo {
    width: 200px;
    height: 100px;
    background-image: url(../assets/img/pokemon-logo.png);
    background-position: center;
    background-size: 95%;
    background-repeat: no-repeat;
}

.my-btn {
    width: 95%;
    background-color: #FF9D96;
}
</style>