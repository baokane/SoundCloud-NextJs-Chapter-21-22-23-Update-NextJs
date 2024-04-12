'use server'

export const handleLogin = async (prevState: any, formData: FormData) => {
    console.log('formData:', formData.get('username'))
    console.log('formData:', formData.get('password'))
    console.log('prevState:', prevState)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const res = await fetch(
        "http://localhost:8000/api/v1/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password')
            })
        })
    return await res.json();

}
export const handleLoginAntd = async (formData: any) => {
    // console.log('formData:', formData.get('username'))
    // console.log('formData:', formData.get('password'))
    console.log('formData:', formData)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const res = await fetch(
        "http://localhost:8000/api/v1/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
        })
    return await res.json();

}