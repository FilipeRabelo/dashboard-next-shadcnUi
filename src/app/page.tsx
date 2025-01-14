// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import { ChartOverView } from "@/components/chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg sm:text-xl">
                Total de vendas
              </CardTitle>
              <DollarSign className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>Total de vendas em 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg sm:text-xl">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-5 h-5" />

            </div>

            <CardDescription>Novos clientes em 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">349</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg sm:text-xl">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>Total pedidos hoje</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">67</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg sm:text-xl">
                Total Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>Total Pedidos em 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">2.300</p>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col md:flex-row gap-4 mt-4">
        <ChartOverView />
        <Sales />
      </section>
    </main>
  );
}
