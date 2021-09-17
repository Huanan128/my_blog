// 是否外网测试，false 时内网测试
// const isPub = true

function getProduction() {
    let domain = window.location.host
    let production
    switch (domain) {
        case 'customer-admin.babybus.com':
            production = 'master'
            break;
        case 'customer-admin.sim.babybus.com':
            production = 'sim'
            break;
        case 'customer-admin.beta.babybus.com':
            production = 'beta'
            break;
        case 'customer-admin.dev.babybus.com/':
            production = 'dev'
            break;
        default:
            production = 'dev'

    }

    return production
}

/**
 * @module 存放域名环境等配置
 */
export default {
    dev: {
        // 内网测试地址
        common: 'http://127.0.0.1:3000',
        source: 'http://127.0.0.1:3000/', // 资源
    },
    master: {
        common: 'https://customer-admin.babybus.com/api/', // 业务相关
        source: 'https://baseres.babybus.com/', // 资源
        
    },
    beta: {
        common: 'https://customer-admin.beta.babybus.com/api/', // 业务相关
        source: 'http://beta.pic.baby-bus.com/', // 资源
    },
    sim:{
        common: 'https://customer-admin.sim.babybus.com/api/', // 业务相关
        source: 'http://beta.pic.baby-bus.com/', // 资源
    },
    /**
     * @method 获取当前环境
     * @returns {String} beta,master
     */
    getProduction,

    /**
     * @method 获取域名
     * @param {*} key  接口key，默认业务接口
     */
    getDomain: function (key = 'common') {
        let baseUrl = this[this.getProduction()] ? (this[this.getProduction()][key] ||this[this.getProduction()]['common']  ) : this.dev[key]
        // let baseUrl = this.production == 'pro' ? this.pro[key] : this.production == 'test' ? this.test[key] : this.dev[key];
        return baseUrl;
    },
    /**
     * @method 获取接口域名

     */
    getApiDomain() {
        return this.getDomain('common')
    },


    /**
     * @method 获取资源域名

     */
    getSourceDomain() {
        return this.getDomain('source')
    },
    MASTER_LINK:'https://customer-admin.babybus.com',
    BETA_LINK:'http://customer-admin.beta.babybus.com'
}
