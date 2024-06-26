import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import image from "@/assets/doctor-image1.png";
import Image from "next/image";

const DoctorsCard = () => {
  return (
    <Card sx={{}}>
      <Image src={image} alt="doctor image" width={500} height={100} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Box
        sx={{
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button size="small" variant="outlined">
          Book Now
        </Button>
        <Button size="small">View Profile</Button>
      </Box>
    </Card>
  );
};

export default DoctorsCard;
