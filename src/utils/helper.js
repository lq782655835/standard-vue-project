import Vue from 'vue'

export const transfer = component => {
    const _constructor = Vue.extend(component)
    return function(propsData = {}) {
        let instance = new _constructor({ propsData }).$mount(document.createElement('div'))

        return new Promise((resolve, reject) => {
            instance.$once('done', data => resolve(data))
            instance.$once('cancel', data => reject(data))
        })
    }
}