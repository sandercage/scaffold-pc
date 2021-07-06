import type { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import generateCalendar from 'antd/es/calendar/generateCalendar'
import 'antd/es/calendar/style'

// @ts-ignore
const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig)

export default Calendar
