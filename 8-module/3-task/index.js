export default class Cart {
  cartItems = []; // [product: {...}, count: N]
  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }
  addProduct(product) {
    if (!product) {
      return;
    }
    let cartItemForProduct;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === product.id) {
        cartItemForProduct = this.cartItems[i];
      }
    }
    if (cartItemForProduct) {
      cartItemForProduct.count++;
    } else {
      cartItemForProduct = {
        count: 1,
        product: product,
      }
      this.cartItems.push(cartItemForProduct);
    }
    this.onProductUpdate(cartItemForProduct);
  }
  updateProductCount(productId, amount) {
    // ваш код
    let cartItemForProduct;
    let cartItemIndex;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === productId) {
        cartItemForProduct = this.cartItems[i];
        cartItemIndex = i;
      }
    }
    cartItemForProduct.count += amount;
    if (cartItemForProduct.count === 0) {
      this.cartItems.splice(cartItemIndex, 1);
    }
    this.onProductUpdate(cartItemForProduct);
  }
  isEmpty() {
    // ваш код
    // console.log(this.cartItems);
    if (this.cartItems.length === 0) {
      return true
    } else return  false
  }
  getTotalCount() {
    // ваш код
    let sum = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sum = sum + this.cartItems[i].count;
    }
    return sum
  }
  getTotalPrice() {
    let sumPrice = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sumPrice += this.cartItems[i].product.price * this.cartItems[i].count;
    }
    return sumPrice;
  }
  onProductUpdate(cartItem) {
    // реализуем в следующей задаче
    this.cartIcon.update(this);
  }
}
