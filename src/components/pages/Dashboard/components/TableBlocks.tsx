import styled from "styled-components/macro";

const Table = styled.table`
    border-spacing: 0;
`;

const Th = styled.th`
    background-color: #374151;
    text-align: start;
    padding: 12px 16px;
    white-space: nowrap;
`;

const Td = styled.td`
    padding: 12px 16px;
    border-bottom: 1px solid #1F2937;
`;

const Tr = styled.tr`
    ${Th}:first-child {
        border-radius: 4px 0 0 4px;
    }

    ${Th}:last-child {
        border-radius: 0 4px 4px 0;
    }
`;

const TableBlocks = { Table, Tr, Th, Td };

export default TableBlocks;
