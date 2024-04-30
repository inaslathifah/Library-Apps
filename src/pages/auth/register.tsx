import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

import { userRegister } from "@/utils/apis/auth/api";
import { RegisterSchema, registerSchema } from "@/utils/apis/auth/type";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const navigate = useNavigate();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      address: "",
      phone_number: "",
      password: "",
      repassword: "",
    },
  });

  async function onSubmit(data: RegisterSchema) {
    try {
      const result = await userRegister(data);

      toast(result.message);
      navigate("/login");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Layout centerY centerX>
      <Card className="w-full md:w-1/2 bg-rose-400 text-black border-white">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription className="text-white">
            Register your account now!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <CustomFormField
                control={form.control}
                name="full_name"
                label="Full Name"
              >
                {(field) => (
                  <Input
                    {...field}
                    className="bg-white border-white"
                    placeholder="John Doe"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
              >
                {(field) => (
                  <Input
                    {...field}
                    className="bg-white border-white"
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
                name="address"
                label="Address"
              >
                {(field) => (
                  <Input
                    {...field}
                    className="bg-white border-white"
                    placeholder="Address"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="phone_number"
                label="Phone Number"
              >
                {(field) => (
                  <Input
                    {...field}
                    className="bg-white border-white"
                    placeholder="08xxxxxxxxxx"
                    type="telephone"
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
                    className="bg-white border-white"
                    placeholder="Password"
                    type="password"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="repassword"
                label="Confirm Password"
              >
                {(field) => (
                  <Input
                    {...field}
                    className="bg-white border-white"
                    placeholder="Confirm Password"
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
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Register;
