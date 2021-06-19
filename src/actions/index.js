export const incNumber = () => {
    return {
        type:'INCREMENT'
    }
}

export const decNumber = (payload) => {
    return {
        type:'DECREMENT',
        payload:payload,
    }
}