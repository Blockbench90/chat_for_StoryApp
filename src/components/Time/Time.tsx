import React, {Fragment} from "react";
import ruLocale from "date-fns/locale/ru";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


//Прошедшее время с отаравки сообщения
type TimeProps = {
  date: Date | number
}
const Time: React.FC<TimeProps> = ({ date }): React.ReactElement => (
  <Fragment>
    {console.log(date)}
    {console.log(formatDistanceToNow (date, { addSuffix: true, locale: ruLocale }))}
    {formatDistanceToNow (date, { addSuffix: true, locale: ruLocale })}
  </Fragment>
);


export default Time;
