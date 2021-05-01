import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CTabs,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CDataTable,
    CRow
} from '@coreui/react';
import usersData from './usersData';

const getBadge = status => {
    switch (status) {
        case 'Online': return 'success'
        case 'Offline': return 'secondary'
        case 'Ocupado': return 'warning'
        case 'Ausente': return 'danger'
        default: return 'primary'
    }
}
const fieldsTodos = [
    {
        key: 'name',
        label: 'Nombre',
        sorter: true,
        filter: true
    },
    {
        key: 'register',
        label: 'Registro',
    },
    {
        key: 'type',
        label: 'Tipo',
        sorter: true,
        filter: true
    },
    {
        key: 'last_session',
        label: 'Ultima sesión',
    },
    {
        key: 'duration',
        label: 'Duración',
        sorter: true,
        filter: true
    },
    {
        key: 'status',
        label: 'Estado',
    },
]
const fieldsCliente = [
    {
        key: 'name',
        label: 'Nombre',
        sorter: true,
        filter: true
    },
    {
        key: 'register',
        label: 'Registro',
    },
    {
        key: 'location',
        label: 'Ubicación',
        sorter: true,
        filter: true
    },
    {
        key: 'last_session',
        label: 'Ultima sesión',
    },
    {
        key: 'duration',
        label: 'Duración',
        sorter: true,
        filter: true
    },
    {
        key: 'status',
        label: 'Estado',
    },
]
const fieldsConsultor = [
    {
        key: 'name',
        label: 'Nombre',
        sorter: true,
        filter: true
    },
    {
        key: 'register',
        label: 'Registro',
    },
    {
        key: 'sector',
        label: 'Sector',
        sorter: true,
        filter: true
    },
    {
        key: 'profession',
        label: 'Profesión',
    },
    {
        key: 'last_session',
        label: 'Ultima sesión',
    },
    {
        key: 'duration',
        label: 'Duración',
        sorter: true,
        filter: true
    },
    {
        key: 'status',
        label: 'Estado',
    },
]

const Users = () => {
    const dataClients = usersData.filter((item) => item.type === 'Cliente')
    const dataConsultants = usersData.filter((item) => item.type === 'Consultor')

    return (
        <>

            <CCol xs="12" md="12" className="mb-4">
                <CCard>
                    <CCardHeader>
                        <h2>
                        Usuarios
                        </h2>
          </CCardHeader>
                    <CCardBody>
                        <CTabs activeTab="todos">
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink data-tab="todos">
                                        Todos
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="clientes">
                                        Clientes
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="consultores">
                                        Consultores
                  </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane data-tab="todos">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={usersData}
                                                        fields={fieldsTodos}
                                                        hover
                                                        striped
                                                        bordered
                                                        sorter
                                                        size="sm"
                                                        itemsPerPage={10}
                                                        pagination
                                                        scopedSlots={{
                                                            'status':
                                                                (item) => (
                                                                    <td>
                                                                        <CBadge color={getBadge(item.status)}>
                                                                            {item.status}
                                                                        </CBadge>
                                                                    </td>
                                                                )
                                                        }}
                                                    />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                                <CTabPane data-tab="clientes">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataClients}
                                                        fields={fieldsCliente}
                                                        hover
                                                        striped
                                                        bordered
                                                        size="sm"
                                                        itemsPerPage={10}
                                                        pagination
                                                        scopedSlots={{
                                                            'status':
                                                                (item) => (
                                                                    <td>
                                                                        <CBadge color={getBadge(item.status)}>
                                                                            {item.status}
                                                                        </CBadge>
                                                                    </td>
                                                                )
                                                        }}
                                                    />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                                <CTabPane data-tab="consultores">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataConsultants}
                                                        fields={fieldsConsultor}
                                                        hover
                                                        striped
                                                        bordered
                                                        size="sm"
                                                        itemsPerPage={10}
                                                        pagination
                                                        scopedSlots={{
                                                            'status':
                                                                (item) => (
                                                                    <td>
                                                                        <CBadge color={getBadge(item.status)}>
                                                                            {item.status}
                                                                        </CBadge>
                                                                    </td>
                                                                )
                                                        }}
                                                    />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>

        </>
    )
}

export default Users
