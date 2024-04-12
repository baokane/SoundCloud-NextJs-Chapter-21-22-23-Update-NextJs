'use client'
import { SubmitButton } from "./user/submit.btn"
import { handleLogin } from "./user/actions"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import { message } from "antd"

export default function Home() {
  const [state, formAction] = useFormState(handleLogin, {})

  useEffect(() => {
    if (state?.data?.access_token) {
      console.log('okkk')
      message.success('okkk')
    } else {
      message.error('lỗi')
    }
  }, [state])

  return (
    <div>
      <h2>HTML Forms</h2>

      <form action={formAction} >
        <label >First name:</label><br />
        <input type="text" name="username" /><br />
        <label >Last name:</label><br />
        <input type="text" name="password" /><br /><br />
        {/* <input type="submit" value="Submit" /> */}
        <SubmitButton />
        {JSON.stringify(state)}
      </form>

    </div >
  )
}
