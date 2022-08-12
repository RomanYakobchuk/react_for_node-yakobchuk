import {useDispatch} from "react-redux";
import {Delete, UpdateSharp} from '@mui/icons-material';

import {actionsForms} from "../redux";
import './index.css'


export const Form = ({form}) => {
    const dispatch = useDispatch();

    const deleteCat = () => {
        dispatch(actionsForms.deleteForm({id: form.id}))
    }

    return (
        <div className={'divContainer'}>
            <div className={'formName'}>
                <div>
                    <h2>Title:</h2>
                    {
                        form.name
                    }
                </div>
                <div>
                    <h4>Descriptions: </h4>
                    {
                        form.desc
                    }

                </div>
            </div>
            <div className={'div'}>
                {/*<div className="div">*/}
                {/*    <label><input type={'text'} placeholder={'Value for field'} className={'inputAdd'}*/}
                {/*                  onChange={({target}) => setNameField(target.value)} value={nameField}/></label>*/}
                {/*    <button className={'buttonAdd'} disabled={!nameField}*/}
                {/*            onClick={save}>{"Add field"}</button>*/}

                {/*</div>*/}
                <div className={'div'}>
                    <label htmlFor="{'deleteCat'}">Delete field</label>
                    <Delete className={'btn'} id={'deleteCat'} onClick={deleteCat}/>
                </div>
                <div className={'div'}>
                    <label htmlFor="{'UpdateCat'}">Update value</label>
                    <UpdateSharp className={'btn'} id={'updateCat'}
                                 onClick={() => dispatch(actionsForms.setFormForUpdate({form}))}/>
                </div>
            </div>
        </div>
    );
};

