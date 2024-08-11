<script>
export default {
    emits: ['calc'],
    data() {
        return {
            count: 1,
        };
    },
    watch: {
        count: {
            handler(newValue) {
                this.$emit('calc', newValue);
            },
        },
    },
    methods: {
        minus() {
            if (this.count > 1) {
                this.count--;
            }
        },
        plus() {
            this.count++;
        }
    },
}
</script>

<template>
    <div class="count-btn-container">
        <button type="button" class="count-btn minusBtn" @click="minus">-</button>
        <div class="count">{{ count }}</div>
        <button type="button" class="count-btn plusBtn" @click="plus">+</button>
    </div>
</template>

<style scoped>
.count-btn-container {
    display: flex;
}

.count-btn-container .count-btn {
    width: 30px;
    height: 29px;
    border: none;
}

.count {
    width: 30px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
}
</style>