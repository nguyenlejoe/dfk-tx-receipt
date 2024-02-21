"use client"

import { useRouter } from "next/navigation"
import { Chain } from "@covalenthq/client-sdk"
import { TransactionReceiptView } from "@covalenthq/goldrush-kit"
import { Flex } from "@radix-ui/themes"
import bg from "../../../../static/dfk-frame.png"
import { Button } from "@/components/ui/button"

export default function TX({
  params,
}: {
  params: { chain: Chain; tx_hash: string }
}) {
  const router = useRouter()

  return (
    <div className="w-full flex items-center flex-col gap-4">
      <div className=" flex h-[75rem] items-center justify-center bg-cover" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
        <div className="flex  justify-center h-[52rem] w-[55rem] overflow-auto ml-2">
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
