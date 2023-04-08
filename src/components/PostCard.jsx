import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Badge,
  Chip,
  Stack,
  CardActions,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

const defaultStyle = { maxHeight: 300, overflowY: "hidden" };
const modifiedStyle = { maxHeight: "none", overflowY: "visible" };

const PostCard = ({ title, description, tags, reactions }) => {
  const [isdefaultStyle, setIsDefaultStyle] = useState(true);

  const learnMoreButtonHandler = () => {
    setIsDefaultStyle((state) => !state);
  };
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 2,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        transition: "all 1s",

        "&:hover": {
          transform: "translateY(-12px)",
        },
        padding: 1,
        borderRadius: 5,
      }}
    >
      <AttachFileOutlinedIcon />
      <CardContent sx={isdefaultStyle ? defaultStyle : modifiedStyle}>
        <Typography color="text.secondary" fontSize={18} fontWeight={"bold"}>
          {title}
        </Typography>
        <Chip
          label="Tags :"
          sx={{ fontWeight: "bold", letterSpacing: 1, marginTop: 1 }}
        />
        <Stack direction="row" spacing={1} my={1}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} color="info" />
          ))}
        </Stack>
        <Stack direction="row" spacing={5} my={2}>
          <Badge badgeContent={reactions} color="primary">
            <FavoriteIcon color="error" cursor={"pointer"} />
          </Badge>
          <ShareOutlinedIcon cursor={"pointer"} />
        </Stack>
        <Typography
          color="text.secondary"
          textAlign={"justify"}
          my={1}
          fontSize={15}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={learnMoreButtonHandler}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
export default PostCard;
