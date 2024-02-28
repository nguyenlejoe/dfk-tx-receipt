"use client"

import { useRouter } from "next/navigation"
import { Chain } from "@covalenthq/client-sdk"
import { TransactionReceiptView } from "@covalenthq/goldrush-kit"
import { Flex } from "@radix-ui/themes"
import bg from "../../../../static/dfk-frame.png"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TX({
  params,
}: {
  params: { chain: Chain; tx_hash: string }
}) {
  const router = useRouter()

  return (
    <div className="w-full flex items-center flex-col gap-4">
      <div className=" flex h-[75rem] w-[55rem] items-center justify-center bg-cover" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
        <div className="h-[52rem] w-[36rem] overflow-auto ml-2 relative">
          <Image src={"/static/dfk.png"} alt={""} width={60} height={60} className="absolute right-6 top-[3rem]"/>
          <TransactionReceiptView
            chain_name={params.chain}
            tx_hash={params.tx_hash}
          />
        </div>
      </div>

      <Flex
        className="w-full"
        onClick={() => {
          router.back()
        }}
      >
        <Button>Back</Button>
      </Flex>
    </div>
  )
}
