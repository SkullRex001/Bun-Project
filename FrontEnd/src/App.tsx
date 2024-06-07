import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function App() {
  const [totalSpent , setTotalSpent] = useState(0)

  useEffect(()=>{
    const fetchData = async () => {

      const response = await fetch('/api/expenses/total-spent');
      const data = await response.json()
      setTotalSpent(data.total)
      console.log(data)

    }
    fetchData()
  })

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Total Spent</CardTitle>
            <CardDescription>The total amount you've spent</CardDescription>
          </CardHeader>
          <CardContent>
            <p>$  {totalSpent}</p>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}

export default App
