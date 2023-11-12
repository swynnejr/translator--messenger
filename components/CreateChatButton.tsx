"use client"

import { MessageSquare, MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

function CreateChatButton() {
  const router = useRouter();
  const createNewChat = async () => {
    // Logic coming soon
    // router.push(`/chat/${chatId}`)
    router.push(`/chat/chatId`)
  }
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon>

      </MessageSquarePlusIcon>
    </Button>
  )
}

export default CreateChatButton