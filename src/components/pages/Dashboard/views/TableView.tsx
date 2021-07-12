import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as MedFlytLogo } from "../../../../assets/logo.svg";
import { ReactComponent as RefreshIcon } from "../../../../assets/refresh.svg";
import Center from "../../../shared/Center";
import Row from "../../../shared/Row";
import Button from "../components/Button";
import None from "../components/None";
import { PrimaryText } from "../components/PrimaryText";
import RefreshIndicator from "../components/RefreshIndicator";
import TableBlocks from "../components/TableBlocks";
import { Report } from "../Dashboard";

interface Props {
    report: Report;
    isRefreshing: boolean;
}

const Header = styled(Center)`
    height: auto;
    gap: 32px;
    margin-bottom: 48px;
`;

const StyledTableView = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 128px;
    margin: auto;
    height: 100%;
    width: 1300px;
    max-width: 100%;
    gap: 16px;
`;

const { Table, Tr, Th, Td } = TableBlocks;

const TableView = (props: Props) => {
    return (
        <StyledTableView>
            <RefreshIndicator isRefreshing={props.isRefreshing} />
            <Header>
                <MedFlytLogo />
                <PrimaryText>Year {props.report.year} - caregivers report</PrimaryText>
            </Header>
            <Row justifyContent="flex-end">
                <Button>
                    <RefreshIcon />
                    <span>Refresh</span>
                </Button>
            </Row>
            <Table>
                <thead>
                    <Tr>
                        <Th>Caregiver name</Th>
                        <Th>Patients</Th>
                    </Tr>
                </thead>
                <tbody>
                    {props.report.caregivers.map((caregiver, idx) => (
                        <Tr key={idx}>
                            <Td>{caregiver.name}</Td>
                            <Td>
                                {caregiver.patients.length > 0 ? (
                                    caregiver.patients
                                ) : (
                                    <None />
                                )}
                            </Td>
                        </Tr>
                    ))}
                </tbody>
                {props.report.caregivers.length === 0 ? (
                    <tbody>
                        <tr>
                            <td colSpan={2}>No results!</td>
                        </tr>
                    </tbody>
                ) : null}
            </Table>
        </StyledTableView>
    );
};

export default TableView;
