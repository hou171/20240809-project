<script>
export default {
    name: 'OrderSummary',
    props: {
        shopItems: {
            type: Array,
            required: true,
        },
        shoppingFee: {
            type: Number,
            default: 60,
        }
    },
    computed: {
        totalQuantity() {
            return this.shopItems.reduce((acc, item) => acc + item.quantity, 0);
        },
        subtotal() {
            return this.shopItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        total() {
            return this.subtotal + this.shoppingFee;
        }
    }
}
</script>

<template>
    <div class="col-md-3 d-flex flex-column">
        <div class="d-flex justify-content-between">
            <span>數量：</span>
            <span id="count">{{ totalQuantity }}</span>
        </div>
        <div class="d-flex justify-content-between">
            <span>小計：</span>
            <span id="subtotal">${{ subtotal }}</span>
        </div>
        <div class="d-flex justify-content-between">
            <span>運費：</span>
            <span id="deliveryfee">${{ shoppingFee }}</span>
        </div>
        <div class="d-flex justify-content-between">
            <span>總計：</span>
            <span id="total">${{ total }}</span>
        </div>
    </div>
</template>
