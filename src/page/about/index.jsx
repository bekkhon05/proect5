import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Link, Typography } from '@mui/material';
import rasm from "./black-logo.png"
import "./style.css"
function About() {
    return (
        <Box sx={{ flexGrow: 1, mt: "8%" }} justifyContent='center'  >
            <hr style={{ width: "100%", border: "1px solid #EAEAEA" }} />
            <Container>



                <Grid container spacing={2} justifyContent='center' mt='7%' mb='7%' fontFamily="">
                    <Grid item xs={10} lg={4} md={4}   sx={{textAlign:{lg:"start", sm:"center", md:"start", xs:"center"}}} >
                        <img src={rasm} alt="" />
                        <Typography sx={{
                            mt: "5%", fontSize: "15px",color:"#2A2A2A",lineHeight:"40px"
                        }} >
                            If you consider that Plot Listing template is useful for your website, please support us a little via PayPal.
                        </Typography>
                    </Grid>

                    <Grid item xs={8} lg={4} md={4}>
                        <Typography sx={{ fontSize: "20px", fontWeight: "800", textAlign: {lg:"start", sm:"center", md:"start",xs:"center"  }, color: "#A2ACBE" }}>

                            Helpful Links
                        </Typography>
                        <Typography sx={{ mt: "5%" }}>
                            <Grid container spacing={2} justifyContent="center" >
                                <Grid item lg={6} sm={12} xl={6} md={6} xs={12}  sx={{ textAlign: {lg:"start", sm:"center", md:"start" ,xs:"center" }}}>
                                    <a href="#" style={{ 
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mb: "15px",lineHeight:"40px"
                                    }}> Categories</a> <br />    
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mb: "15px",
                                        lineHeight:"40px"
                                    }}>Reviews</Link>  <br />
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px",lineHeight:"40px"
                                    }}>Listing</Link>  <br />
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px",lineHeight:"40px"
                                    }}>Contact Us</Link>  <br />

                                </Grid>
                                <Grid item lg={6} sm={12} xl={6} md={6} xs={12} sx={{ textAlign: {lg:"start", sm:"center", md:"start" ,xs:"center" }}}>
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px",lineHeight:"40px"
                                    }}> About Us</Link> <br />
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px",lineHeight:"40px"
                                    }}>Awards</Link>  <br />
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px",lineHeight:"40px"
                                    }}>Useful Sites</Link>  <br />
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px",lineHeight:"40px"
                                    }}>Privacy Policy</Link>  <br />





                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} lg={4} md={4}>
                        <Typography sx={{ fontSize: "20px", fontWeight: "800", textAlign: 'center', color: "#A2ACBE" }}>

                            Contact Us
                        </Typography>
                        <Typography sx={{ mt: "5%",lineHeight:"40px" }} textAlign='center' >
                            27th Street of New Town, Digital Villa <br />   
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item lg={6} xs={12} textAlign='center'>
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px"
                                    }}> 010-020-0340</Link> <br /> 


                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Link href="#" sx={{
                                        textDecoration: "none", color: "black", "&:hover": {
                                            color: "#A2ACBE"
                                        }, mt: "15px"
                                    }}>
                                        090-080-0760</Link> <br />






                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>

                </Grid>
                <hr style={{ width: "100%", border: "1px solid #EAEAEA" }} />
            </Container>
            <Typography justifyContent='center' textAlign='center' mt='3%' mb='2%' lineHeight=  "30px">

                Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved. <br />
                Design: <Link href="" sx={{
                    textDecoration: "none", color: "black", "&:hover": {
                        color: "#A2ACBE"
                    }
                }}>TemplateMo</Link>

            </Typography>
        </Box>
    )
}

export default About