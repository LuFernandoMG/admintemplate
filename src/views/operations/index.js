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
import operationsData from './operationsData';

const getBadge = status => {
    switch (status) {
        case 'Concluida': return 'success'
        case 'Pendiente': return 'warning'
        case 'Cancelada': return 'danger'
        default: return 'primary'
    }
}

const fieldsTodos = [
    {
        key: 'id_user',
        label: 'ID Usuario',
        sorter: true,
        filter: true
    },
    {
        key: 'type',
        label: 'Tipo',
    },
    {
        key: 'amount',
        label: 'Monto',
        sorter: true,
        filter: true
    },
    {
        key: 'date',
        label: 'Fecha',
    },
    {
        key: 'status',
        label: 'Estado',
    },
]

const fieldsIncome = [
    {
        key: 'id_user',
        label: 'ID Usuario',
        sorter: true,
        filter: true
    },
    {
        key: 'amount',
        label: 'Monto',
        sorter: true,
        filter: true
    },
    {
        key: 'date',
        label: 'Fecha',
    },
    {
        key: 'info',
        label: 'Más información'
    }
]

const fieldsOutcome = [
    {
        key: 'id_user',
        label: 'ID Usuario',
        sorter: true,
        filter: true
    },
    {
        key: 'type',
        label: 'Tipo',
    },
    {
        key: 'amount',
        label: 'Monto',
        sorter: true,
        filter: true
    },
    {
        key: 'date',
        label: 'Fecha',
    },
    {
        key: 'info',
        label: 'Más información',
    },
    {
        key: 'balance',
        label: 'Saldo remanente'
    },
    {
        key: 'status',
        label: 'Estado',
    },
]

const Operations = () => {
    const dataIncome = operationsData.filter((item) => item.type === 'income')
    const dataOutcome = operationsData.filter((item) => item.type === 'outcome')

    return (
        <>

            <CCol xs="12" md="12" className="mb-4">
                <CCard>
                    <CCardHeader>
                        <h2>Operaciones</h2>
          </CCardHeader>
                    <CCardBody>
                        <CTabs activeTab="all">
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink data-tab="all">
                                        Todas
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="income">
                                        Ingresos
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="outcome">
                                        Egresos
                  </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane data-tab="all">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={operationsData}
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
                                <CTabPane data-tab="income">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataIncome}
                                                        fields={fieldsIncome}
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
                                <CTabPane data-tab="outcome">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataOutcome}
                                                        fields={fieldsOutcome}
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

export default Operations
