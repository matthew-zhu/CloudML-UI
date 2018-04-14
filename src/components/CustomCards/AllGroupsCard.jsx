import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";

import {Card} from 'components/Card/Card.jsx';

import { groupAttributes, groupData } from "variables/Variables.jsx";

class AllGroupsCard extends Component {
    render() {
        return (
            <Card
                title="All Groups"
                ctTableFullWidth
                ctTableResponsive
                content={
                    <Table striped hover>
                        <thead>
                        <tr>
                            {groupAttributes.map((prop, key) => {
                            return <th key={key}>{prop}</th>;
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {groupData.map((prop, key) => {
                            return (
                            <tr key={key}>
                                {prop.map((prop, key) => {
                                return <td key={key}>{prop}</td>;
                                })}
                            </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                }
            />
        )
    }
    
}

export {AllGroupsCard};