import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FaPlusCircle } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./style.css";
import Checkbox from '@mui/material/Checkbox';
import { CgMenuLeft } from "react-icons/cg";
import rasm from "./black-logo.png"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const drawerWidth = 240;
const navItems = ['Home', 'Category', "Listing", 'Contact'];



function DrawerAppBar(props) {
    const [height, setHeight] = useState(0);
    const { windowFunc } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setHeight(window.pageYOffset);
        })
        return () => window.removeEventListener('scroll', () => { })
    })

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = windowFunc !== undefined ? () => windowFunc().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex', maxWidth: "100%" }}>
                <AppBar component="nav" sx={{
                    background: height > 95 ? "#fff" : "transparent",
                    color: "#fff",
                    height: "auto",
                    borderBottom: "1px solid rgba(250,250,250,0.30)",
                    padding: {
                        lg: "6px 0px 6px 0px", md: "6px 0px 6px 0px", sm: "6px 0px 6px 0px", xs: "6px 0px 6px 0px",
                        transition: 'all .5s ease 0s',
                    },
                    
                }}>
                    <Toolbar sx={{
                        width: { lg: "76%", md: "94%", sm: "98%", xs: "98%" },
                        margin: { lg: "0% 25% 0% 6%", md: "0% 3% 0% 3%", sm: "0% 0% 0% 2%", xs: "0% 1%" },


                    }} >
                        <Typography sx={{
                            fontSize: { lg: "23px", md: "23px", sm: "23px", xs: "18px" },
                            color: height > 95 ? "#212529" : "#fff",
                            fontWeight: "750",
                            width: { lg: "60%", md: "60%", sm: "60%", xs: "200%" },
                            display: "block",
                            cursor: "pointer",
                            color: "white",
                            padding:"10px 0"
                        }}>
                            <img src={rasm} alt="" />
                        </Typography>
                        <Box sx={{
                            display: { xs: 'none', sm: 'flex', md: "flex", lg: "flex" },
                            width: "100%",
                            ml: { lg: "15%", md: "-20%", sm: "15%" },
                            boxShadow: "0px"

                        }}>
                            {navItems.map((item) => (
                                <Button id="col1" key={item} sx={{
                                    color: height > 95 ? "#8d99af" : "#fff",
                                    fontSize: "18px",
                                    letterSpacing: "0.5px",
                                    // marginRight: "6%",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                    textAlign: "end",
                                    fontWeight: "500",
                                    fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    width: "105px",
                                    ml: { lg: "15px", md: "10px" },
                                    "&:hover": {
                                        color: "#929DB2"
                                    }
                                }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{
                            display: { xs: 'none', sm: 'none', md: "flex", lg: "flex" },
                            textAlign: "end",
                            marginLeft: { lg: "91%", md: "70%", sm: "17%", xs: "0%" },
                            position: "absolute"
                        }}>

                            <Chip id="but2" label="Add Your Listingg" icon={<FaPlusCircle fontSize="large" />} sx={{
                                background: height > 95 ? "#8d99af" : "#fff",
                                color: height > 95 ? "#fff" : "transtion",

                                fontSize: "13px",
                                textTransform: "uppercase",
                                fontWeight: "400",
                                padding: { lg: "15px 20px", md: "6px 10px", sm: "6px 10px", xs: "0px" },
                                borderRadius: "10px",
                                height: "40px ",
                                "&:hover": {
                                    background: "#8D99AF",
                                    color: "#fff"
                                }
                            }} />

                        </Box>
                        <Box sx={{
                            width: { lg: "0%", md: "0%", sm: "100%", xs: "100%" },
                            textAlign: "end",
                            marginRight: "7px"
                        }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { lg: "none", md: "none", sm: "none" },
                                    background: "",
                                    color: "black   ",
                                    borderRadius: "0rem",
                                    padding: "10px 15px",
                                    fontSize: "35px",
                                    fontWeight: "500",
                                    width: "auto",
                                    height: "auto",
                                    padding: "6px 17px"
                                }}
                            >
                                <CgMenuLeft />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

            </Box>

        </>
    );

}

DrawerAppBar.propTypes = {
    windowFunc: PropTypes.func,
};

export default DrawerAppBar;