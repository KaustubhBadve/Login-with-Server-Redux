import { ERROR_FEEDS, LOADING_FEEDS, SUCCESS_FEEDS } from "./Action.type"

const InitialState={
    getFeed:{
        loading:false,
        error:false,
        data:[]
    } 
}

export const FeedReducer=(state=InitialState,{type,payload})=>{
    switch (type){
        case LOADING_FEEDS:{
          return  {...state,
                  getFeed:{
                    ...state.getFeed,
                    loading:true,
                    error:false
                  }    
            }
        }
        case SUCCESS_FEEDS:{
            return  {...state,
                    getFeed:{
                      ...state.getFeed,
                      loading:false,
                      data:payload
                    }    
              }
          }
          case ERROR_FEEDS:{
            return  {...state,
                    getFeed:{
                      ...state.getFeed,
                      loading:false,
                      error:true
                    }    
              }
          }
        default:{
            return state
        }
    }
}