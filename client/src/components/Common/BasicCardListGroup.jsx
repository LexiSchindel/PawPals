import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "../../styles/CardListGroup.css"
import * as Utils from '../Utils';
import * as Enum from './Enum';

export default function BasicCardListGroup({
    header = '',
    variant = 'flush',
    className = {},
    listItems = {},
    body
}) {
    return (
        <Card className={className.card}>
            {header && <Card.Header className={className?.header}>{header}</Card.Header>}
            <ListGroup variant={variant}>
                {listItems && Object.keys(listItems).map((key) => {
                        return (
                            <ListGroup.Item key={key} className={className?.item}>
                                <span className={className?.key}>
                                    {key + ': '}
                                </span> 

                                <span className={key === 'availability'
                                    ? Utils.getClassName(Enum.AvailCaller.petDetail, listItems[key])
                                    : className?.value    
                                }>
                                    {listItems[key]}
                                </span>
                            
                            </ListGroup.Item>
                        );
                    })
                }
                <ListGroup.Item>
                    <h5>Description</h5>
                    {body}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}