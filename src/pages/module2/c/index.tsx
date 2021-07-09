import PageContainer from '@/components/system/page-container'
import useUpdateState from '@/hooks/useUpdateState'
import { SaveOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

interface PageState {
    title: string
    age: number
}

export default () => {
    const [{ title, age }, updateState] = useUpdateState<PageState>({
        title: 'this is title',
        age: 18,
    })

    const handleReadState = React.useCallback(() => {
        console.log('handleReadState age', age)
    }, [age])
    /**
     *  按函数更新状态
     */
    const handleIncAge = React.useCallback(() => {
        updateState(
            (prevState) => {
                return { age: ++prevState.age }
            },
            (newState) => {
                console.log('newState', newState)
                handleReadState()
            },
        )
    }, [])

    /**
     *  按常量更新状态
     */
    const handleSetAge = React.useCallback(() => {
        updateState({ age: 14 }, handleReadState)
    }, [])

    const pageContainerWrapperProps = React.useMemo(() => {
        return {
            header: {
                className: `${classPre}-cbl-report-page-header`,
                title: '页面标题',
                breadcrumb: {},
            },
            footer: [
                <Button key='submit' type='primary' shape='round' icon={<SaveOutlined />}>
                    保存
                </Button>,
            ],
        }
    }, [])

    return (
        <PageContainer {...pageContainerWrapperProps}>
            <div className={`${classPre}-page`}>
                <p>title: {title}</p>
                <p>age: {age}</p>
                <Button onClick={handleIncAge}>增加age</Button>
                <Button onClick={handleSetAge}>set age to 14</Button>
            </div>
        </PageContainer>
    )
}
