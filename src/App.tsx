import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {useAppSelector, useAppDispatch} from "./redux/hooks";
import Text from "./Text";
import ETranslations from "./ETranslations";
import InputWithText from "./InputWithText";

type tournament = '1' | '2' | '3' | '';

const App: React.FC = () =>
{
    const [date, setDate] = useState<Date>()
    const [tournament, setTournament] = useState<tournament>('');

    const [tourDisabled, setTourDisabled] = useState<boolean>(true);

    useEffect(() => {
        console.log(date)
    })

    return (
        <Provider store={store}>
            <div className="App">
                <h1><Text tid={ETranslations.main_text}/></h1>
                <InputWithText type={'date'} tid={ETranslations.date} set={(d) => setDate(new Date(d))}/>
                <InputWithText type='children' tid={ETranslations.tournament} set={(text:tournament) => setTournament(text)}>
                    <select disabled={tourDisabled} onChange={(e) => setTournament(e.target.value)}>
                        //check typescript variable === type?
                        <option value=''>...</option>
                    </select>
                </InputWithText>
            </div>
        </Provider>
    );
}

export default App;