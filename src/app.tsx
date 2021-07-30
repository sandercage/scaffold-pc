import RightContent from '@/layouts/right-content'
import type { BasicLayoutProps } from '@ant-design/pro-layout'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import React from 'react'
import './app.scss'

dayjs.locale('zh-cn')

export const layout = ({ initialState }: { initialState: System.InitState }): BasicLayoutProps => {
    return {
        rightContentRender: () => <RightContent userInfo={initialState.userInfo} />
    }
}

export const getInitialState = async (): Promise<System.InitState> => {
    return {
        userInfo: {
            name: 'sandercage',
            mobile: '18888888888',
            permissionCodes: []
        },
        layoutProps: {
            collapsed: false
        }
    }
}
