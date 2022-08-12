import {useSelector} from "react-redux";
import {Form} from "./Form";



export const Forms = () => {

    const {forms} = useSelector(({forms}) => forms);

    return (
        <div>
            {
                forms && forms.map((form) =>
                    <Form form={form} index={form.id} key={form.id}/>
                )
            }
        </div>
    );
};

