import type { BasicLayoutProps } from '@ant-design/pro-layout'

/**
 * 系统相关类型
 */
declare global {
    namespace System {
        /**
         * 系统初始化时存储的信息
         */
        interface InitState {
            /**
             * 用户信息
             */
            userInfo: User.Info
            /**
             * 外框相关配置
             */
            layoutProps: Pick<BasicLayoutProps, 'collapsed'>
        }
    }
}
