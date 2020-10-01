import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import { Tab, Checkbox, Menu, Button, Icon,  Select,Pagination,Input } from 'semantic-ui-react'
import TableData from './TableData'

export default class CommonTable extends Component {
    render() {
        return (
            <div>
                <Menu className='ui four column grid' style= {{marginBottom:'20px'}}>
                <Menu.Item className ="one wide column"
                    name='reviews'
                >
                    <Button circular icon='settings' />
                </Menu.Item>
                <Menu.Item
                     className ="one wide column"
                    name='editorials'
                >
                    <Checkbox />
                </Menu.Item>

                <Menu.Item 
                className ="two wide column"
                    name='nametask'
                    
                >  <div style={{paddingRight: '67px '}} >
                   TASK NAME
                   </div>
                   <Icon  name='sort amount down' />
        </Menu.Item>

        <Menu.Item className ="two wide column"
                    name='lob'
                > <div style={{paddingRight:'120px'}}>
                  LOB
                   </div>
                   <Icon  name='sort amount down' />
        </Menu.Item>
        <Menu.Item className ="two wide column"
                    name='subtask'
                > <div style={{paddingRight:'82px'}}>
                SUB TASK
                   </div>
                   <Icon  name='sort amount down' />
        </Menu.Item>
        <Menu.Item  className ="two wide column"
                    name='subtask'
                > <div style={{paddingRight:'55px'}}>
                ASSIGNED TO
                   </div>
                  <Icon  name='sort amount down' />
        </Menu.Item>
        <Menu.Item className ="two wide column"
                    name='subtask'
                > <div style={{paddingRight:'110px'}}>
                STEP
                   </div>
                   <Icon  name='sort amount down' />
        </Menu.Item>
        <Menu.Item className ="four wide column"
                    name='subtask'
                > <div style={{paddingRight:'200px'}}>
                DUE DATE
                   </div>
                   <Icon  name='sort amount down' />
        </Menu.Item>
            </Menu>
            <TableData/>
            </div>
        )
    }
}
