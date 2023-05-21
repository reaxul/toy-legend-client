import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Toy Legend | ${title}`;
    },[title])
}
export default useTitle;