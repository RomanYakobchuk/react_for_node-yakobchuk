import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionsForms} from "../redux";


export const FormsForm = () => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const {formForUpdate} = useSelector(({forms}) => forms) ;

    useEffect(() => {
        if(formForUpdate) {
            setName(formForUpdate.name)
            setDesc(formForUpdate.desc)
        }
    }, [formForUpdate])

    const dispatch = useDispatch();

    const save = () => {
        if(formForUpdate){
            dispatch(actionsForms.updateForm({name, desc, id: formForUpdate.id}))
            setName('')
            setDesc('')
        }else{
            dispatch(actionsForms.addForm({name, desc}))
            setDesc('')
            setName('');
        }
    }

    return (
        <div>
            <label>Title: <input type={'text'} placeholder={'Value for title'} className={'inputAdd'} onChange={({target}) => setName(target.value)} value={name}/></label>
            <label>Descriptions: <input type={'text'} placeholder={'Value for descriptions'} className={'inputAdd desc'} onChange={({target}) => setDesc(target.value)} value={desc}/></label>
            <button className={'buttonAdd'} disabled={!name || !desc} onClick={save}>{
                formForUpdate
                    ? "Update value" :
                    "Add field"
            }</button>
        </div>
    );
};

