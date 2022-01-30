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
    // console.dir(product);
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
        // console.dir(this.cartItems);
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
    // console.log(this.cartItems);
    if (this.cartItems.length === 0) {
      return true
    } else return  false
  }

  getTotalCount() {
    // ваш код
    let sum = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sum = sum + 1;
    }
    return sum
  }

  getTotalPrice() {
    // ваш код

    let sumPrice = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].count !== 0) {sumPrice = this.cartItems[i].product.price * this.cartItems[i].count;}
        console.log(sumPrice)
    }
    return sumPrice
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
