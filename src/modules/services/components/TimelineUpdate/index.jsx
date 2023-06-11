import React, { useEffect, useState } from 'react'
import { SmileOutlined, ClockCircleOutlined, CheckCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { STATES } from '../../../../utils/enums';

export const TimelineUpdate = ({ updates, data }) => {
    console.log("🚀 ~ file: index.jsx:6 ~ TimelineUpdate ~ updates:", updates)
    const [items, setItems] = useState(false)

    const itemsObj = {
        1: {
            color: 'green', //Requerido
            dot: <SmileOutlined />,
        },
        2: {
            color: '#00CCFF', //Asignado
            dot: <NotificationOutlined />,
        },
        3: {
            color: 'red', //Recogido
            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        },
        4: {
            color: 'darkgray', //Entregado
            dot: <CheckCircleOutlined />,
        },
    }

    const createItem = () => {
        const items = updates.map(update => {
            const item = itemsObj[update.state]
            item.children =
                STATES[update.state] === "Requerido"
                    ? `El servicio fue solicitado`
                    : STATES[update.state] === "Asignado"
                        ? `El servicio fue tomado por: ${data.messenger}`
                        : update.description
            return item
        })
        console.log("🚀 ~ file: index.jsx:34 ~ createItem ~ items:", items)
        setItems(items)
    }

    useEffect(() => {
        createItem()
    }, [])


    return (
        <Timeline
            items={items}
        />
    )
}
