
import CalendarDate from './CalendarDate'
function CalendarWeek({weekData}){
    return(
        <div className='calendar-week'>
            {weekData.map((date)=>(
                <CalendarDate key={date.whatDate} dateData={date.whatDate}></CalendarDate>
            ))}
        </div>
    )
}

export default CalendarWeek;