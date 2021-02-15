import React, { useState } from 'react'
import { Card } from 'semantic-ui-react';

function CardMyOrders({filter}) {

    return (
       <Card fluid>
           <Card.Content>{filter}</Card.Content>
       </Card>
    )
}

export default CardMyOrders