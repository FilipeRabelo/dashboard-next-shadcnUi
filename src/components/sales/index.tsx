import { CircleDollarSign, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Sales() {
  return (
    // <Card className="w-full md:w-1/2 md:max-w-[600px]">
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center ">
          <CardTitle className="text-lg sm:text-xl select-none">
            Últimos clientes
          </CardTitle>
          <Users className="ml-auto w-5 h-5" />
        </div>

        <CardDescription>
          Novos clientes nas últimas 24horas
        </CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 py-2 border-b">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/FilipeRabelo.png"/>
            <AvatarFallback>FR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Filipe Rabelo</p>
            <span className="text-[12px] sm:text-sm text-gray-400">email@email.com.br</span>
          </div>
        </article>

        <article className="flex items-center gap-2 py-2 border-b">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/devfraga.png"/>
            <AvatarFallback>FR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Programador</p>
            <span className="text-[12px] sm:text-sm text-gray-400">email@email.com.br</span>
          </div>
        </article>

      </CardContent>

    </Card>
  )
}