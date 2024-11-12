import { Box, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TrainerInfo = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: 300,
        height: 300,
        border: "2px solid rgba(200, 200, 200, 0.5)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "2%",
        left: "33%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box
        id="1"
        component={"div"}
        sx={{
          backgroundImage: "url(image-circle1.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: 65,
          height: 65,
          border: "2px solid rgba(200, 200, 200, 0.5)",
          borderRadius: "50%",
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        id="2"
        component={"div"}
        sx={{
          backgroundImage: "url(image-circle2.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: 65,
          height: 65,
          border: "2px solid rgba(200, 200, 200, 0.5)",
          borderRadius: "50%",
          position: "absolute",
          bottom: "42%",
          left: "40%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        id="3"
        component={"div"}
        sx={{
          backgroundImage: "url(image-circle3.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: 65,
          height: 65,
          border: "2px solid rgba(200, 200, 200, 0.5)",
          borderRadius: "50%",
          position: "absolute",
          bottom: "42%",
          right: "18%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box component={"div"}>
        <Typography
          component={"div"}
          variant={"h2"}
          sx={{
            position: "absolute",
            bottom: "12%",
            right: "15%",
            transform: "translate(-50%, -50%)",
          }}
        >
          20+
        </Typography>
      </Box>
      <Box component={"div"}>
        <Typography
          component={"div"}
          variant={"h6"}
          sx={{
            position: "absolute",
            bottom: "8%",
            right: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Trainer
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          top: "110%",
          left: "4%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: 0,
            height: 140,
            border: "2px solid rgba(200, 200, 200, 0.5)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Box
          component={"div"}
          sx={{
            width: 15,
            height: 15,
            transform: "translate(-6px, 0px)",
            background: "rgba(200, 200, 200, 0.5)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Box>
      <Box
        component={"div"}
        sx={{
          position: "absolute",
          bottom: "-80%",
          right: "10%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography component={"div"} variant={"h6"}>
          Explore More
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          position: "absolute",
          bottom: "-120%",
          right: "23%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <PlayCircleIcon
          sx={{ fontSize: "80px", cursor: "pointer", color: "#fC4B08" }}
        />
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <PlayArrowIcon sx={{ fontSize: "52px", cursor: "pointer" }} />{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default TrainerInfo;