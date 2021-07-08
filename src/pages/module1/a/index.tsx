import PageContainer from '@/components/system/page-container'
import { SaveOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import './index.scss'

const IndexPage: React.FC = () => {
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
            <div className={`${classPre}-page`}>Page a</div>
        </PageContainer>
    )
}

export default IndexPage
