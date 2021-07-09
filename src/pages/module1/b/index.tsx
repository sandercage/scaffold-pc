import React from 'react'
import { Link } from 'umi'

const IndexPage: React.FC = () => {
    return (
        <div>
            <Link to='/module1/b/123'>去子页面</Link>
        </div>
    )
}

export default IndexPage
