import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._baskets = []
        this._basketDish = []
        this._rand = 0
        makeAutoObservable(this)
    }

    setBasket(basket) {
        this._basket = basket
    }
    setRand(Number) {
        this._rand = Number
    }
    setBasketDish(basketDish) {
        this._basketDish = basketDish
    }

    get basket() {
        return this._basket
    }
    get basketDish() {
        return this._basketDish
    }
    get rand() {
        return this._rand
    }
}
