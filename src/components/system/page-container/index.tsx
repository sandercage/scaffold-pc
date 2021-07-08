import type { PageContainerProps } from '@ant-design/pro-layout'
import { PageContainer } from '@ant-design/pro-layout'
import type { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import React from 'react'
import { Link } from 'umi'
import './index.scss'

const itemRender = (route: Route, params: any, routes: Route[]) => {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
        <span>{route.breadcrumbName}</span>
    ) : (
        <Link to={route.path}>{route.breadcrumbName}</Link>
    )
}

const PageContainerWrapper: React.FC<PageContainerProps> = (props) => {
    const { children, className = '' } = props

    const withItemRenderBreadcrumbContainerProps: PageContainerProps = React.useMemo(() => {
        const { header } = props
        if (header) {
            const { breadcrumb } = header
            return {
                ...props,
                header: {
                    ...header,
                    breadcrumb: {
                        ...breadcrumb,
                        itemRender,
                    },
                },
            }
        }
        return props
    }, [props])

    return (
        <PageContainer
            fixedHeader
            {...withItemRenderBreadcrumbContainerProps}
            className={className}
        >
            {children}
        </PageContainer>
    )
}

export default PageContainerWrapper
