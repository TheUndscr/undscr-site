import { useEffect, useState } from "react";

const START_DATE = new Date("10/21/2023");

function Countee(props: {type: string, val: number | string}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p className="text-5xl font-bold">{props.val}</p>
                <p>{props.type}</p>
            </div>
        </>
    )
}

export default function Counter() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    function setTimer() {
        const DATE_NOW = Date.now() - START_DATE.getTime() - 3600000;

        setSeconds(DATE_NOW / 1000);
        setMinutes(seconds / 60);
        setHours(minutes / 60);
        setDays(hours / 24);
    }

    useEffect(() => {
        setTimeout(() => {
            setTimer();
        }, 10)
    })

    return (
        <>
            <div className="flex gap-6 md:gap-5">
                <Countee type="Days" val={Math.floor(days)} />
                <Countee type="Hours" val={Math.floor(hours) % 24} />
                <Countee type="Minutes" val={Math.floor(minutes) % 60} />
                <Countee type="Seconds" val={Math.floor(seconds) % 60} />
            </div>
        </>
    )
}