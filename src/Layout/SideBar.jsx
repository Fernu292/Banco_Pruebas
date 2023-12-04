import React, {useContext} from 'react';
import S_Button from '../Components/Side_Btn';
import { EstacionContext } from '../Context/EstacionContext';

import '../Styles/SideBar.scss';

const SideBar = () => {

    const {time} = useContext(EstacionContext);

    return (  
        <div className='SideBar'>
            <h1 className='title'>Menu bar</h1>
        </div>
    );
}
 
export default SideBar;