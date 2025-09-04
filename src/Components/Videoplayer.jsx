import React, { useState } from "react";
import { Button, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Videoplayer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Play Button */}
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          width: 70,
          height: 70,
          bgcolor: "white",
          color: "black",
          fontSize: 20,
          "&:hover": { bgcolor: "#fcd34d" },
        }}
      >
        ▶
      </Button>

      {/* Video Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ "& .MuiDialog-paper": { backgroundColor: "black" } }}
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          >
            <CloseIcon />
          </IconButton>

          {/* YouTube Video */}
          <iframe
            width="100%"
            height="500"
             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Videoplayer;
