class ModelBase {
    constructor(
        id, 
        active = true, 
        updatedAt = undefined, 
        createdAt = undefined
    ) {
        this._id = parseInt(id);
        this._active = active;
        this._updatedAt = updatedAt || Date.now();
        this._createdAt = createdAt || Date.now();
    }

    get id() {
        return this._id;
    }

    get updatedAt() {
        return this._updatedAt;
    }

    get createdAt() {
        return this._createdAt;
    }

    refresh() {
        this._updatedAt = Date.now();
    }

    isActive() {
        return this._active;
    }

    enable() {
        this._active = true;
    }

    disable() {
        this._active = false;
    }
}

export { ModelBase };
