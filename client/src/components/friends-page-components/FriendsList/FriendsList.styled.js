import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const FriendsListWrapper = styled(Stack)({
  width: "100%",
});

export const ExpandedWrapper = styled(Stack)(({ active }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "20px",
  padding: "5px 0",
  transition: "all 0.45s ease",
  maxHeight: active ? "100%" : "690px",
  overflowY: !active ? "hidden" : "auto",
}));
