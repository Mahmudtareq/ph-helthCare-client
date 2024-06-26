"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import asserts from "@/assets";
import Link from "next/link";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { resgisterPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
export const patientValidation = z.object({
  name: z.string().min(1, "Please Enter Your Name!"),
  email: z.string().email("Please Enter a valid email address!"),
  contactNumber: z.string().regex(/^\d{11}$/, "Please Enter a valid number!"),
  address: z.string().min(1, "Please Enter your address!"),
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};
export const validationSchema = z.object({
  password: z.string().min(6, "Musr be at least 6 character!"),
  patient: patientValidation,
});

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await resgisterPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await loginPatient({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      } else {
        setError(res.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image
                src={asserts.svgs.logo}
                width={50}
                height={50}
                alt="logo"
              />
            </Box>
            <Box sx={{ my: 1 }}>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <PHInput label="Name" fullWidth={true} name="patient.name" />
                </Grid>
                <Grid item md={6} xs={12}>
                  <PHInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <PHInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <PHInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <PHInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
                  />
                </Grid>
              </Grid>
              <Button sx={{ margin: "10px 0px" }} fullWidth type="submit">
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do You already have an account? <Link href="/login">Login</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
