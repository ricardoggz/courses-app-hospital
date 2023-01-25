import { MonthBarWrapper } from "./MonthBar.styled"

export const MonthBar = ({children})=>{
    return (
        <MonthBarWrapper className="flex-container">
            { children }
        </MonthBarWrapper>
    )
}