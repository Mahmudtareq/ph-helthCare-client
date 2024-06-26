import { Box, Container, Grid, Typography } from "@mui/material";
import DoctorsCard from "./DoctorsCard";

const TopRatedDoctors = () => {
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontWeight={400} fontSize={18} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontWeight={400} fontSize={18}>
          and top-quelity surgery facilities right here.
        </Typography>
      </Box>
      <Container sx={{ my: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <DoctorsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <DoctorsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <DoctorsCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
