'use client';
import { CustomerService } from '../../../../demo/service/CustomerService';
import { ProductService } from '../../../../demo/service/ProductService';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable, DataTableExpandedRows, DataTableFilterMeta } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown'; import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React, { useEffect, useState } from 'react';
import type { Demo } from '../../../../types/types';
import './style/referenciaStyle.css'


const TableDemo = () => {
    const [customers1, setCustomers1] = useState<Demo.Customer[]>([]);

    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [products, setProducts] = useState<Demo.Product[]>([]);

    useEffect(() => {
        setLoading2(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers1(getCustomers(data));
            setLoading1(false);
        });
    
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data));


    }, []);

    useEffect(() => {
        fetch("")
    }, [])
    

    const getCustomers = (data: Demo.Customer[]) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };

    return (
        <>
            <h2>Referencias</h2>
            <Button className='boton botonRight' icon='pi pi-plus' label="Agregar Referencia" />
            <Button className='boton' icon='pi pi-search' />
            <Button className='boton' icon='pi pi-filter-slash' />
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <DataTable
                            value={customers1}
                            paginator
                            className="p-datatable-gridlines"
                            showGridlines
                            rows={10}
                            dataKey="id"
                            filterDisplay="menu"
                            loading={loading1}
                            responsiveLayout="scroll"
                            emptyMessage="No customers found."

                        >
                            <Column field="name" header=" Código " style={{ minWidth: '12rem' }}  >
                            <input type="text" />
                            </Column>
                            <Column field="name" header=" Descripción  " style={{ minWidth: '12rem' }} />
                            <Column field="name" header=" Tipo de Referencia " style={{ minWidth: '12rem' }} />
                            <Column field="name" header=" Estado " style={{ minWidth: '12rem' }} />
                            <Column field="name" header=" Acción " style={{ minWidth: '12rem' }} />

                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableDemo;
