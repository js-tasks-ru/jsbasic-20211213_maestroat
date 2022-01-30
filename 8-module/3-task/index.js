export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

  }

  addProduct(product) {
    // ваш код

    let cartItem = {
      product,
      count: 1
    }

    if (product.length !== 0 || product !== null || product !== undefined) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].product.id === product.id) {
        this.cartItems[i].count += 1;
        this.onProductUpdate(this.cartItems[i]);
          }
        }  
        this.cartItems.push(cartItem);      
            this.onProductUpdate(cartItem);
        }
        console.log(this.cartItems);
        // let results = this.cartItems.filter(item => item === this.product.id);
        // console.log(results);
        // if (results.length === 0) {
        //   this.cartItems.push(productArr);
        //     console.log(this.cartItems);
        //     this.onProductUpdate(productArr);}
        //     else 

  }

  updateProductCount(productId, amount) {
    // ваш код
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === productId) {
        this.cartItems[i].count += amount;
        if (this.cartItems[i].count === 0) {
          this.cartItems[i].remove();
        } else
        this.onProductUpdate(this.cartItems[i]);
      }
    }
   
  }

  isEmpty() {
    // ваш код
    if (this.cartIcon.length === 0) {
      return true
    } else return  false
  }

  getTotalCount() {
    // ваш код
    let sum = 0;
    for (let i = 0; i < this.cartIcon.length; i++) {
      if ("product" in this.cartIcon[i]) {
        if (this.cartIcon[i].count === 0) {sum = sum + 1;}
        else {sum = sum + this.cartIcon[i].count;}
      }
    }
    return sum
  }

  getTotalPrice() {
    // ваш код
    let sumPrice = 0;
    for (let i = 0; i < this.cartIcon.length; i++) {
      if (this.cartIcon[i].count === 0) {sumPrice += this.cartIcon[i].product.price;}
      else {sumPrice = this.cartIcon[i].product.price * this.cartIcon[i].count;}
        
    }
    return sumPrice
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
