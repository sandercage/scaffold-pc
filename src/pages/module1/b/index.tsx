import React from 'react'
import { Link } from 'umi'
import styles from './index.scss'

const IndexPage: React.FC = () => {
    return (
        <div>
            <h1 className={styles.title}>Page b</h1>
            <Link to='/module1/b/123'>去子页面</Link>
        </div>
    )
}

export default IndexPage
