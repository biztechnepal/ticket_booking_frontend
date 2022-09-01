import { Box, Grid, Typography, Button } from '@mui/material';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import Link from 'src/components/Link';
import { Container } from 'react-bootstrap';
function PageHeader({ page }) {
  return (
    <Container fluid>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h3" component="h3" gutterBottom>
                {page.title}
              </Typography>
              <Typography variant="subtitle2">{page.subTitle}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            component={Link}
            startIcon={<ArrowBackTwoToneIcon />}
            href={page.href}
            variant="outlined"
          >
            {page.linkName}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
// PageHeader.propTypes = {
//     title: PropTypes.string,
//     subTitle: PropTypes.string,
// };

// PageHeader.defaultProps = {
//     title: "Page Header Title",
//    subtitle:"Page Sub Title"
// };
export default PageHeader;
