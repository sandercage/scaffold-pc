import { LogoutOutlined } from '@ant-design/icons'
import { Popconfirm, Tooltip } from 'antd'
import React from 'react'
import './index.scss'
/**
 *  @description 登出组件
 *  @author yangchuan
 *  @time 2020-03-31 00:02
 */

const Logout = () => {
    return (
        <div className={`${classPre}-logout  flex-row flex-center`}>
            <Tooltip placement='leftBottom' title='点击退出登录' trigger='hover'>
                <Popconfirm
                    title='您确定要退出么?'
                    placement='rightBottom'
                    okText='确定'
                    cancelText='取消'
                >
                    <LogoutOutlined />
                </Popconfirm>
            </Tooltip>
        </div>
    )
}

export default Logout
