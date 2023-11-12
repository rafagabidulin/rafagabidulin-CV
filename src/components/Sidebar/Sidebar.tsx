import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className='col-2'>
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }}
    >
      <CDBSidebar
        textColor='#fff'
        backgroundColor='#000'
        breakpoint={0}
        toggled={false}
        minWidth={'10vw'}
        maxWidth={'15vw'}
        className={''}
      >
        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>Обо мне</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/skills' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>Навыки</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/projects' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='table'>Проекты</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/education' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='user'>Образование</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/posts' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='chart-line'>Мои посты</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  </div>
);

export default Sidebar;
