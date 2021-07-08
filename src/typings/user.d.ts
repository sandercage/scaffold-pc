declare namespace User {
    /**
     * 用户基本信息
     */
    interface Info {
        /**
         * 用户名
         */
        name: string
        /**
         * 电话号码
         */
        mobile: string
        /**
         * 权限code列表
         */
        permissionCodes: string[]
    }
}
