import { makeAutoObservable } from "mobx";

export default class DishStore {
    constructor() {
        this._types = []
        this._dishes = []
        this._ing = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setDishes(dishes) {
        this._dishes = dishes
    }
    setIng(ing) {
        this._ing = ing
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }


    get types() {
        return this._types
    }
    get dishes() {
        return this._dishes
    }
    get ing() {
        return this._ing
    }
    get selectedType() {
        return this._selectedType
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

}