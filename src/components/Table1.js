import React, {useEffect, useState} from "react";
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import SimpleBar from "simplebar-react";
import _ from "lodash";

export const Table1 = ({item,currentLayout}) => {
    const cardBodyMargin = 30*2;
    const paddingDrag = 10;
    const sumStatic =  cardBodyMargin - paddingDrag;
    const maxRow = 55; // heidht row mamy ustwione na 50px i margines na 5px
    const [maxHeight, setMaxHeight] = useState(0)

    useEffect(()=>{
        const myHeader = document.querySelector('.drag-header');
        const myHeaderTable = document.querySelector('.table-header');
        let headerCard = myHeader.clientHeight || myHeader.offsetHeight;
        let headerTable = myHeaderTable.clientHeight || myHeaderTable.offsetHeight;
        if(currentLayout) {
            setMaxHeight((maxRow * (currentLayout.h) - sumStatic - headerCard - headerTable))
        }else{
            setMaxHeight((maxRow * (item.h)) - sumStatic - headerCard - headerTable)
        }
    },[currentLayout,item])

    return (
        <Card style={{height: '100%', position: 'relative'}}>
            <CardHeader className={'drag-header'}>
                Table1 - Drag & Drop of Heder
            </CardHeader>
            <CardBody>
                <Table style={{height: '100%', position: 'relative'}} className={'table-header'}
                       bordered
                       borderless
                       hover
                       responsive
                       size="sm"
                       striped
                >
                    <thead>
                    <tr>
                        <th className='col-2'>
                            #
                        </th>
                        <th className='col-3'>
                            First Name
                        </th>
                        <th className='col-3'>
                            Last Name
                        </th>
                        <th className='col-4'>
                            Username
                        </th>
                    </tr>
                    </thead>
                </Table>
                <SimpleBar style={{maxHeight: maxHeight}}>
                    <Table
                           bordered
                           borderless
                           hover
                           responsive
                           size="sm"
                           striped
                    >
                        <tbody>
                        {
                            _.range(0, 125).map((lp) => {

                                return (
                                    <tr key={lp}>
                                        <th scope="row" className='col-2'>
                                            {lp}
                                        </th>
                                        <td className='col-3'>
                                            Mark
                                        </td>
                                        <td className='col-3'>
                                            Otto
                                        </td>
                                        <td className='col-4'>
                                            @mdo
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </SimpleBar>
            </CardBody>
        </Card>
    )
}