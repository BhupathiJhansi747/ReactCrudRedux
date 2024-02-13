const initialvalues: any = {
    Employe: {},
    Employes: [],
    error: '',
    isLoading: false,
}
export const ServiceReducer = (state = initialvalues, action: any) => {
    switch (action.type) {
        case 'GETALLEMPLOYES_SUCCESS':
            return {
                ...state,
                Employes: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'GETALLEMPLOYES_FAIL':
            return {
                ...state,
                Employes: action.payload,
                error: action.error,
                isLoading: action.isLoading

            }
        case 'ADDEMPLOYE_SUCCCESS':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'ADDEMPLOYE_FAIL':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'UPDATEEMPLOYE_SUCCESS':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'UPDATEEMPLOYE_FAIL':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'GETBYID_SUCCESS':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'GETBYID_FAIL':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'DELETEEMPLOYE_SUCCESS':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        case 'DELETEEMPLOYE_FAIL':
            return {
                ...state,
                Employe: action.payload,
                error: action.error,
                isLoading: action.isLoading
            }
        default: return state;
    }

}