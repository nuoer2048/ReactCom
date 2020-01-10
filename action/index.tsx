import { INCREAMENT,DECREMENT } from '../const/index'
//action
export interface INCREAMENTAction{
    type: INCREAMENT;
}
export interface DECREMENTAction {
    type: DECREMENT
}
export type ModifyAction = INCREAMENTAction|DECREMENTAction;
export const incre=():INCREAMENTAction=>({
    type:INCREAMENT
})
export const decre = ():DECREMENTAction=>({
    type: DECREMENT
})