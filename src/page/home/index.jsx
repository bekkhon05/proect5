import "./style.css"
import React from 'react'
import { Box, Grid, Typography, CardContent, Button, Container } from "@mui/material"
import { FaSearch } from "react-icons/fa";
import rasm from "./search-icon-01.png"
import rasm1 from "./search-icon-02.png"
import rasm2 from "./search-icon-03.png"
import rasm3 from "./search-icon-04.png"
import rasm4 from "./search-icon-05.png"


import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
function Home() {


    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (

        <Box id="home-bg" sx={{
            height: { lg: "109vh", xs: "140vh", sm: "160vh", xs: "180vh" }
        }}>
            <Box >
                <Box justifyContent='center'>
                    <Box sx={{ textAlign: "center", mt: { lg: "2%", } }}>
                        <Grid container justifyContent="center" spacing={4} >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                                <CardContent sx={{ width: "93%", paddingLeft: "30px", marginTop: { lg: "15%", md: "25%", sm: "30%", xs: "65%" } }}>

                                    <Typography sx={{ color: "white", fontSize: { lg: "14px", xs: "16px", md: "14px", sm: "14px" }, margin: "0 0 5px", display: "block", marginBlockStart: "1em", marginBlockEnd: "0.5em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "700", }} >
                                        OVER 36,500+ ACTIVE LISTINGS
                                    </Typography>
                                    <Typography sx={{ color: "white", fontSize: { lg: "42px", xs: "40px", sm: "40px", md: "42px" }, margin: "0 0 10px", display: "block", marginBlockStart: "0.1em", marginBlockEnd: "0.5em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "800" }} >
                                        Find Nearby Places & Things
                                    </Typography>

                                </CardContent>
                            </Grid >



                        </Grid>
                        <Grid container justifyContent="center" >


                            <Grid container sx={{
                                width: { lg: "85%", xs: "96%" },
                                background: "white",
                                height: { lg: "8.5%", xs: "27%", md: "13%", sm: '30%' },
                                position: "absolute",
                                borderRadius: "10px",
                                padding: { lg: "0", xs: "15px" }
                            }}>
                                <Grid item xs={12} xl={3} sm={12} md={3} sx={{}}>
                                    <FormControl sx={{ width: "100%", mt:{lg:"2.5%", md:"10%"} }}>
                                        <Select
                                            multiple
                                            displayEmpty
                                            value={personName}
                                            onChange={handleChange}
                                            sx={{
                                                '.MuiOutlinedInput-notchedOutline': { border: {lg:"0", md:"0 "} } 
                                            }}
                                            input={<OutlinedInput />}
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                    return <em style={{marginLeft:"-55%"}}>All Areas</em>;
                                                }

                                                return selected.join(', ');
                                            }}
                                            MenuProps={MenuProps}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem disabled value="" >
                                                <em>Placeholder</em>
                                            </MenuItem>
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, personName, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} xl={3} sm={12} md={3} sx={{ mt: { lg: "0%", xs: "2%" } }} >
                                    <Typography sx={{
                                        width: { lg: "100%", md: '100%', sm: "100.5%", xs: "99.5%" },
                                        height: { lg: "100%", md: '85%', sm: "40px", xs: "40px" },
                                        mt: { lg: "3%", md: "2%" },


                                    }}>
                                        {/* <input  placeholder="Enter " type="text" style={{ width: "99%", height: "91%", }} /> */}
                                        <TextField id="outlined-basic" placeholder="Enter a location"  variant="outlined"  sx={{
                                                '.MuiOutlinedInput-notchedOutline': {border:{lg:"none", md:"none", }  },
                                                width:{lg:"100%", md:"100%", sm:"99%", xs:"100%"}, height:{sm:"50%"}, 
                                            }} />

                                           

                                    </Typography>
                                </Grid>
                                <Grid item xs={12} xl={3} sm={12} md={3} sx={{ mt: { lg: "0%", xs: "2%" }, }}>

                                    <FormControl sx={{  width: "100%", mt:1  }}>
                                        <Select
                                            multiple
                                            displayEmpty
                                            sx={{
                                                '.MuiOutlinedInput-notchedOutline': { border: {lg:"0", md:"0", sm:"1px solid grey"} } 
                                            }}
                                            value={personName}
                                            onChange={handleChange}
                                            input={<OutlinedInput />}
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                    return <em style={{marginLeft:"-45%"}} >Price Range</em>;
                                                }

                                                return selected.join(', ');
                                            }}
                                            MenuProps={MenuProps}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem disabled value="" >
                                               
                                            </MenuItem>
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, personName, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} xl={3} sm={12} md={3} sx={{ alignItems: "center", }}  >

                                    <Typography sx={{height:{lg:"54%", md:"20%", sm:"50%",xs:"40%"}, padding:{lg:"16px 0", md:"27px 17px", sm:"15px 35px", xs:"19px"}, background: "#8C98AE", borderRadius: { lg: "0 10px 10px 0", md: "0 10px 10px 0", sm: "10px", xs: "10px" }, color: "white", mt: { lg: "0", md: "7%", sm: "1%", xs: "2%" }, position:"relativ" }}>
                                        <Typography sx={{ width: "27px", height: "40px", position: "absolute", background: "#fff", borderRadius: "50px", display: "flex", alignItems: "center", padding: "0  0 0 12px", ml: { lg: "3.8%", md: "0", sm: "30%", xs: "15%" }, mt: { lg: "-0.5%", md: "-1%", sm: "-1%", xs: "-1.5%" }, color: "#8C98AE" }}>
                                            <FaSearch />
                                        </Typography >
                                        Search Now
                                    </Typography>

                                </Grid>

                            </Grid>

                        </Grid>
                        <Box >
                            <Container>

                                <Grid container justifyContent='center' textAlign="center" spacing={2} mt={{ lg: "5%", md: "10%", sm: "39%", xs: "87%" }} ml={{ lg: "5%", md: "3%", sm: "1.8%" }}>
                                    <Grid item xs={2.2}  md={2}> 
                                        <Typography sx={{
                                            width: "30px",
                                            height: "30px",
                                            background: "white",
                                            padding: "19px",
                                            borderRadius: "75px",
                                            mt: "35%",
                                            cursor: "pointer",
                                            "&:hover": {
                                                background: "black",
                                                transition: "0.5s"

                                            }
                                        }}>
                                            <img src={rasm} alt="" /> <br />


                                        </Typography>
                                        <Typography sx={{ ml: "-55%", mt: "15px", color: "white", fontSize: { xs: "0", lg: "15px", md: "15ox ", sm: "15px" } }}>
                                            Apartments

                                        </Typography>

                                    </Grid>
                                    <Grid item xs={2.2} md={2}>
                                        <Typography sx={{
                                            width: "30px",
                                            height: "30px",
                                            background: "white",
                                            padding: "19px",
                                            borderRadius: "75px",
                                            mt: "35%",
                                            cursor: "pointer",
                                            "&:hover": {
                                                background: "black",
                                                transition: "0.5s"
                                            },
                                            mt: { lg: "65px", md: "60px", sm: "42px ", xs: "-4%" }


                                        }}>
                                            <img src={rasm1} alt="" />


                                        </Typography>
                                        <Typography sx={{ ml: "-55%", mt: "15px", color: "white", fontSize: { xs: "0", lg: "15px", md: "15ox ", sm: "15px" } }}>
                                            Food & Life

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2.2} md={2}>
                                        <Typography sx={{
                                            width: "20px",
                                            height: "20px",
                                            background: "white",
                                            padding: "25px ",
                                            borderRadius: "75px",
                                            mt: "35%",
                                            cursor: "pointer",
                                            "&:hover": {
                                                background: "black",
                                                transition: "0.5s"

                                            }


                                        }}>
                                            <img src={rasm2} alt="" style={{ marginLeft: "-30%" }} />


                                        </Typography>
                                        <Typography sx={{ ml: "-59%", mt: "15px", color: "white", fontSize: { xs: "0", lg: "15px", md: "15ox ", sm: "15px" } }}>
                                            Cars

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2.2} md={2}>
                                        <Typography sx={{
                                            width: "30px",
                                            height: "30px",
                                            background: "white",
                                            padding: "19px",
                                            borderRadius: "75px",
                                            mt: "35%",
                                            cursor: "pointer",
                                            "&:hover": {
                                                background: "black",
                                                transition: "0.5s"

                                            }


                                        }}>
                                            <img src={rasm3} alt="" />


                                        </Typography>
                                        <Typography sx={{ ml: "-55%", mt: "15px", color: "white", fontSize: { xs: "0", lg: "15px", md: "15ox ", sm: "15px" } }}>
                                            Shopping

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2.2}  md={2}>
                                        <Typography sx={{
                                            width: "30px",
                                            height: "30px",
                                            background: "white",
                                            padding: "19px",
                                            borderRadius: "75px",
                                            mt: "35%",
                                            cursor: "pointer",
                                            "&:hover": {
                                                background: "black",
                                                transition: "0.5s"
                                            }


                                        }}>
                                            <img src={rasm4} alt="" />


                                        </Typography>
                                        <Typography sx={{ ml: "-55%", mt: "15px", color: "white", fontSize: { xs: "0", lg: "15px", md: "15ox ", sm: "15px" } }}>
                                            Traveling

                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>

                        </Box>

                    </Box>

                </Box>

            </Box>

        </Box>
    )
}

export default Home
