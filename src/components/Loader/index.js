import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box
      sx={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <div className="text-center">
        <img src="/static/images/loading.gif" alt="" />
      </div>
      {/* <CircularProgress size={64} disableShrink thickness={3} /> */}
    </Box>
  );
}

export default Loader;
