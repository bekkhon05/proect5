import React from 'react'
import { Box, Grid, CardContent, Typography, Container, Button } from '@mui/material'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaPlusCircle } from "react-icons/fa";
import Chip from '@mui/material/Chip';
import { FaEye } from "react-icons/fa";

import rasm from "./listing-01.jpg"
import rasm1 from "./listing-02.jpg"
import rasm2 from "./listing-03.jpg"
import rasm3 from "./listing-04.jpg"
import rasm4 from "./listing-05.jpg"
import rasm5 from "./listing-06.jpg"
import Rating from '@mui/material/Rating';
import icon from "./listing-icon-01.png"
import icon2 from "./listing-icon-02.png"
import icon3 from "./listing-icon-03.png"
import "./style.css"


function Listing() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        // cssEase: "linear"

    };
    return (
        <Box container justifyContent='center'>
            <Container>


                <Box container sx={{ textAlign: "center", }}>
                    <Grid container justifyContent="center" spacing={4}  >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                            <CardContent sx={{ width: "93%", paddingLeft: "30px", marginTop: "5%", mb: "5%" }}>

                                <Typography sx={{ color: "black", fontSize: { lg: "35px", xs: "40px" }, display: "block", marginBlockStart: "0.1em", marginBlockEnd: "0.5em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "600" }} >
                                    Recent Listing
                                </Typography>
                                <Typography sx={{ color: "black", fontSize: { lg: "14px", xs: "16px" }, display: "block", marginBlockStart: "1em", marginBlockEnd: "0.5em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "400", letterSpacing: "2px" }} >
                                    CHECK THEM OUT
                                </Typography>

                            </CardContent>
                        </Grid >
                    </Grid>

                    <div >
                        <Slider {...settings}>

                            <Box >
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={6} sm={6} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"0", md:"-18.5%", sm:"-1%", xs:"-15%"}
                                            }}>
                                                1.First Apartment Unit
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={6} sm={6} sx={{  ml: { lg: "-5%", xs: "-26%", md:"-28%", sm:"-56%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-9%", md:"-6%", sm:"-8%", xs:"-7%"}, ml:{lg:"68%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(12)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={9} md={6} sm={4} lg={4.5}>

                                                <Typography mt="4%" ml="-15px">
                                                    $450 - $950 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 3660 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml:{lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-4%" }}>
                                                    4 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    4 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>
                                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:{lg:"2%", md:"2%",sm:"3%", xs:"5%" }}}>
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm1} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={7} sm={7} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"0", md:"-12.5%", sm:"-1%", xs:"-7%"}
                                            }}>
                                                2.Another House of Gaming
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={4} sm={6} sx={{  ml: { lg: "-5%", xs: "-25%", md:"-28%", sm:"-64.5%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-14%", md:"-6%", sm:"-8%",xs:"-7%"}, ml:{lg:"80%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(24)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={9} md={7} sm={5} lg={5}>

                                                <Typography mt="4%" ml="-15px">
                                                    $1.400 - $3.500 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 3660 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    4 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    3 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>

                                {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/}
                                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:{lg:"2%", md:"2%",sm:"3%", xs:"5%" }}}>
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm2} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={7} sm={7} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"1%", md:"-12.5%", sm:"-1%", xs:"-7%"}
                                            }}>
                                                3.Secret Place Hidden House
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={4} sm={6} sx={{  ml: { lg: "-5%", xs: "-25%", md:"-28%", sm:"-64.5%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-14%", md:"-6%", sm:"-8%",xs:"-7%"}, ml:{lg:"80%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(36)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Best Property <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={9} md={7} sm={5} lg={5}>

                                                <Typography mt="4%" ml="-15px">
                                                    $1.500 - $3.600 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 3660 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    4 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    3 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>
                            </Box>


                            <Box >
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm3} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={6} sm={6} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"6%", md:"-11.5%", sm:"4%", xs:"-5.5%"}
                                            }}>
                                                4.Sunshine Fourth Apartment
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={6} sm={6} sx={{  ml: { lg: "-10%", xs: "-26%", md:"-28%", sm:"-61%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-9%", md:"-6%", sm:"-8%", xs:"-7%"}, ml:{lg:"68%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(24)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={8} md={6} sm={4} lg={4}>

                                                <Typography mt="4%" ml="-15px">
                                                    $3.600 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 3660 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml:{lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    5 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    3 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>
                                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:{lg:"2%", md:"2%",sm:"3%", xs:"5%" }}}>
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm4} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={7} sm={7} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"-0.5%", md:"-14.5%", sm:"-2.5%", xs:"-9.5%"}
                                            }}>
                                                5.Best House Of the Town
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={4} sm={6} sx={{  ml: { lg: "-5%", xs: "-26%", md:"-28%", sm:"-63%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-14%", md:"-6%", sm:"-8%",xs:"-7%"}, ml:{lg:"80%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(32)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={8} md={6} sm={4} lg={4}>

                                                <Typography mt="4%" ml="-15px">
                                                    $5.600/ month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 1750 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    6 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    3 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>

                                {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/}
                                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:{lg:"2%", md:"2%",sm:"3%", xs:"5%" }}}>
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm5} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={7} sm={7} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"0%", md:"-14%", sm:"-2%", xs:"-7%"}
                                            }}>
                                                6.Amazing Pool Party Villa
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={4} sm={6} sx={{  ml: { lg: "-5%", xs: "-25%", md:"-28%", sm:"-63.5%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-14%", md:"-6%", sm:"-8%",xs:"-7%"}, ml:{lg:"80%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(40)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent<br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={9} md={6} sm={4} lg={4}>

                                                <Typography mt="4%" ml="-15px">
                                                     $3.850 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 3660 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    4 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    3 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>
                            </Box>





                            <Box >
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={6} sm={6} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"-1%", md:"-20.5%", sm:"-2.5%", xs:"-17.4%"}
                                            }}>
                                                7.Sunny Apartment
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={6} sm={6} sx={{  ml: { lg: "-5%", xs: "-26%", md:"-28%", sm:"-54.8%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-9%", md:"-6%", sm:"-8%", xs:"-7%"}, ml:{lg:"68%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(24)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={9} md={6} sm={4} lg={4}>

                                                <Typography mt="4%" ml="-15px">
                                                    $5.450 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 1640 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    8 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    5 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>
                                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:{lg:"2%", md:"2%",sm:"3%", xs:"5%" }}}>
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm1} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={7} sm={7} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"-1.5%", md:"-15%", sm:"-3%", xs:"-10.5%"}
                                            }}>
                                                8.Third House of Gaming
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={4} sm={6} sx={{  ml: { lg: "-5%", xs: "-26%", md:"-28%", sm:"-62.5%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-14%", md:"-6%", sm:"-8%",xs:"-7%"}, ml:{lg:"80%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(15)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={8} md={6} sm={4} lg={4}>

                                                <Typography mt="4%" ml="-15px">
                                                    $5.520 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 1660 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml:{lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    5 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    4 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>

                                {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/}
                                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:{lg:"2%", md:"2%",sm:"3%", xs:"5%" }}}>
                                    <Grid container item lg={5} md={6} sm={12}
                                        sx={{ width: "100%" }}>
                                        <img src={rasm2} style={{ borderRadius: " 15px 0 0  15px  ", width: "100%", height: { lg: "100%", md: "100%" } }} alt="" />
                                    </Grid>
                                    <Grid item lg={7} md={6} sm={12} sx={{
                                        width: "180%",
                                        height: "352px",
                                        background: "#f7f7f7",
                                        borderRadius: "0 15px 15px 0",
                                        mt: "0.9%",
                                        position: "relative"

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} md={12} lg={7} sm={7} sx={{
                                                fontSize: "20px",
                                                fontWeight: "700",
                                                mt: {lg:"5%", md:"5%", sm:"5%", xs:"10%"},
                                                ml:{lg:"-0.5%", md:"-14%", sm:"-2%", xs:"-8.5%"}
                                            }}>
                                                9.Relaxing BBQ Party Villa 
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={4} sm={6} sx={{  ml: { lg: "-5%", xs: "-26%", md:"-28%", sm:"-63.5%" }, mt:{lg:"4%", sm:"0", xs:"-16%"}, position:"relative" }}>
                                              <span>  <Rating name="no-value" value={null} /></span> <Typography sx={{mt:{lg:"-14%", md:"-6%", sm:"-8%",xs:"-7%"}, ml:{lg:"80%" , md:"50%", sm:"65%",xs:"55%"},position:"relative"}}>(20)Reviews</Typography>
                                            </Grid>


                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", color: "#8D99AF" }}>
                                                by:Sale Agent <br />
                                            </Grid>



                                            <Grid item xs={2} md={2} sm={1.8} >
                                                <Typography sx={{ width: "15px", height: "15px", background: "#8D99AF", padding: "10px", borderRadius: "50px", ml: "69%", mt: "4%" }}>

                                                    <img src={icon} alt="" />
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={8} md={6} sm={4} lg={4}>

                                                <Typography mt="4%" ml="-15px">
                                                    $4.760 / month with taxes
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                            <span style={{ color: "#8D99AF" }}> Details </span> : 2880 sq ft
                                        </Grid>

                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon2} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}, fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    6 Bedrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{ ml: "8.8%", fontSize: "18px", textAlign: "start", mt: "4%" }}>
                                                <Grid item xs={2} sx={{}}>

                                                    <img src={icon3} alt="" />
                                                </Grid>
                                                <Grid item xs={8} sx={{ ml: {lg:"8.8%", md:"12%",sm:"10%", xs:"14%"}    , fontSize: "18px", textAlign: "start", mt: "-3%" }}>
                                                    4 Bathrooms
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6.5}  >
                                            </Grid>
                                            <Grid item sm={3} md={5}  sx={{ml:{lg:"0", md:"-45% ", sm:"-45%", xs:"-45%"}, mt:{lg:"0", md:"3% ", sm:"2%", xs:"5%"}}} >
                                                <Button sx={{
                                                    width: "100%", background: "white", color: "Black ", "&:hover": {
                                                        color: "white",
                                                        background: "#8D99AF"
                                                    }
                                                }}> <Typography sx={{
                                                    width: "18px",
                                                    height: "20px",
                                                    background: "#8D99AF",
                                                    padding: "1px 0 0 5px",
                                                    borderRadius: "50px",
                                                    mr: "8px"
                                                }}>



                                                        <FaEye style={{ marginRight: "15px", color: "white", fontSize: "14px " }} /></Typography>
                                                    Contact Now
                                                </Button>


                                            </Grid>
                                        </Grid>





                                    </Grid>

                                </Grid>
                            </Box>






                        </Slider>
                    </div>



                </Box>
            </Container>

        </Box>
    )
}

export default Listing




