import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width:100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 8px;
    display: flex;
    margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 8px;
    border: 1px solid #f1f6f7;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    backgroud-color: #fff;
    margin: 8px;

    &:focus {
        outline: none;
    }

   &.is-selected {
    background: rgb(211,212,213);
    background: linear-gradient(180deg, rgba(211,212,213,1) 0%, rgba(232,232,232,1) 18%, rgba(255,255,255,1) 100%);
    }
`;
WrapperTab.tabsRole = "Tab";


export const WrapperTabPanel = styled(TabPanel)`
    padding: 4px;
    width: 100%;
    display: none;
    margin-top: -20px;
   
    &.is-selected {
        display: block;
    }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;