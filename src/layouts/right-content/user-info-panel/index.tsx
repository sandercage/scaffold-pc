import React from 'react'
import './index.scss'

interface UserInfoPanelProps {
    userInfo: User.Info
}

/**
 *  @description 用户信息展示栏
 *  @author yangchuan
 *  @time 2020-04-10 15:23
 */
const UserInfoPanel: React.FC<UserInfoPanelProps> = ({ userInfo }) => {
    return (
        <div className={`${classPre}-user-info-panel flex-ai-center`}>
            <div className='item name'>{userInfo.name}</div>
            <div className='item name'>{userInfo.mobile}</div>
        </div>
    )
}

export default UserInfoPanel
