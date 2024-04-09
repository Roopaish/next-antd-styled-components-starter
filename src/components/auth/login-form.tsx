"use client"

import { useRouter } from "next/navigation"
import { LoginDocument } from "@/api/gql/graphql"
import { Margin } from "@/components/ui/margin"
import { useMutation } from "@apollo/client"
import { Button, Form, Input, notification, Space } from "antd"

interface FormValues {
  email: string
  password: string
}

export default function LoginForm() {
  const router = useRouter()
  const [login, { loading }] = useMutation(LoginDocument)

  const handleLogin = async (values: FormValues) => {
    try {
      const resp = await login({
        variables: { username: values.email, password: values.password },
      })

      if (resp.data?.login?.__typename === "InvalidCredentialsError") {
        notification.error({
          message: "Error",
          description:
            "Oops, it seems there's an issue with the provided credentials. Please double-check and try again",
        })
      }
      router.push("/protected-page")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form
      layout="vertical"
      size="large"
      onFinish={handleLogin}
      initialValues={{
        email: "test@vendure.io",
        password: "test",
      }}
    >
      <Space size={20} direction="vertical">
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            {
              required: true,
              message: "Please enter your email address.",
            },
            // { validator: validateEmail },
          ]}
        >
          <Input placeholder="name@company.com" />
        </Form.Item>
        <div>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password.",
              },
            ]}
          >
            <Input placeholder="name@company.com" />
          </Form.Item>
        </div>
      </Space>
      <Margin top={34}>
        <Button
          size="large"
          block
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Log in
        </Button>
      </Margin>
    </Form>
  )
}
