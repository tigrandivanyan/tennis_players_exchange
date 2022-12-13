import React, { cloneElement } from "react";
import Text from "./Text";

interface IInputWithTextProps
{
    type: "date" | "text" | "children";
    tid: string;
    set: (text: string) => void;
    disabled?: boolean;
    children?: any;
}

const InputWithText: React.FC<IInputWithTextProps> = ({ children, type, tid, set, disabled }): React.ReactElement =>
{

    return (
        <div className="input-with-text">
            <p><Text tid={tid}/></p>
            {
                type === "children" ?
                    React.isValidElement(children) && cloneElement(children as any, { tid,  disabled })
                    :
                    <input type={type} onChange={e => set(e.target.value)} disabled={disabled}/>

            }
        </div>
    );
};

export default InputWithText;