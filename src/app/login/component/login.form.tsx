'use client'
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { handleLoginAntd } from '@/app/user/actions';



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginForm = () => {
    const [isSubmit, setIsSubmit] = useState(false)
    const onFinish = async (values: any) => {
        setIsSubmit(true)
        console.log('Success:', values);
        const res = await handleLoginAntd(values)
        console.log('res:', res)
        setIsSubmit(false)
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, marginTop: "50px" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isSubmit}>
                    Submitbbbb
                </Button>
            </Form.Item>
        </Form>
    )
}


export default LoginForm;
