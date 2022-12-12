import axios from 'axios';

interface IParticipantData {
    id:string,
    name:string,
}

const getNames = async (tournamentID:string, setNames:(value) => void) => {
    const url = process.env.REACT_APP_BACK_URL || 'localohst:8000';
    const key = process.env.REACT_APP_KEY || '';

    const res = await axios.get(url + '/schedule?' + new URLSearchParams({
        tournamentID,
        scheduleType:'latest'
    }), {headers:{key}});

    console.log(res)

    if(res && res?.data && res?.data?.schedule){
        const names:IParticipantData[] = [];
        const { schedule } = res.data;

        for(let i = 0; i < 1; i++){
            Object.values(schedule[i]).forEach((participantData:IParticipantData) => {
                const {id, name} = participantData;
                names.push({id, name})
            })
        }
    }
    else{

    }

}

export default getNames