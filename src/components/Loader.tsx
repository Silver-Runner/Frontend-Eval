import { RootState } from "../app/store"
import { useSelector } from "react-redux"

const Loader = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)
  return (
    <div className={`flex justify-center items-center h-screen ${theme === "light" ?"bg-white":"bg-black"}`}>
      <div className={theme === "light" ?"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500":
        "animate-spin rounded-full  h-32 w-32 border-t-2 border-b-2 border-yellow-700"}>

      </div>
    </div>
  )
}

export default Loader
