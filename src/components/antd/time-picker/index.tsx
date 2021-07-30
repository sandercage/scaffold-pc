import type { PickerTimeProps } from 'antd/es/date-picker/generatePicker'
import type { Omit } from 'antd/es/_util/type'
import type { Dayjs } from 'dayjs'
import * as React from 'react'
import DatePicker from '../date-picker'

export type TimePickerProps = Omit<PickerTimeProps<Dayjs>, 'picker'>

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
    return <DatePicker {...props} picker='time' mode={undefined} ref={ref} />
})

TimePicker.displayName = 'TimePicker'

export default TimePicker
