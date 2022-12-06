import axios from 'axios'

const getNames = async (tournamentID:string, setNames:(value) => void) => {
    const url = process.env.REACT_APP_BACK_URL || 'localohst:8000';

    console.log(url + '/schedule?' + new URLSearchParams({
        tournamentID,
        type:'latest'
    }))
    axios.get(url + '/schedule?' + new URLSearchParams({
        tournamentID,
        scheduleType:'latest'
    }), {headers:{key:'SUeue5xzo3K69Chb'}})
        .then(msg => {
            console.log(200);
            console.log(msg);
        })
        .catch(err => {
            console.log(500);
            console.log(err.response)
        })

}

export default getNames