import * as React from "react"
import { Progress } from "./ui/progress"

function ProgressBar() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-96 w-screen" >
      <Progress value={progress} className="w-[33%]" />
      <p>Loading...</p>
    </div>
  )
}

export default ProgressBar;


