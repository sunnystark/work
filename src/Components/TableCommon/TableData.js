import React, { Component } from 'react'
import { Tab, Checkbox, Menu, Button, Icon, Select, Input,Dropdown } from 'semantic-ui-react'
// import './style.css'
const tagOptions = [
    {
      key: 'Important',
      text: 'Important',
      value: 'Important',
      label: { color: 'red', empty: true, circular: true },
    },
    {
      key: 'Announcement',
      text: 'Announcement',
      value: 'Announcement',
      label: { color: 'blue', empty: true, circular: true },
    },
    {
      key: 'Cannot Fix',
      text: 'Cannot Fix',
      value: 'Cannot Fix',
      label: { color: 'black', empty: true, circular: true },
    }];
export default class TableData extends Component {

    trigger =()=>{
        return(
            <div style={{ height: '30px',borderWidth:'3px',borderColor:'grey',  borderRadius: '15px', backgroundColor: 'white', color: 'grey', padding: '4px', textAlign: 'center', }}>
           <span style={{width:'24px',height:'24px' ,borderRadius:'12px',backgroundColor:'grey',color:'white'}} >U</span>
           <span> UNASSIGNED</span>
   </div>
        )
    };
    render() {
        return (
            <div>
                <Menu className='ui four column grid borderless' >
                    <div className="one wide column"
                    >
                    </div>
                    <Menu.Item
                        className="one wide column"
                        name='name'
                    >
                        <Checkbox />
                    </Menu.Item>

                    <Menu.Item
                        className="two wide column colRow" 
                        name='nametask'
                    > <div style={{ marginRight: '70px', color: 'blue', fontWeight: 'bold', fontSize: '14px', borderBottom: '1px dotted blue' }}>
                            Task name
                   </div>
                    </Menu.Item>

                    <Menu.Item className="two wide column"
                        name='lob'
                    > <div style={{ width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: '#1a1aaf', color: 'white', padding: '10px', textAlign: 'center', }}>
                            MEDICARE
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column" style={{ float: 'center' }}
                        name='subtask'
                    >
                        <div >
                            <Icon disabled name='tags' />
                            3
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    >
                       <div style={{ border: '1px solid #D3D3D3', aligin: 'center', paddingLeft: '5px', paddingRight: '5px', borderRadius: '15px'}}>
                        <Icon circular name='magnet' /> <Dropdown text='UNASSIGNED' >
                            <Dropdown.Menu>
                                <Input icon='search' iconPosition='left' className='search' />
                                <Dropdown.Divider />
                                <Dropdown.Header icon='tags' content='Tag Label' />
                                <Dropdown.Menu scrolling>
                                    {tagOptions.map((option) => (
                                        <Dropdown.Item key={option.value} {...option} />
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    > <div style={{ textAlign: 'center' }}>
                            In Review
                   </div>
                    </Menu.Item>
                    <Menu.Item className="four wide column"
                        name='subtask'
                    >
                        <div style={{ position: 'absolute', zIndex: 1, width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: 'white', color: 'black', padding: '10px', textAlign: 'center', }}>
                            09/04/2020 @ 9:00 AM
                            <span style={{ float: "right" }}><Icon disabled name='angle right' /></span>
                        </div>

                        <div style={{ position: 'absolute', opacity: 0.4, zIndex: 2, width: '40%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: '#ff00f7', color: 'white', padding: '10px', textAlign: 'center', }}></div>
                    </Menu.Item>
                </Menu>
                <Menu className='ui four column grid borderless' >
                    <div className="one wide column"
                    >
                    </div>
                    <Menu.Item
                        className="one wide column"
                        name='name'
                    >
                        <Checkbox />
                    </Menu.Item>

                    <Menu.Item
                        className="two wide column"
                        name='nametask'
                    > <div style={{ marginRight: '70px', color: 'blue', fontWeight: 'bold', fontSize: '14px', borderBottom: '1px dotted blue' }}>
                            Task name
                   </div>
                    </Menu.Item>

                    <Menu.Item className="two wide column"
                        name='lob'
                    > <div style={{ width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: '#9b9b9f', color: 'white', padding: '10px', textAlign: 'center', }}>
                            COMMERCIAL
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column" style={{ float: 'center' }}
                        name='subtask'
                    >
                        <div >
                            <Icon disabled name='tags' />
                            3
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    >
                        <div style={{ border: '1px solid #D3D3D3', aligin: 'center', paddingLeft: '5px', paddingRight: '5px', borderRadius: '15px'}}>
                        <Icon circular name='magnet' /> <Dropdown text='UNASSIGNED' >
                            <Dropdown.Menu>
                                <Input icon='search' iconPosition='left' className='search' />
                                <Dropdown.Divider />
                                <Dropdown.Header icon='tags' content='Tag Label' />
                                <Dropdown.Menu scrolling>
                                    {tagOptions.map((option) => (
                                        <Dropdown.Item key={option.value} {...option} />
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    > <div style={{ textAlign: 'center' }}>
                            In Review
                   </div>
                    </Menu.Item>
                    <Menu.Item className="four wide column"
                        name='subtask'
                    >
                        <div style={{ position: 'absolute', zIndex: 1, width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: 'white', color: 'black', padding: '10px', textAlign: 'center', }}>
                            09/04/2020 @ 9:00 AM
                            <span style={{ float: "right" }}><Icon disabled name='angle right' /></span>
                        </div>

                        <div style={{ position: 'absolute', opacity: 0.4, zIndex: 2, width: '28%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: '#e1a04fc4', color: 'white', padding: '10px', textAlign: 'center', }}></div>
                    </Menu.Item>
                </Menu>
                <Menu className='ui four column grid borderless' >
                    <div className="one wide column"
                    >
                    </div>
                    <Menu.Item
                        className="one wide column"
                        name='name'
                    >
                        <Checkbox />
                    </Menu.Item>

                    <Menu.Item
                        className="two wide column"
                        name='nametask'
                    > <div style={{ marginRight: '70px', color: 'blue', fontWeight: 'bold', fontSize: '14px', borderBottom: '1px dotted blue' }}>
                            Task name
                   </div>
                    </Menu.Item>

                    <Menu.Item className="two wide column"
                        name='lob'
                    > <div style={{ width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: 'ORANGE', color: 'white', padding: '10px', textAlign: 'center', }}>
                            MEDICARE
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column" style={{ float: 'center' }}
                        name='subtask'
                    >
                        <div >
                            <Icon disabled name='tags' />
                            3
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    >
                        <div style={{ border: '1px solid #D3D3D3', aligin: 'center', paddingLeft: '5px', paddingRight: '5px', borderRadius: '15px'}}>
                        <Icon circular name='magnet' /> <Dropdown text='UNASSIGNED' >
                            <Dropdown.Menu>
                                <Input icon='search' iconPosition='left' className='search' />
                                <Dropdown.Divider />
                                <Dropdown.Header icon='tags' content='Tag Label' />
                                <Dropdown.Menu scrolling>
                                    {tagOptions.map((option) => (
                                        <Dropdown.Item key={option.value} {...option} />
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    > <div style={{ textAlign: 'center' }}>
                            In Review
                   </div>
                    </Menu.Item>
                    <Menu.Item className="four wide column"
                        name='subtask'
                    >
                        <div style={{ position: 'absolute', zIndex: 1, width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: 'white', color: 'black', padding: '10px', textAlign: 'center', }}>
                            09/04/2020 @ 9:00 AM
                            <span style={{ float: "right" }}><Icon disabled name='angle right' /></span>
                        </div>

                        <div style={{ position: 'absolute', opacity: 0.4, zIndex: 2, width: '40%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: 'blue', color: 'white', padding: '10px', textAlign: 'center', }}></div>
                    </Menu.Item>
                </Menu>
                <Menu className='ui four column grid borderless' >
                    <div className="one wide column"
                    >
                    </div>
                    <Menu.Item
                        className="one wide column"
                        name='name'
                    >
                        <Checkbox />
                    </Menu.Item>

                    <Menu.Item
                        className="two wide column"
                        name='nametask'
                    > <div style={{ marginRight: '70px', color: 'blue', fontWeight: 'bold', fontSize: '14px', borderBottom: '1px dotted blue' }}>
                            Task name
                   </div>
                    </Menu.Item>

                    <Menu.Item className="two wide column"
                        name='lob'
                    > <div style={{ width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: '#f147c5', color: 'white', padding: '10px', textAlign: 'center', }}>
                            MEDICARE
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column" style={{ float: 'center' }}
                        name='subtask'
                    >
                        <div >
                            <Icon disabled name='tags' />
                            3
                   </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    >
                       <div style={{ border: '1px solid #D3D3D3', aligin: 'center', paddingLeft: '5px', paddingRight: '5px', borderRadius: '15px'}}>
                        <Icon circular name='magnet' /> <Dropdown text='UNASSIGNED' >
                            <Dropdown.Menu>
                                <Input icon='search' iconPosition='left' className='search' />
                                <Dropdown.Divider />
                                <Dropdown.Header icon='tags' content='Tag Label' />
                                <Dropdown.Menu scrolling>
                                    {tagOptions.map((option) => (
                                        <Dropdown.Item key={option.value} {...option} />
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </Menu.Item>
                    <Menu.Item className="two wide column"
                        name='subtask'
                    > <div style={{ textAlign: 'center' }}>
                            In Process
                   </div>
                    </Menu.Item>
                    <Menu.Item className="four wide column"
                        name='subtask'
                    >
                        <div style={{ position: 'absolute', zIndex: 1, width: '80%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: 'white', color: 'black', padding: '10px', textAlign: 'center', }}>
                            20/04/2020 @ 5:00 AM
                            <span style={{ float: "right" }}><Icon disabled name='angle right' /></span>
                        </div>

                        <div style={{ position: 'absolute', opacity: 0.4, zIndex: 2, width: '20%', height: '30px', margin: '6px', borderRadius: '15px', backgroundColor: 'grey', color: 'white', padding: '10px', textAlign: 'center', }}></div>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
