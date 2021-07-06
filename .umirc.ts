import { BasicLayoutProps } from '@ant-design/pro-layout'
import { defineConfig } from 'umi'
import { API_BASE_URL, BASE_HOST, isDev } from './src/configs/env'
import { routes } from './src/configs/route'
import { globalVar, sassVariables } from './src/configs/system'

export default defineConfig({
    title: 'scaffold-pc',
    favicon: 'https://procomponents.ant.design/favicon.ico',
    layout: {
        //https://procomponents.ant.design/components/layout/#prolayout
        name: '运营后台',
        fixedHeader: true,
        siderWidth: 170,
        navTheme: 'dark',
        fixSiderbar: true,
        layout: 'side',
        logo: 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg',
        primaryColor: globalVar.primaryColor,
        iconfontUrl: 'https://at.alicdn.com/t/font_2393128_oo4lgbqz9dq.js',
        disableMobile: true,
        contentWidth: 'Fluid',
    } as BasicLayoutProps,
    routes,
    hash: true,
    webpack5: {},
    mfsu: {},
    dynamicImport: {
        loading: '@/components/system/loading',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    sass: {
        implementation: require('node-sass'),
        prependData: sassVariables,
    },
    theme: {
        '@primary-color': globalVar.primaryColor,
        '@link-color': globalVar.primaryTapColor,
    },
    define: {
        'process.env.currentEnv': process.env.currentEnv,
        ...globalVar,
    },
    proxy: {
        [`${API_BASE_URL}`]: {
            target: `${BASE_HOST}${API_BASE_URL}`,
            changeOrigin: true,
            pathRewrite: {
                [`^${API_BASE_URL}`]: '',
            },
        },
    },
    fastRefresh: {},
    dva: false,
})
