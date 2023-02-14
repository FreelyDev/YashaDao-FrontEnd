import "./btnDown.scss"
import { useState, useEffect } from 'react';

type TimeNumber = {
    deadLine ? :number,
    endTime ? : number,
    string1 ? : string,
    string2 ? : string,
    setTimeEnd ? (value: boolean): void
};
export default function BtnTimer({ setTimeEnd, deadLine }: TimeNumber) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let myInterval = setInterval(() => {
            const currentDate: any = Date.now()/1000;
            const startDiff = deadLine - currentDate;
            const dayNum = startDiff > 0 ? Math.floor(startDiff  / 60 / 60 / 24) : 0;
            const hourNum = startDiff > 0 ? Math.floor(startDiff  / 60 / 60) % 24 : 0;
            const minNum = startDiff > 0 ? Math.floor(startDiff  / 60) % 60 : 0;
            const secNum = startDiff > 0 ? Math.floor(startDiff ) % 60 : 0;

            if (currentDate < deadLine) {
                setDays(dayNum);
                setHours(hourNum);
                setMinutes(minNum);
                setSeconds(secNum);
            }
            else{
            }
            

        }, 0)
        return () => {
            clearInterval(myInterval);
        };

    }, [deadLine, setTimeEnd]);

    return (
        <div className="btntimer">
            <div className="timerNums">
            <span className="number">
                {days < 10 ? `0${days}` : days} </span>
            <span className="txt">Days </span>
            <span className="number">{hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds} </span>
            </div>
        </div>
    )
}