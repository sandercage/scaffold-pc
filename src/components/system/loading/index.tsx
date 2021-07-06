import { Spin } from 'antd'
import React from 'react'
import './index.scss'

const Loading = () => {
    return (
        <div className={`${classPre}-loading`}>
            <Spin spinning size='large' tip='加载中...' />
        </div>
    )
}

export default Loading
