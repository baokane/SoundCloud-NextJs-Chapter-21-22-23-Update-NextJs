'use client'

import { Button } from 'antd'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type='primary'
            htmlType="submit"
            loading={pending}
        >
            Submit
        </Button>
    )
}