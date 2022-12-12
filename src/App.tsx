import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { getStoreState, store, storeDispatch } from "./redux/store";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import Text from "./Text";
import ETranslations from "./ETranslations";
import InputWithText from "./InputWithText";
import getNames from "./functions/getNames";
import { openModal } from "./redux/slices/modalSlice";
import Modal from "./modal/Modal";

const App: React.FC = () =>
{


    const [date, setDate] = useState<Date>();
    const [tournament, setTournament] = useState<string>("");
    const [names, setNames] = useState([]);
    const [foo1, setFoo] = useState(false);

    const [tourDisabled, setTourDisabled] = useState<boolean>(true);

    useEffect(() =>
    {
        if (tourDisabled && date)
        {
            setTourDisabled(false);
        }
    }, [date]);

    useEffect(() =>
    {
        if (tournament)
        {
            const yyyy = date.getFullYear();
            const mm = date.getMonth() < 10 ? "0" + (date.getMonth().toString()) : date.getMonth();
            const dd = date.getDate() < 10 ? "0" + (date.getDate().toString()) : date.getDate();
            const tournamentID = [yyyy, mm, dd, tournament].join("-");

            getNames(tournamentID, (value) => setNames(value));
        }
    }, [tournament]);

    const foo = () =>
    {
        storeDispatch(openModal({}));
    };

    return (
        <Provider store={store}>
            <div className="App">
                <h1><Text tid={ETranslations.main_text}/></h1>
                <InputWithText type={"date"} tid={ETranslations.date} set={(d) => setDate(new Date(d))}/>
                <InputWithText disabled={tourDisabled} type="children" tid={ETranslations.tournament}
                               set={(text: string) => setTournament(text)}>
                    <select defaultValue="" onChange={(e) => setTournament(e.target.value)}>
                        <option disabled value="">...</option>
                        <option value="1">1) 01:00-09:00</option>
                        <option value="2">2) 09:00-17:00</option>
                        <option value="3">3) 17:00-01:00</option>
                    </select>
                </InputWithText>
                <button onClick={() => foo()}>Click me!</button>
            </div>
        </Provider>
    );
};

export default App;