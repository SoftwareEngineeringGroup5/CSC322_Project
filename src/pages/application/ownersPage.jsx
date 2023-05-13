import React from 'react';
import './appComponent.css';
import { USERDATA } from './applications';
import { OwnerComp } from './appComponent';


export const OwnerPage = () => {
    return(
        <div > 
         <h1>
        Owner's Page
        </h1> 
        <div className='User-Comps'>
        {USERDATA.map((data) => {
                if (data.status === 'rejected') {
                return <OwnerComp
                key={data.id}
                data={data}
                />;
            }           
            return null;
})}
        </div>
        </div>
        
    );

};