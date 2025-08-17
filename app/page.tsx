"use client"
import { Italiana } from "next/font/google";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from "axios";




const italian = Italiana({ subsets: ["latin"], weight: "400" });

export default function Home() {

  const submit = ({product,price}:{product:string,price:number}) => {
    const data = {
      product : product,
      price : price
    }
    axios.post("/v1/checkout/sessions",data).then((res) => {
      window.location.href = res.data.url
    })
  }

  return (
    <div className="flex justify-center items-center flex-col gap-[20vh]">
      <header className={`${italian.className} text-8xl`} >MOCLOTH</header>
      <main>
        <div className="grid grid-cols-2 gap-[20vw]">
          <Card className="w-[20vw]">
      <CardHeader>
        <img className="h-40" height={40} src="https://sp.yimg.com/ib/th?id=OPAC.WMeFtJnz1S6tGw474C474&o=5&pid=21.1&w=160&h=105" alt="" />
      </CardHeader>
      <CardContent>
        <p>Tshirt</p>
        <p>₹120</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <button onClick={() => submit({product:"Tshirt",price:120})} className="bg-black text-white px-4 py-2 rounded-xl" >Buy</button>
      </CardFooter>
    </Card>
    <Card className="w-[20vw] ">
      <CardHeader>
        <img className="h-40" height={30} src="https://sp.yimg.com/ib/th?id=OPAC.lBgxRJEHrivBmQ474C474&o=5&pid=21.1&w=160&h=105" alt="" />
      </CardHeader>
      <CardContent>
        <p>Trouser</p>
        <p>₹140</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <button onClick={() => submit({product:"trouser",price:140})} className="bg-black text-white px-4 py-2 rounded-xl" >Buy</button>
      </CardFooter>
    </Card>
        </div>
      </main>
    </div>
  );
}
