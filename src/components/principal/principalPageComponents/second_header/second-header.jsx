import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function SecondHeader() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          paddingTop: 10,
          background: "#F2FFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          component={"div"}
          sx={{
            backgroundImage: "url(/caballo.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "absolute",
            backgroundPosition: "center",
            overflow: "hidden",
            width: "100%",
            height: 850,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component={"div"}
            sx={{
              marginLeft: 26,
              width: 510,
            }}
          >
            <Typography
              component={"div"}
              variant={"h2"}
              sx={{ fontWeight: "bold", fontSize: 75 }}
            >
              Racing Horse Details
            </Typography>
          </Box>
          <Box component={"div"}>
            <Box
              id="1"
              component={"div"}
              sx={{
                width: 55,
                height: 55,
                border: "2px solid rgba(200, 200, 200, 0.5)",
                borderRadius: "50%",
                position: "absolute",
                bottom: "-99%",
                background: "rgba(240, 240, 240)",
                left: "37.4%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  backgroundImage: "url(/herradura.avif)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "absolute",
                  backgroundPosition: "center",
                  overflow: "hidden",
                  border: "2px solid rgba(200, 200, 200, 0.5)",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                }}
              />
            </Box>
            <Box
              component={"div"}
              sx={{
                // width: 55,
                // height: 55,
                fontSize: 25,
                padding: 2,
                paddingLeft: 4,
                paddingRight: 4,
                border: "2px solid rgba(255, 0, 0)",
                borderRadius: "35px",
                position: "absolute",
                bottom: "-95%",
                background: "rgba(250, 250, 250)",
                left: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              Warmblood
            </Box>
          </Box>

          <Box
            id="2"
            component={"div"}
            sx={{
              width: 55,
              height: 55,
              border: "2px solid rgba(200, 200, 200, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-99%",
              background: "rgba(240, 240, 240)",
              left: "48.3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(/herradura.avif)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "absolute",
                backgroundPosition: "center",
                overflow: "hidden",
                border: "2px solid rgba(200, 200, 200, 0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            />
            <Box
              component={"div"}
              sx={{
                width: 210,
                fontSize: 25,
                padding: 2,
                paddingLeft: 2,
                paddingRight: 2,
                border: "2px solid rgba(255, 0, 0)",
                borderRadius: "35px",
                position: "absolute",
                bottom: "250%",
                background: "rgba(260, 260, 260)",
                left: "-140%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              Flexible Back
            </Box>
          </Box>

          <Box
            id="3"
            component={"div"}
            sx={{
              width: 55,
              height: 55,
              border: "2px solid rgba(200, 200, 200, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-96%",
              background: "rgba(240, 240, 240)",
              left: "64.6%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(/herradura.avif)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "absolute",
                backgroundPosition: "center",
                overflow: "hidden",
                border: "2px solid rgba(200, 200, 200, 0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            />
            <Box
              component={"div"}
              sx={{
                width: 120,
                fontSize: 25,
                padding: 2,
                paddingLeft: 2,
                paddingRight: 2,
                border: "2px solid rgba(255, 0, 0)",
                borderRadius: "35px",
                position: "absolute",
                bottom: "-10%",
                background: "rgba(260, 260, 260)",
                left: "250%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              17 hh
            </Box>
          </Box>

          <Box
            id="4"
            component={"div"}
            sx={{
              width: 55,
              height: 55,
              border: "2px solid rgba(200, 200, 200, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-113%",
              background: "rgba(240, 240, 240)",
              left: "60.8%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(/herradura.avif)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "absolute",
                backgroundPosition: "center",
                overflow: "hidden",
                border: "2px solid rgba(200, 200, 200, 0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            />
            <Box
              component={"div"}
              sx={{
                width: 200,
                fontSize: 25,
                padding: 2,
                paddingLeft: "20px",
                paddingRight: "20px",
                border: "2px solid rgba(255, 0, 0)",
                borderRadius: "35px",
                position: "absolute",
                bottom: "-10%",
                background: "rgba(260, 260, 260)",
                left: "250%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              Efficient Heart
            </Box>
          </Box>

          <Box
            id="5"
            component={"div"}
            sx={{
              width: 55,
              height: 55,
              border: "2px solid rgba(200, 200, 200, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-131%",
              background: "rgba(240, 240, 240)",
              left: "57.1%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(/herradura.avif)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "absolute",
                backgroundPosition: "center",
                overflow: "hidden",
                border: "2px solid rgba(200, 200, 200, 0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            />
            <Box
              component={"div"}
              sx={{
                width: 120,
                fontSize: 25,
                padding: 2,
                paddingLeft: "15px",
                paddingRight: "15px",
                border: "2px solid rgba(255, 0, 0)",
                borderRadius: "35px",
                position: "absolute",
                bottom: "-10%",
                background: "rgba(260, 260, 260)",
                left: "280%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              455 lb
            </Box>
          </Box>

          <Box
            id="6"
            component={"div"}
            sx={{
              width: 55,
              height: 55,
              border: "2px solid rgba(200, 200, 200, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-130.2%",
              background: "rgba(240, 240, 240)",
              left: "41.3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(/herradura.avif)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "absolute",
                backgroundPosition: "center",
                overflow: "hidden",
                border: "2px solid rgba(200, 200, 200, 0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            />
            <Box
              component={"div"}
              sx={{
                width: 120,
                fontSize: 25,
                padding: 2,
                paddingLeft: "15px",
                paddingRight: "15px",
                border: "2px solid rgba(255, 0, 0)",
                borderRadius: "35px",
                position: "absolute",
                bottom: "-10%",
                background: "rgba(260, 260, 260)",
                left: "200%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              58 mph
            </Box>
          </Box>

          <Box
            id="7"
            component={"div"}
            sx={{
              width: 55,
              height: 55,
              border: "2px solid rgba(200, 200, 200, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-117%",
              background: "rgba(240, 240, 240)",
              left: "34%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(/herradura.avif)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "absolute",
                backgroundPosition: "center",
                overflow: "hidden",
                border: "2px solid rgba(200, 200, 200, 0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            />
            <Box
              component={"div"}
              sx={{
                width: 140,
                fontSize: 25,
                padding: 2,
                paddingLeft: "20px",
                paddingRight: "20px",
                border: "2px solid rgba(255, 0, 0)",
                borderRadius: "35px",
                position: "absolute",
                bottom: "0%",
                background: "rgba(260, 260, 260)",
                left: "-440%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   transform: "translate(-50%, -50%)",
              }}
            >
              15 years
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default SecondHeader;
