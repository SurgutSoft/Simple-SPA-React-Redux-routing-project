export const loadState =() => {
    try {
        const serialState =  localStorage.getItem('note-state');
        if (serialState === null) {
            return undefined;
        }
        return JSON.parse(serialState);
    } catch (err){
        return undefined;
    }
};

export const saveStateToLS = (state) => {
    try{
        const serialState = JSON.stringify(state);
        localStorage.setItem('note-state', serialState);
    } catch(err){
        
    }
}