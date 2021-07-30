import CusDatePicker from '@/components/antd/date-picker'
import CusTimePicker from '@/components/antd/time-picker'
import React from 'react'
import dayjs from 'dayjs'

const { MonthPicker, RangePicker, WeekPicker } = CusDatePicker

const IndexPage: React.FC = () => {
    return (
        <div className='App'>
            <br />
            <br />
            <CusDatePicker defaultValue={dayjs()} />
            <MonthPicker />
            <RangePicker />
            <WeekPicker />
            <CusTimePicker />
        </div>
    )
}

export default IndexPage
