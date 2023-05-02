import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Profile = () => {
  const [walletConnection, setWalletConnection] = useState(false);
  const glassMorphismStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };
  return (
    <>
      <Box>
        <Container>
          <Box mt={2}>
            <Stack spacing={2}>
              <Box sx={ [glassMorphismStyle , {borderRadius: 2, padding: 2 }] }>
                <h1>Rana Ahsan Ansar</h1>
                {
                  walletConnection ? (<Typography  sx={{
                    display: '-webkit-box',
                    overflow: 'scroll',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    '&::-webkit-scrollbar': {
                      display: "none"
                  },
                  '&::-webkit-scrollbar-thumb': {
                      backgroundColor: `rgba(0, 0, 0, 0.05)`,
                      display: "none"
                  }
                }}>0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E</Typography>) : (<Typography>Connect your crypto Wallet to communicate with Blockchain</Typography>)
                }
                
                <Box
                  onClick={() => {
                    setWalletConnection(!walletConnection);
                  }}
                >
                  <AccountBalanceWalletIcon />
                </Box>
              </Box>

              <Box>
                <Box>
                  <Grid container spacing={2} >
                    <Grid item xs={12} sm={3}>
                      <Box  sx={{display: "flex" , backgroundColor: 'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                        <Box>
                          <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          Listed Properties
                        </Typography>
                        <br />
                        <Typography
                          variant="h3"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          24
                        </Typography>
                        </Box>
                        

                      </Box>
                      
                    </Grid>

                    <Grid item xs={12} sm={3}>
                    <Box  sx={{display: "flex" , backgroundColor:'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          My Properties
                        </Typography>
                        <br />
                        {walletConnection ? (
                          <Typography
                            variant="h3"
                            fontWeight="bold"
                            fontSize="large"
                          >
                            24
                          </Typography>
                        ) : (
                          <Typography variant="h3"
                          fontWeight="bold"
                          fontSize="large">
                            Connect Wallet
                          </Typography>
                        )}
                      </Box>
                    </Box>
                      
                    </Grid>

                    <Grid item xs={12} sm={3}>
                    <Box  sx={{display: "flex" , backgroundColor: 'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          My Deals
                        </Typography>
                        <br />
                        {walletConnection ? (
                          <Typography
                            variant="h3"
                            fontWeight="bold"
                            fontSize="large"
                          >
                            10
                          </Typography>
                        ) : (
                          <Typography variant="h3"
                          fontWeight="bold"
                          fontSize="large">
                            Connect Wallet
                          </Typography>
                        )}
                      </Box>
                      </Box>
                      
                    </Grid>

                    <Grid item xs={12} sm={3}>
                    <Box  sx={{display: "flex" , backgroundColor: 'gray' , border: '2px solid gray' , padding: '10px' , borderRadius: '10px' }} >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="large"
                        >
                          My Status
                        </Typography>
                        <br />
                        {walletConnection ? (
                          <Typography
                          variant="h3"
                          fontWeight="bold"
                          fontSize="large"
                          color='green'
                        >
                          Approved
                        </Typography>
                        ) : (
                          <Typography variant="h3"
                          fontWeight="bold"
                          fontSize="large">
                            Connect Wallet
                          </Typography>
                        )}
                      </Box>
                      </Box>
                      
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
