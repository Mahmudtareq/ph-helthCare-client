import { Box, Button, Container, Typography } from "@mui/material";
import assert from "@/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container sx={{ display: " flex", direction: "row", my: 16 }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assert.svgs.grid} alt="grid" />
        </Box>
        <Typography component="h1" variant="h3" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography component="h1" variant="h3" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          component="h1"
          variant="h3"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography
          component="p"
          variant="h6"
          fontWeight={400}
          sx={{
            textAlign: "justify",
            my: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          qui nemo in fuga illum, error facilis, odit beatae sit omnis nulla ea
          accusantium aliquid, aspernatur reprehenderit. Vero modi a natus!
        </Typography>
        <Box py={2} sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", left: "200px", top: "-30px" }}>
          <Image src={assert.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src={assert.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assert.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "220px", left: "150px" }}>
          <Image
            src={assert.images.doctor3}
            alt="doctor3"
            width={230}
            height={230}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={assert.images.stethoscope}
            alt="doctor3"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
