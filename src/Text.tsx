import React from "react";

const translations = {
    main: {
        text: "Сайт для замены игроков в турнире "
    },
    inputs:{
        date: "Дата: ",
        tournament: "Турнамент: ",
        participant1: "Участник 1: ",
        participant2: "Участник 2: "
    }
};

interface ITextProps {
    tid:string
}


const Text: React.FC<ITextProps> = ({tid}) => {
    const keysArray:string[] = tid.split('.');

    let result:any = undefined;

    keysArray.forEach((key) => {
        if(result)
        {
            result = result[key]
        }else
        {
            result = translations[key]
        }
    })


    return result || <p style={{color:'red'}}>{tid}</p>;
}

export default Text;