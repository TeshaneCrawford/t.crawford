import React, {useEffect} from "react";
import {
  styled,
  Grid,
  Tooltip,
} from "@nextui-org/react";
import {useRouter} from "next/router";
import {levitating} from "../../shared/utils/anim/animation";
import {useIsMobile} from "../../hooks/use-media-query";

const StyledContainer = styled("div", {
  dflex: "center",
  position: "absolute",
  zIndex: "$max",
  "@xsMax": {
    display: "none",
  },
});

const HeroComponents = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById("nextui-tooltip");

      if (element) {
        element.remove();
      }
    }
  }, [isMobile]);

  return (
    <StyledContainer>
      {/* <UserTwitterCard
        avatarProps={{
          squared: false,
          color: "default",
          css: {
            ".nextui-avatar-img": {
              borderColor: "#FF1CF7",
            },
          },
        }}
        avatarUrl="/avatars/avatar-3.png"
        css={{
          position: "relative",
          cursor: "pointer",
          top: "-120px",
          left: "100px",
          px: "$8",
          mw: "280px",
          animation: `${levitating} 12s ease infinite`,
          backgroundColor: "$cardBackground",
          boxShadow: "$sm",
        }}
      /> */}
      <Grid
        css={{
          position: "absolute",
          bottom: "-20px",
          left: "200px",
          animation: `${levitating} 14s ease infinite`,
        }}
      >
        <Tooltip
          initialVisible
          keepMounted
          color="secondary"
          content={"Developers love Open Source"}
          css={{
            animation: `${levitating} 14s ease infinite 0.1s`,
            marginLeft: "-80px",
            marginTop: "$2",
            transform: "translate(0, 0)",
          }}
          offset={50}
          trigger="click"
        >
        </Tooltip>
      </Grid>
    </StyledContainer>
  );
};

export default HeroComponents;