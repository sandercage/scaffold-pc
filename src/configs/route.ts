import type { IBestAFSRoute } from '@umijs/plugin-layout'

export const routes: IBestAFSRoute[] = [
    { exact: true, path: '/', redirect: '/module1/a' },
    {
        path: '/module1',
        menu: {
            name: '一级菜单1',
            icon: 'shop',
        },
        routes: [
            {
                path: '/module1/a',
                component: '@/pages/module1/a/index',
                menu: {
                    name: '二级菜单1',
                },
                layout: {
                    hideFooter: true,
                },
                config: {
                    initialLoading: false,
                },
            },
            {
                path: '/module1/b',
                component: '@/pages/module1/b/index',
                menu: {
                    name: '二级菜单2',
                },
                layout: {
                    hideFooter: true,
                },
                config: {
                    initialLoading: false,
                },
            },
            {
                path: '/module1/b/:id',
                component: '@/pages/module1/b/[$id]/index',
                menu: false,
                layout: {
                    hideFooter: true,
                },
                config: {
                    initialLoading: false,
                },
            },
        ],
    },
    {
        path: '/module2',
        menu: {
            name: '一级菜单2',
            icon: 'shop',
        },
        routes: [
            {
                path: '/module2/c',
                component: '@/pages/module2/c/index',
                menu: {
                    name: '二级菜单3',
                },
                layout: {
                    hideFooter: true,
                },
                config: {
                    initialLoading: false,
                },
            },
        ],
    },
    {
        path: '/login',
        component: '@/pages/login/index',
        layout: {
            hideMenu: true,
            hideNav: true,
        },
    },
]
