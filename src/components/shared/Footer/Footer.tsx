/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookImage from "@/assets/landing_page/facebook.png"
import instagramImage from "@/assets/landing_page/instagram.png";
import linkedinImage from "@/assets/landing_page/linkedin.png";
import twiterImage from "@/assets/landing_page/twitter.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGO's</Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={2}>
          <Image src={facebookImage} alt="facebook" width={30} height={30} />
          <Image src={instagramImage} alt="facebook" width={30} height={30} />
          <Image src={linkedinImage} alt="facebook" width={30} height={30} />
          <Image src={twiterImage} alt="facebook" width={30} height={30} />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed py-2"></div> */}
        <Box sx={{border:"1px dashed lightgray"}}></Box>
        <Stack direction="row" gap={4} justifyContent="space-between" alignItems="center" py={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography variant="h4" component={Link} href="/" fontWeight={600} color="white">
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
