import { ModelBase } from'./model_base.js';

class Category extends ModelBase {
    constructor(
        id,
        name,
        active = true,
        createdAt = undefined,
        updatedAt = undefined
    ) {
        super(id, active, updatedAt, createdAt);

        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(aName) {
        this._name = aName;
    }

    static from(id, name, active, createdAt, updatedAt) {
        return new Category(id, name, active, createdAt, updatedAt);
    }
}

export { Category };
