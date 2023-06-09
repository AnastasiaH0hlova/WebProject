import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const { dish } = useContext(Context)
    return (
        <ListGroup className='mt-2'>
            {dish.types.map(type =>
                <ListGroup.Item 
                className='bg-primary bg-gradient'
                style={{cursor: "pointer"}}
                active={type.id === dish.selectedType.id}
                onClick={()=>dish.setSelectedType(type)}
                key={type.id}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
}

);

export default TypeBar;