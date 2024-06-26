import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import workImage from "@/assets/how-it-works-img.png";
import assets from "@/assets";
import WorkCard from "./WorkCard";
const servicesData = [
  {
    imageSrc: assets.svgs.profile,
    title: "Check Doctor Profile",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.doctorSearch,
    title: "Search Doctor",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.solution,
    title: "Get Your Solution",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.schedule,
    title: "Schedule Appointment",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const HowWorks = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Box>
        <Box sx={{ textAlign: "start" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
            mb="5px"
          >
            How It Works
          </Typography>
          <Typography variant="h4" component="h1" mb={1} fontWeight={700}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography variant="body1" component="h6" mb={1} fontWeight={400}>
            Access to experts physicians and surgeoins,advanched technologies{" "}
            <br />
            and top-quelity surgery feclities right here
          </Typography>
        </Box>
      </Box>
      <Box sx={{ my: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ margin: "0 auto", justifyContent: "center" }}>
              <Image src={workImage} alt="image why us" width={400} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {servicesData.map((service: any, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <WorkCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowWorks;
