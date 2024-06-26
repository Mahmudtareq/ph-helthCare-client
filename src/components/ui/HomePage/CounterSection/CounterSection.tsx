import { Box, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CounterSection = () => {
  return (
    <Container sx={{ my: 3 }}>
      <div className="text-white bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-8">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h4">
              180
              <span>
                <AddIcon />
              </span>
            </Typography>
            <Typography variant="h6" component="h6">
              Experts Doctors
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h4">
              26
              <span>
                <AddIcon />
              </span>
            </Typography>
            <Typography variant="h6" component="h6">
              Experts Services
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h4">
              10K
              <span>
                <AddIcon />
              </span>
            </Typography>
            <Typography variant="h6" component="h6">
              Happy Patients
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h4">
              150
              <span>
                <AddIcon />
              </span>
            </Typography>
            <Typography variant="h6" component="h6">
              Best Award Winners
            </Typography>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default CounterSection;
