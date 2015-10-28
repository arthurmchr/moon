const _ = new WeakMap();

class AppManager {

    constructor() {
        _.set(this, {});
    }
}

export default new AppManager();
