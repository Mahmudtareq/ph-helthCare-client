"use client";
/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography>Health Plans</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGO's</Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
