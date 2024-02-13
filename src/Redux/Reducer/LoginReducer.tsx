const initialvalues:any = {
    user: {},
    isAuth: false,
    error: '',
    isLoading: false,
}
export const LoginReducer = (state = initialvalues, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuth: action.isAuth,
                isLoading: action.isLoading,
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                user: action.payload,
                isAuth: action.isAuth,
                isLoading: action.isLoading,
            }
            default:return state;
    }
}