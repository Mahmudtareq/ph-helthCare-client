import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import whyImage from "@/assets/choose-us.png";
const WhyUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning Service",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.profile,
      title: "Best Quality Pregnancy Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.arrow,
      title: "Complete Medical Equipments",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.calender,
      title: "Dedicated Emergency Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
  ];
  return (
    <Container>
      <Box >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{mt:10}}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              backgroundColor: "rgba(20,20,20,0.1)",
              padding: "20px",
              margin: "20px 0",
              borderRadius: "10px 10px 100px 10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <Image src={servicesData[0].imageSrc} alt="image1" width={50} />
            </Box>
            <Box>
              <Typography variant="h5" component="h5" fontWeight={700}>
                {servicesData[0].title}
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              backgroundColor: "rgba(20,20,20,0.1)",
              padding: "20px",
              margin: "20px 0",
              borderRadius: "10px 100px 10px 10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <Image src={servicesData[1].imageSrc} alt="image1" width={50} />
            </Box>
            <Box>
              <Typography variant="h5" component="h5" fontWeight={700}>
                {servicesData[1].title}
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                {servicesData[1].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              backgroundColor: "rgba(20,20,20,0.1)",
              padding: "20px",
              margin: "20px 0",
              borderRadius: "10px 10px 100px 10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <Image src={servicesData[2].imageSrc} alt="image1" width={50} />
            </Box>
            <Box>
              <Typography variant="h5" component="h5" fontWeight={700}>
                {servicesData[2].title}
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                {servicesData[2].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              backgroundColor: "rgba(20,20,20,0.1)",
              padding: "20px",
              margin: "20px 0",
              borderRadius: "10px 100px 10px 10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                p: "10px",
                borderRadius: "5px",
              }}
            >
              <Image src={servicesData[3].imageSrc} alt="image1" width={50} />
            </Box>
            <Box>
              <Typography variant="h5" component="h5" fontWeight={700}>
                {servicesData[3].title}
              </Typography>
              <Typography variant="body1" fontWeight={300}>
                {servicesData[3].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box sx={{ margin: "0 auto", justifyContent: "center" }}>
            <Image src={whyImage} alt="image why us" width={400} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
