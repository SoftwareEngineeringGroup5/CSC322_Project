import React from 'react';
import { USERDATA } from './applications';
import { AppComponent } from './appComponent';
import './appComponent.css';
export const ApplicatonPage = () => {
    return(
        <div>

            <h1 className='UserComps'>  Users Applications</h1>
            <div>
            {USERDATA.map((data) => {
                if (data.status === 'pending') {
                return <AppComponent key={data.id} message={data.message} data={data}             
            />;
                    
            }   
             
            return null;
})}
            </div>

        </div>  
    )
}