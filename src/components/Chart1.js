import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {Card, CardBody, CardHeader} from "reactstrap";
import SimpleBar from "simplebar-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function Chart1({item,currentLayout}) {
    const cardBodyMargin = 30 * 2;
    const paddingDrag = 10;
    const sumStatic = cardBodyMargin - paddingDrag;
    const maxRow = 55; // heidht row mamy ustwione na 50px i margines na 5px
    const [maxHeight, setMaxHeight] = useState(0)

    useEffect(() => {
        const myHeader = document.querySelector('.drag-header');
        let headerCard = myHeader.clientHeight || myHeader.offsetHeight;
        // console.log({headerCard})
        if (currentLayout) {
            setMaxHeight((maxRow * (currentLayout.h) - sumStatic - headerCard))
        } else {
            setMaxHeight((maxRow * (item.h)) - sumStatic - headerCard)
        }
    }, [currentLayout, item])

    return (
        <Card style={{height: '100%', position: 'relative',overflowX: 'auto'}}>
            <CardHeader className={'drag-header'}>
                Chart1 - Drag & Drop of Heder
            </CardHeader>
            <CardBody>
                <SimpleBar style={{maxHeight: maxHeight}}>
                <Doughnut data={data} />
                </SimpleBar>
            </CardBody>
        </Card>
    )
}
