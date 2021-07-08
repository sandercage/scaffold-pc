import React from 'react'
import FullScreen from './fullscreen'
import Logout from './logout'
import UserInfoPanel from './user-info-panel'

export interface NavigationRightProps {
    userInfo: User.Info
}

/**
 *  @description 顶部导航栏右边
 *  @author yangchuan
 *  @time 2021-03-01 15:26
 */
const LayoutRightContent: React.FC<NavigationRightProps> = ({ userInfo }) => {
    console.log('userInfo', userInfo)
    return (
        <div className={`${classPre}-navigation-right  flex-row`}>
            <UserInfoPanel userInfo={userInfo || {}} />
            <FullScreen />
            <Logout />
        </div>
    )
}

export default React.memo(LayoutRightContent)
