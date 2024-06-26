import { Box, Card,Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const WorkCard = ({ service }: { service: any }) => {
  return (
    <Card
      sx={{
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image src={service.imageSrc} alt="workd image" width={40} height={50} />
      <Box sx={{ mt: 1.5 }}>
        <Typography sx={{ fontSize: 18, mb: 1 }} color="primary">
          {service.title}
        </Typography>
        <Typography variant="body2" textAlign="justify">{service.description}</Typography>
      </Box>
    </Card>
  );
};

export default WorkCard;
