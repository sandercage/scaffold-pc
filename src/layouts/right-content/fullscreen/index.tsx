import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'
import './index.scss'

interface FullScreenDocumentElement extends HTMLElement {
    webkitRequestFullScreen: () => void
    mozRequestFullScreen: () => void
    msRequestFullscreen: () => void
}

interface FullScreenDocument extends Document {
    webkitCancelFullScreen: () => void
    mozCancelFullScreen: () => void
    msExitFullscreen: () => void
    documentElement: FullScreenDocumentElement
    msFullscreenElement: HTMLElement
    mozFullScreenElement: HTMLElement
    webkitFullscreenElement: HTMLElement
}

declare let document: FullScreenDocument
/**
 *  @description 点击全屏
 *  @author yangchuan
 *  @time 2020-04-27 11:12
 */
const FullScreen = () => {
    const [fullScreen, setFullScreen] = React.useState(false)

    const handleToggleFullScreen = React.useCallback(() => {
        const element = document.documentElement
        // 判断是否已经是全屏
        // 如果是全屏，退出
        if (fullScreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        } // 否则，进入全屏
        else if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen()
        }
        setFullScreen((fs) => {
            return !fs
        })
    }, [fullScreen])

    const isFullscreen = () => {
        return (
            !!document.fullscreenElement ||
            !!document.msFullscreenElement ||
            !!document.mozFullScreenElement ||
            !!document.webkitFullscreenElement ||
            false
        )
    }
    /**
     * 处理页面尺寸变化
     */
    const handleFullScreen = React.useCallback(() => {
        if (!isFullscreen()) {
            setFullScreen(false)
        } else {
            setFullScreen(true)
        }
    }, [])

    React.useEffect(() => {
        window.addEventListener('resize', handleFullScreen, false)
        return () => {
            window.removeEventListener('resize', handleFullScreen, false)
        }
    }, [handleFullScreen])

    return (
        <div
            className={`${classPre}-fullScreen flex-row flex-ai-center`}
            onClick={handleToggleFullScreen}
        >
            <Tooltip
                placement='bottom'
                title={fullScreen ? '点击退出全屏' : '点击全屏'}
                trigger='hover'
            >
                {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            </Tooltip>
        </div>
    )
}

export default FullScreen
