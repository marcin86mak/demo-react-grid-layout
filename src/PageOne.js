import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";
import {Table1} from "./components/Table1";
import {Form1} from "./components/Form1";
import {Chart1} from "./components/Chart1";
import {Chart2} from "./components/Chart2";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const dataLayout = {
        lg:[
            {
                x: 0,
                y: 1,
                w: 8,
                h: 8,
                i: 'Tabel1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 8,
                y: 1,
                w: 6,
                h: 8,
                i: 'Chart1',
                static: false,
                minH:8,
                minW:6,
                maxW:24,
                maxH:30,
            },
            {
                x: 14,
                y: 1,
                w: 10,
                h: 19,
                i: 'Form1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 9,
                w: 14,
                h: 11,
                i: 'Chart2',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            }
        ],
        md:[
            {
                x: 0,
                y: 1,
                w: 10,
                h: 8,
                i: 'Tabel1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 10,
                y: 1,
                w: 10,
                h: 8,
                i: 'Chart1',
                static: false,
                minH:8,
                minW:6,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 8,
                w: 20,
                h: 12,
                i: 'Form1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 20,
                w: 20,
                h: 8,
                i: 'Chart2',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            }
        ],
        sm:[
            {
                x: 0,
                y: 1,
                w: 6,
                h: 8,
                i: 'Tabel1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 6,
                y: 1,
                w: 10,
                h: 8,
                i: 'Chart1',
                static: false,
                minH:8,
                minW:6,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 8,
                w: 16,
                h: 12,
                i: 'Form1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 20,
                w: 16,
                h: 8,
                i: 'Chart2',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            }
        ],
        xs:[
            {
                x: 0,
                y: 1,
                w: 12,
                h: 8,
                i: 'Tabel1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 8,
                w: 12,
                h: 8,
                i: 'Chart1',
                static: false,
                minH:8,
                minW:6,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 16,
                w: 12,
                h: 12,
                i: 'Form1',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            },
            {
                x: 0,
                y: 36,
                w: 12,
                h: 8,
                i: 'Chart2',
                static: false,
                minH:6,
                minW:8,
                maxW:24,
                maxH:30,
            }
        ]
    }


export const PageOne = () => {
    const [currentLayout,setCurrentLayout] = useState([])
    const [layouts,setLayouts] = useState(dataLayout)
    const [mounted,setMounted] = useState(false)
    const [currentBreakpoint,setCurrentBreakpoint] = useState('lg')
    const [compactType,setCompactType] = useState('vertical')

    const cols = {
        lg: 24, md: 20, sm: 16, xs: 12, xxs: 8
    }
    
    const onCompactTypeChange = () => {
        const newCompactType =
            compactType === "horizontal"
                ? "vertical"
                : compactType === "vertical"
                    ? null
                    : "horizontal";
        setCompactType(newCompactType);
    }

    const onBreakpointChange = (breakpoint) => {
        setCurrentBreakpoint(breakpoint)
    }

    const onLayoutChange = (layout, layouts) => {
        setCurrentLayout(layout)
    }

    const SwitchContent = ({item,currentLayout}) => {
      switch (item.i){
          case 'Tabel1':
              return <Table1 item={item} currentLayout={currentLayout.filter(x => x.i === 'Tabel1')[0]}/>
          case 'Form1':
              return <Form1 item={item} currentLayout={currentLayout.filter(x => x.i === 'Form1')[0]}/>
          case 'Chart1':
              return <Chart1 item={item} currentLayout={currentLayout.filter(x => x.i === 'Chart1')[0]}/>
          case 'Chart2':
              return <Chart2 item={item} currentLayout={currentLayout.filter(x => x.i === 'Chart2')[0]}/>
          default:
              return 'None'
      }
    }

    useEffect(()=>{
        setMounted(true);
    }, [])

    const StringifyLayout = ({layout}) => {
        return layout.map((l) =>{
            return (
                <div className="layoutItem" key={l.i}>
                    <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
                </div>
            );
        });
    }

    return (
        <div className='container-fluid'>
            <Button onClick={onCompactTypeChange}>
                Change Compaction Type
            </Button><br/>
            <div className="layoutJSON">
                Compaction type:{" "}{compactType || "No Compaction"}<br/>
                Current Breakpoint: {currentBreakpoint} ({cols[currentBreakpoint]}{" "}columns)<br/>
                Displayed as <code>[x, y, w, h]</code>:
                <div className="columns">
                    <StringifyLayout layout={currentLayout}/>
                </div>
            </div>
            <div className='mt-3'>
                {mounted?(<ResponsiveReactGridLayout
                    className={'grid-layout'}
                    draggableHandle={'.drag-header'}
                    rowHeight={50}
                    containerPadding={[5,5]}
                    margin={[5,5]}
                    cols={cols}
                    layouts={layouts}
                    onBreakpointChange={onBreakpointChange}
                    onLayoutChange={onLayoutChange}
                    // WidthProvider option
                    measureBeforeMount={false}
                    // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                    // and set `measureBeforeMount={true}`.
                    useCSSTransforms={mounted}
                    compactType={compactType}
                    preventCollision={!compactType}
                >
                    {
                        layouts.lg.map((item) =>{
                            return (<div key={item.i} className={item.static ? "static" : ""}>
                                <SwitchContent item={item} currentLayout={currentLayout}/>
                            </div>)
                        })
                    }
                </ResponsiveReactGridLayout>):null}
            </div>
        </div>
    )
}