import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { userLogin } from "@/utils/apis/auth/api";

import { LoginSchema, loginSchema } from "@/utils/apis/auth/type";
import { Separator } from "@/components/ui/separator";
import { useToken } from "@/utils/contexts/token";

const Login = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const result = await userLogin(data);

      changeToken(result.payload.token);

      toast(result.message);
      navigate("/");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Layout centerY centerX>
      <Card className="w-full md:w-1/2 bg-rose-400 text-black border-white">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription className="text-white">
            Login to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
              >
                {(field) => (
                  <Input
                    {...field}
                    className="bg-white border-rose-300"
                    placeholder="john_doe@mail.com"
                    type="email"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
              >
                {(field) => (
                  <Input
                    {...field}
                    className="bg-white border-rose-300"
                    placeholder="Password"
                    type="password"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
              <div className="flex flex-col mt-20 gap-4">
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-rose-500 "
                >
                  Submit
                </Button>
                <div className="w-full flex items-center text-center text-xs font-thin">
                  <div className="w-1/2">
                    <Separator className="bg-rose-500" />
                  </div>
                  <p className="mx-1 text-white">OR</p>
                  <div className="w-1/2">
                    <Separator className="bg-rose-500" />
                  </div>
                </div>
                <Button
                  className="bg-white text-black hover:bg-rose-500 "
                  type="button"
                  variant="secondary"
                  asChild
                >
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Layout>
  );

};

export default Login;
