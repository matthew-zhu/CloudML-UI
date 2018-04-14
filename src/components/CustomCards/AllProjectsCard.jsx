import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";

import {Card} from 'components/Card/Card.jsx';

import { projAttributes, projData } from "variables/Variables.jsx";

class AllProjectsCard extends Component {
    render() {
        return (
            <Card
                title="All Projects"
                ctTableFullWidth
                ctTableResponsive
                content={
                <Table striped hover>
                    <thead>
                    <tr>
                        {projAttributes.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {projData.map((prop, key) => {
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

export {AllProjectsCard};