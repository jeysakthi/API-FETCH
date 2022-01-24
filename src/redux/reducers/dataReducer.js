import { GET_DATA } from "../../apis/index";


const dataReducer=(state=[], action)=>{
    
    switch(action.type){    
        case GET_DATA:
            return action.users;
            default:
                return state;
        }
}
export default dataReducer;