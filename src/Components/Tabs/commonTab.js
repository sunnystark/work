import { Tab, Checkbox, Menu, Button, Icon,Select,Pagination,Input } from 'semantic-ui-react'
import React from 'react'
import styled from 'styled-components';
import './tabStyle.css';
import {ClearAllBtn} from '../StyledComponents/styledComponent'
import CommonTable from '../TableCommon/commonTable';

// const ClearAllBtn = styled(Button)`
//        border: 1px grey;
//     background-color: white;
//      border-radius: '4px';
// `;

const Options = [
    { key: '1', value: 1, text: '1' },
    { key: '2', value: 2, text: '2' },
    { key: '3', value: 3, text: '3' },
  ]
const panes = [
    {
        menuItem: 'UNASSIGNED TASKS', render: () => <><Tab.Pane>
            <Menu className="borderless" >
                <Menu.Item className="borderless"

                    name='editorials'
                >
                    <Checkbox toggle /> &nbsp; Multi Sort
        </Menu.Item>

                <Menu.Item className="borderless">
                    <ClearAllBtn  icon>
                        <Icon name='close' />
                        <span>Clear All Filters</span>
                    </ClearAllBtn>
                </Menu.Item>

                <Menu.Item
                   className="borderless"
                >
                   Result 1 to 5 of 40
                  
        </Menu.Item>
        <Menu.Item className="borderless">
           <div style ={{paddingRight:'10px'}}>Items per page </div>
           <Select style ={{ minWidth:'40px'}} placeholder='1' options={Options} />
        </Menu.Item>
        <Menu.Item className="borderless">
        <Pagination
    defaultActivePage={5}
    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
    prevItem={{ content: <Icon name='angle left' />, icon: true }}
    nextItem={{ content: <Icon name='angle right' />, icon: true }}
    totalPages={10}
  />
        </Menu.Item>
        <Menu.Item>
            <div style ={{paddingRight:'10px'}} >Go to Page</div>
            <Input placeholder='1' style ={{width:'50px'}} />
            <div style ={{padding:'0px 20px'}} > of 10</div>
            <div style= {{color:'blue'}}>Go></div>
        </Menu.Item>
            </Menu>
        </Tab.Pane>
        <CommonTable/>
        </>
    },
    { menuItem: 'ASSIGNED TASKS', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'ALL TASKS', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabView = () => <Tab panes={panes} />

export default TabView